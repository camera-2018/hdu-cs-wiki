// 处理 POST 请求 - 存储短链映射
// 路由：example.com/store-url
export async function onRequestPost(context) {
  const { request } = context;

  try {
    // 解析请求体
    const body = await request.json();
    const { longUrl, shortKey } = body;

    if (!longUrl || !shortKey) {
      return new Response(JSON.stringify({ error: 'Missing parameters' }), {
        status: 400,
        headers: {
          'content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    // 将短链映射存储到 EdgeOne KV 数据库
    // 需要在 EdgeOne Pages 项目中配置 KV 命名空间，这里假设变量名为 my_kv
    await my_kv.put(shortKey, longUrl);
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Error saving to KV:', error);
    return new Response(JSON.stringify({ error: 'Failed to save short URL' }), {
      status: 500,
      headers: {
        'content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}

// 支持 OPTIONS 请求用于 CORS
export async function onRequestOptions(context) {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// 处理所有其他请求方法
export async function onRequest(context) {
  const { request } = context;
  
  if (request.method === 'POST') {
    return onRequestPost(context);
  } else if (request.method === 'OPTIONS') {
    return onRequestOptions(context);
  } else {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: {
        'content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}