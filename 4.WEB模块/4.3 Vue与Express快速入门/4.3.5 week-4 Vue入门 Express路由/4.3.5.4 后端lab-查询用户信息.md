
# Lab：创建时间与用户信息API

在本次Lab中，我们将通过一个动手操作来熟悉Express的路由处理和GET请求API开发。我们会创建一个简单的Express应用，包含三个GET接口：

* ​`/api/time`​：返回当前时间的JSON数据。
* ​`/api/user/:id`​：根据URL中的用户ID返回对应的用户信息（模拟数据）。
* ​`/api/items`​：根据查询参数返回不同类别的项目列表。

## Lab 任务目标

* 掌握Express路由的定义方法。
* 学习如何处理路径参数和查询参数。
* 实现并测试不同的GET请求API接口。

---

## Step-by-Step 实现步骤

1. 项目初始化：

    * 在项目文件夹中运行以下命令，创建新项目并安装Express：

      ```bash
      npm init -y
      npm install express
      ```
2. 创建主文件 `server.js`​：

    * 在项目根目录下新建一个文件 `server.js`​，用于配置Express应用和定义API路由。
3. 设置基本的Express服务器：

    * 在 `server.js`​ 中引入Express并创建服务器实例：

      ```javascript
      const express = require('express');
      const app = express();
      const PORT = 3000;
      ```
4. 定义数据对象：

    * 在代码中添加模拟数据，用于`/api/user/:id`​和`/api/items`​接口。

      ```javascript
      // 模拟用户数据
      const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 35 }
      ];

      // 模拟项目数据
      const items = [
        { id: 1, category: "electronics", name: "Laptop" },
        { id: 2, category: "electronics", name: "Smartphone" },
        { id: 3, category: "furniture", name: "Chair" },
        { id: 4, category: "furniture", name: "Table" }
      ];
      ```
5. 创建 `/api/time`​ 路由：

    * 这个路由会返回当前时间的数据。
    * 使用JavaScript的`Date`​对象获取当前时间，并通过`res.json()`​将其返回给客户端。

      ```javascript
      // 返回当前时间
      app.get('/api/time', (req, res) => {
        const currentTime = new Date().toISOString();
        res.json({ time: currentTime });
      });
      ```
6. 创建 `/api/user/:id`​ 路由：

    * 这个路由通过路径参数 `id`​ 获取用户信息。
    * 使用`req.params`​对象获取路径中的`id`​参数，并在`users`​数组中查找匹配的用户数据。

      ```javascript
      // 根据用户ID返回用户信息
      app.get('/api/user/:id', (req, res) => {
        const userId = parseInt(req.params.id);
        const user = users.find(u => u.id === userId);
        if (user) {
          res.json(user);
        } else {
          res.status(404).json({ error: "User not found" });
        }
      });
      ```
7. 创建 `/api/items`​ 路由：

    * 这个路由支持查询参数 `category`​，用于返回特定类别的项目。
    * 使用`req.query`​对象获取查询参数，并在`items`​数组中过滤符合条件的数据。

      ```javascript
      // 根据类别返回项目列表
      app.get('/api/items', (req, res) => {
        const category = req.query.category;
        const filteredItems = category ? items.filter(item => item.category === category) : items;
        res.json(filteredItems);
      });
      ```
8. 启动服务器：

    * 使用`app.listen()`​方法启动服务器，使其监听在指定端口上。

      ```javascript
      // 启动服务器
      app.listen(PORT, () => {
        console.log(`服务器正在运行在 http://localhost:${PORT}`);
      });
      ```

## 完整代码

```javascript
// server.js

const express = require('express');
const app = express();
const PORT = 3000;

// 模拟用户数据
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 }
];

// 模拟项目数据
const items = [
  { id: 1, category: "electronics", name: "Laptop" },
  { id: 2, category: "electronics", name: "Smartphone" },
  { id: 3, category: "furniture", name: "Chair" },
  { id: 4, category: "furniture", name: "Table" }
];

// 当前时间接口
app.get('/api/time', (req, res) => {
  const currentTime = new Date().toISOString();
  res.json({ time: currentTime });
});

// 用户信息接口
app.get('/api/user/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

// 项目列表接口
app.get('/api/items', (req, res) => {
  const category = req.query.category;
  const filteredItems = category ? items.filter(item => item.category === category) : items;
  res.json(filteredItems);
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器正在运行在 http://localhost:${PORT}`);
});
```

## 测试API接口

1. 启动服务器：
    在项目目录下运行以下命令，启动服务器：

    ```bash
    node server.js
    ```

    控制台输出：

    ```
    服务器正在运行在 http://localhost:3000
    ```
2. 测试 `/api/time`​ 接口：
    在浏览器或Postman中访问 `http://localhost:3000/api/time`​，你将看到返回的当前时间数据，例如：

    ```json
    { "time": "2023-10-05T14:30:00.000Z" }
    ```
3. 测试 `/api/user/:id`​ 接口：
    访问 `http://localhost:3000/api/user/1`​，你将看到用户ID为1的用户数据：

    ```json
    { "id": 1, "name": "Alice", "age": 25 }
    ```
4. 测试 `/api/items`​ 接口：
    访问 `http://localhost:3000/api/items?category=electronics`​，你将看到电子产品类别的项目列表：

    ```json
    [
      { "id": 1, "category": "electronics", "name": "Laptop" },
      { "id": 2, "category": "electronics", "name": "Smartphone" }
    ]
    ```

---