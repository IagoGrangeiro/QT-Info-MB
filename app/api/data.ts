// pages/api/data.js
import { openDb } from '../lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  const db = await openDb();

  if (req.method === 'GET') {
    const data = await db.all('SELECT * FROM perguntas');
    res.status(200).json(data);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
