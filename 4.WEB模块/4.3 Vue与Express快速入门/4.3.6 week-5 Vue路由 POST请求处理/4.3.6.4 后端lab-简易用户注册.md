# Lab：实现 POST 路由，接收用户表单数据并返回确认消息

## 目标

在这个实验中，你将创建一个 POST 路由，接收用户提交的注册信息（用户名和密码），进行验证，并返回确认消息。你将通过操作学习如何使用 Express 处理 POST 请求，如何解析请求体数据，以及如何实现基本的表单验证。

## 任务

1. 创建一个简单的 Express 应用，并处理 POST 请求，接收用户的用户名和密码。
2. 验证：验证用户名和密码是否为空，并确保用户名不重复。
3. 模拟数据库：使用本地 `user.json`​ 文件来模拟存储用户数据。
4. 返回响应：根据验证结果，返回成功或失败的消息。

## 文件树结构

在开始之前，我们先来创建所需的文件和文件夹结构：

```
/lab
  ├── server.js         // Express 服务器文件
  ├── user.json         // 存储用户信息的 JSON 文件（模拟数据库）
```

---

## 步骤 1：初始化项目

在开始之前，我们首先需要安装 Express。如果你已经有了一个 Node.js 项目，可以跳过此步骤。

1. 在终端中，创建一个新的目录并进入该目录：

    ```bash
    mkdir user-registration-lab
    cd user-registration-lab
    ```
2. 初始化一个新的 Node.js 项目：

    ```bash
    npm init -y
    ```
3. 安装 Express：

    ```bash
    npm install express
    ```

## 步骤 2：创建 `server.js`​ 文件

在项目根目录下创建 `server.js`​ 文件，并编写以下代码。

```js
const express = require('express');
const fs = require('fs');
const app = express();

// 使用中间件解析 JSON 数据
app.use(express.json());

// 用户注册路由
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // 验证用户名和密码是否为空
  if (!username || !password) {
    return res.status(400).send('用户名和密码不能为空');
  }

  // 模拟读取本地的用户数据文件
  fs.readFile('./user.json', (err, data) => {
    if (err) {
      return res.status(500).send('读取用户数据失败');
    }

    const users = JSON.parse(data);

    // 检查用户名是否已存在
    if (users.some(user => user.username === username)) {
      return res.status(400).send('用户名已存在');
    }

    // 添加新用户
    users.push({ username, password });

    // 保存更新后的用户数据
    fs.writeFile('./user.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).send('保存用户数据失败');
      }
      res.send('注册成功');
    });
  });
});

// 启动服务器
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

## 代码讲解

1. Express 设置：首先我们使用 `express.json()`​ 中间件来解析 JSON 格式的请求体数据，这样客户端发送的数据就会被自动解析成 JavaScript 对象，存储在 `req.body`​ 中。
2. POST 路由：我们定义了一个 `/register`​ 路由，处理 POST 请求。接收到的请求体数据会被提取出 `username`​ 和 `password`​，并进行验证。
3. 验证和响应：我们验证 `username`​ 和 `password`​ 是否为空，若为空，则返回 `400`​ 错误；然后，我们通过读取 `user.json`​ 文件检查是否已经存在相同的用户名。如果用户名已存在，则返回相应的错误消息。
4. 文件操作：如果用户名可用，我们将新用户数据加入到 `users`​ 数组，并保存到 `user.json`​ 文件中。

## 步骤 3：创建 `user.json`​ 文件

在项目根目录下，创建一个名为 `user.json`​ 的文件，初始化为一个空的用户数组：

```json
[]
```

此文件将用来模拟数据库，存储所有注册用户的信息。每当新用户注册时，我们会将其信息写入该文件。

## 步骤 4：启动服务器

在终端中，使用以下命令启动 Express 服务器：

```bash
node server.js
```

服务器启动后，你可以访问 `http://localhost:3000`​，并测试 POST 请求。

## 步骤 5：使用 `curl`​ 模拟 POST 请求

在 WSL2 Ubuntu 中，你可以使用 `curl`​ 来模拟发送 POST 请求。打开终端，并使用以下命令发送 POST 请求。

1. 发送有效的注册请求

    在终端中执行以下命令来注册新用户：

    ```bash
    curl -X POST http://localhost:3000/register \
    -H "Content-Type: application/json" \
    -d '{"username": "john_doe", "password": "password123"}'
    ```

    如果一切正常，应该会看到返回：

    ```
    注册成功
    ```
2. 用户名为空的请求

    你可以尝试发送一个用户名为空的请求：

    ```bash
    curl -X POST http://localhost:3000/register \
    -H "Content-Type: application/json" \
    -d '{"username": "", "password": "password123"}'
    ```

    服务器应该会返回：

    ```
    用户名和密码不能为空
    ```
3. 用户名已存在的请求

    假设你已经注册了 `john_doe`​，再试一次注册相同的用户名：

    ```bash
    curl -X POST http://localhost:3000/register \
    -H "Content-Type: application/json" \
    -d '{"username": "john_doe", "password": "newpassword"}'
    ```

    服务器会返回：

    ```
    用户名已存在
    ```

## 步骤 6：验证多次注册

通过不断向服务器发送 POST 请求，可以模拟多次注册。例如：

```bash
curl -X POST http://localhost:3000/register \
-H "Content-Type: application/json" \
-d '{"username": "jane_doe", "password": "mypassword"}'
```

每次注册都会将新用户添加到 `user.json`​ 文件中。

## 总结

通过完成本实验，你已经学会了如何使用 Express 来处理 POST 请求，接收客户端提交的表单数据，并将数据写入本地的 JSON 文件中。在实际应用中，这种方法可以用来快速实现简单的用户注册、登录和数据存储功能。

你还学习了如何使用 `curl`​ 来测试 POST 请求，并模拟不同的用户注册场景。`curl`​ 是一个非常强大的命令行工具，能够帮助你快速进行 HTTP 请求测试。

