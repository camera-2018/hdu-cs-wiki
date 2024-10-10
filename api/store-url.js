import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  const { longUrl, shortKey } = req.body;

  if (!longUrl || !shortKey) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    // 将短链映射存储到 Vercel KV 数据库
    await kv.set(shortKey, longUrl);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving to KV:', error);
    res.status(500).json({ error: 'Failed to save short URL' });
  }
}
