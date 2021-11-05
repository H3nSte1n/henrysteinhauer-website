import express from 'express';
import { GithubStats } from './utils/GithubStats';

const app = express();

app.get('/', async (_req, res) => {
  const github = new GithubStats();
  const stats = await github.getStatsFromProfile('h3nste1n');

  res.status(200).json({ stats });
});

module.exports = app;
