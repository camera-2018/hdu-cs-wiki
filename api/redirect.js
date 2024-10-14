import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  const { shortKey } = req.query;

  try {
    // 从 Vercel KV 数据库中查找 longUrl
    const longUrl = await kv.get(shortKey);

    if (longUrl) {
      // 如果找到对应的长网址，进行重定向
      res.redirect(longUrl);
    } else {
      res.status(404).json({ error: 'Short URL not found' });
    }
  } catch (error) {
    console.error('Error querying KV:', error);
    res.status(500).json({ error: 'Failed to fetch short URL' });
  }
}
