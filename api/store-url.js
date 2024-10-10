// api/store-url.js
export default function handler(req, res) {
  const { longUrl, shortKey } = req.body;
  if (!longUrl || !shortKey) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  // 模拟数据库，使用一个简单对象存储
  const urlDatabase = {};

  // 将短链和长网址存入对象
  urlDatabase[shortKey] = longUrl;

  // 返回成功响应
  res.status(200).json({ success: true });
}
