import { readFileSync } from 'fs';

export default async function handler(req, res) {
  try {
    const data = readFileSync('db.json', 'utf-8'); 
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading db.json:', error);
    res.status(500).json({ error: 'Failed to load data' });
  }
}