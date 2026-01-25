import fetch from 'node-fetch';

export class GithubStats {
  async getStatsFromProfile(username: string) {
    const token = process.env.GITHUB_KEY;
    if (!token) throw new Error('Missing GITHUB_KEY');

    const nowYear = new Date().getUTCFullYear();

    // repositories + name (one call)
    const basics = await this.query(token, {
      query: `query($login: String!) {
        user(login: $login) {
          name
          createdAt
          repositories(first: 1) { totalCount }
        }
      }`,
      variables: { login: username },
    });

    const user = basics.data?.user;
    if (!user) throw new Error(`GitHub user not found: ${username}`);

    const startYear = new Date(user.createdAt).getUTCFullYear();

    // contributions summed per-year
    let totalContributions = 0;
    for (let y = startYear; y <= nowYear; y++) {
      const from = `${y}-01-01T00:00:00Z`;
      const to = y === nowYear ? new Date().toISOString() : `${y + 1}-01-01T00:00:00Z`;

      const res = await this.query(token, {
        query: `query($login: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $login) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar { totalContributions }
            }
          }
        }`,
        variables: { login: username, from, to },
      });

      totalContributions += res.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions ?? 0;
    }

    return {
      name: user.name,
      repositories: user.repositories.totalCount,
      totalContributions,
      range: `${startYear}–${nowYear}`,
    };
  }

  private async query(token: string, body: any) {
    const r = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const json = await r.json();
    if (!r.ok || json.errors) {
      throw new Error(JSON.stringify(json.errors ?? json));
    }
    return json;
  }
}
