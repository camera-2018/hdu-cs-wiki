// api/redirect.js
export default function handler(req, res) {
  const { shortKey } = req.query || req.params; // 支持 req.params 解析路径参数

  // 模拟从数据库中查找
  const urlDatabase = {}; // 这里需要根据实际情况使用持久化存储
  const longUrl = urlDatabase[shortKey];

  if (longUrl) {
    // 进行重定向
    res.redirect(longUrl);
  } else {
    res.status(404).json({ error: 'Short URL not found' });
  }
}
