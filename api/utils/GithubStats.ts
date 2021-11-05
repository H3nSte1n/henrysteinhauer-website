import fetch from 'node-fetch';

export class GithubStats {
  public async getStatsFromProfile(username: string) {
    const body = {
      query: `query {
            user(login: "${username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                }
              }
              repositories(first: 100) {
                totalCount
              }
            }
          }`,
    };
    return await this.get(body);
  }

  private async get(body: Record<string, string>) {
    return await this.exec(body);
  }

  private async exec(body: Record<string, string>) {
    const token = process.env.GITHUB_KEY;
    const headers = {
      Authorization: `bearer ${token}`,
    };

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    });

    return await response.json();
  }
}
