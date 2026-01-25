import express from 'express';
import { GithubStats } from './utils/GithubStats';

const app = express();
const CACHE_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours
let cache: { value: any; expiresAt: number } | null = null;

app.get('/', async (_req, res) => {
  try {
    const now = Date.now();

    if (cache && cache.expiresAt > now) {
      return res.status(200).json({ stats: cache.value });
    }

    const github = new GithubStats();
    const stats = await github.getStatsFromProfile('h3nste1n');

    cache = { value: stats, expiresAt: now + CACHE_TTL_MS };

    return res.status(200).json({ stats });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message ?? 'Failed to fetch GitHub stats' });
  }
});

module.exports = app;
