// 动态路由处理器 - 直接通过路径参数获取 shortKey
// 路由：example.com/abc123 (其中 abc123 是 shortKey)
export async function onRequest(context) {
  const { params } = context;
  const shortKey = params.shortKey;

  if (!shortKey) {
    return new Response(JSON.stringify({ error: 'Missing shortKey parameter' }), {
      status: 400,
      headers: {
        'content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  try {
    // 从 EdgeOne KV 数据库中查找 longUrl
    // 需要在 EdgeOne Pages 项目中配置 KV 命名空间，这里假设变量名为 my_kv
    const longUrl = await my_kv.get(shortKey);

    if (longUrl) {
      // 如果找到对应的长网址，进行重定向
      return Response.redirect(longUrl, 302);
    } else {
      return new Response(JSON.stringify({ error: 'Short URL not found' }), {
        status: 404,
        headers: {
          'content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  } catch (error) {
    console.error('Error querying KV:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch short URL' }), {
      status: 500,
      headers: {
        'content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}