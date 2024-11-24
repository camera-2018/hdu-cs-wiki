# 后端Lab: 在本地创建一个简单的 Node.js 服务器返回 HTML 页面

## 目标

在本次 Lab 中，你将学习如何使用 Node.js 创建一个简单的服务器，并返回一个 HTML 页面。页面中包含一个 `<h1>`​ 元素，用于显示随机水果名称。当你访问 `localhost:3000`​ 时，每次都会看到不同的水果名称。

## 第一步：创建服务器文件

1. 在你的项目文件夹中创建一个新的 JavaScript 文件，命名为 `server.js`​。
2. 打开 `server.js`​ 文件，并将以下代码粘贴进去：

    ```javascript
    const http = require('http'); // 引入 Node.js 内置的 HTTP 模块

    // 定义一个包含水果名称的数组
    const fruits = ["Apple", "Banana", "Cherry", "Grape", "Orange", "Pineapple"];

    // 创建一个 HTTP 服务器
    const server = http.createServer((req, res) => {
      // 从数组中随机选取一个水果
      const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

      // 设置响应头为 HTML 格式
      res.writeHead(200, { 'Content-Type': 'text/html' });

      // 返回包含随机水果的 HTML 页面
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Random Fruit</title>
        </head>
        <body style="display: flex; align-items: center; justify-content: center; height: 100vh; font-family: Arial, sans-serif;">
          <h1>${randomFruit}</h1>
        </body>
        </html>
      `);
    });

    // 让服务器监听本地的 3000 端口
    server.listen(3000, '127.0.0.1', () => {
      console.log('Server is running at http://localhost:3000');
    });
    ```

## 代码解析

1. 引入 http 模块
    `const http = require('http');`​：加载 Node.js 内置的 HTTP 模块，用来创建服务器。
2. 定义水果数组
    `const fruits = [...]`​：创建一个数组，包含几种水果名称，供随机选取使用。
3. 创建服务器并设置响应
    `http.createServer((req, res) => {...})`​：

    * ​`req`​ 表示客户端的请求信息（这里我们暂不使用）。
    * ​`res`​ 表示服务器对客户端的响应。我们在此将 `Content-Type`​ 设置为 `text/html`​，告诉浏览器返回的是 HTML 格式。
4. 随机选择水果并生成 HTML 内容

    * ​`Math.floor(Math.random() * fruits.length)`​：使用随机数从 `fruits`​ 数组中选取一个水果。
    * ​`res.end(\`​<html>...</html>\`)`：返回包含随机水果名称的 HTML 页面。在这里，我们用模板字符串（\`​...\`）来插入随机选取的水果名称。
5. 监听端口并启动服务器
    `server.listen(3000, '127.0.0.1', () => {...})`​：让服务器监听 3000 端口，并在启动成功后打印“Server is running at `http://localhost:3000`”。

## 第二步：运行服务器并查看 HTML 页面

1. 运行服务器

    打开终端，确保当前路径是你的项目文件夹，输入以下命令启动服务器：

    ```bash
    node server.js
    ```
2. 访问本地服务器

    打开浏览器，在地址栏输入 `http://localhost:3000`​ 并回车。你会看到一个页面，页面中央有一个 `<h1>`​ 元素，显示随机选取的水果名称。每次刷新页面都会显示不同的水果。
3. 查看网络响应信息

    * 按下 `F12`​ 打开开发者工具，选择 Network（网络）标签。
    * 刷新页面后，可以看到对 `localhost:3000`​ 的请求记录。
    * 点击该请求，查看 Headers 以了解请求和响应的详细信息。Response 标签显示服务器返回的 HTML 内容，可以看到包含随机水果的完整 HTML 结构。

## 总结

通过本次 Lab，你学会了如何使用 Node.js 创建服务器，并返回动态生成的 HTML 页面。这种方式可以让你的页面内容更具互动性，并为接下来的 Express 学习打下基础。
