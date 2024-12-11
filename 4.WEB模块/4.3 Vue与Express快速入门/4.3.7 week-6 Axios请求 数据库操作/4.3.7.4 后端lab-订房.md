# Lab：创建用户数据存储和查询 API

## 目标

在本次实验中，你将创建一个 MongoDB 数据表来存储用户数据，并通过 API 路由实现保存和查询功能。通过本实验，你将学习如何使用 Express 和 MongoDB 处理数据库操作，包括如何创建用户数据模型、实现保存用户数据的 POST 路由，以及如何通过 GET 请求查询存储在 MongoDB 中的用户数据。

## 任务

1. 创建一个 MongoDB 数据表来存储用户数据（包括姓名和预订日期）。
2. 实现一个 API 路由，允许通过 POST 请求保存用户数据。
3. 使用 curl 命令查询 MongoDB 中的一个用户数据。

## 文件树结构

在开始之前，首先创建以下目录和文件结构：

```
Week6/
├── server.js          # 主服务器文件
├── models/
│   └── user.js        # 用户数据模型
├── routes/
│   └── userRoutes.js  # 用户路由
└── package.json       # 项目依赖配置
```

---

## 步骤 1：初始化项目

1. **创建项目文件夹**  
    在终端中创建一个新的目录并进入该目录：

    ```bash
    mkdir Week6
    cd Week6
    ```
2. **初始化一个新的 Node.js 项目**  
    运行以下命令来初始化一个 Node.js 项目：

    ```bash
    pnpm init
    ```
3. **安装所需依赖**  
    我们需要安装 `express`​、`mongoose`​ 和 `body-parser`​ 来构建后端应用并连接 MongoDB：

    ```bash
    pnpm install express mongoose body-parser
    ```

---

## 步骤 2：定义用户模型

1. 在 `models/`​ 文件夹中创建 `user.js`​ 文件，并编写以下代码：

    ```javascript
    const mongoose = require('mongoose');

    // 定义用户数据模型
    const userSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,  // 姓名是必填字段
      },
      reservationDate: {
        type: Date,
        required: true,  // 预订日期是必填字段
      }
    });

    // 导出模型
    module.exports = mongoose.model('User', userSchema);
    ```

    **代码讲解：**

    * ​**​`mongoose.Schema`​**​：定义一个 `userSchema`​，它包含 `name`​（姓名）和 `reservationDate`​（预订日期）两个字段。每个字段都设置了 `required: true`​，表示这两个字段都是必填项。
    * ​**​`mongoose.model()`​** ​：通过 `userSchema`​ 创建一个 `User`​ 模型，它将映射到数据库中的用户数据集合。

---

## 步骤 3：编写路由

1. 在 `routes/`​ 文件夹中创建 `userRoutes.js`​ 文件，编写以下代码：

    ```javascript
    const express = require('express');
    const User = require('../models/user');
    const router = express.Router();

    // 保存用户数据的 POST 路由
    router.post('/add-user', async (req, res) => {
      const { name, reservationDate } = req.body;

      if (!name || !reservationDate) {
        return res.status(400).send('姓名和预订日期是必填项');
      }

      try {
        // 创建新用户并保存到数据库
        const newUser = new User({ name, reservationDate });
        await newUser.save();
        res.status(201).send('用户数据已成功保存！');
      } catch (err) {
        res.status(500).send('保存用户数据时出错：' + err.message);
      }
    });

    // 查询用户数据的 GET 路由
    router.get('/get-user/:name', async (req, res) => {
      const { name } = req.params;

      try {
        // 查找用户
        const user = await User.findOne({ name });
        if (!user) {
          return res.status(404).send('未找到该用户');
        }
        res.json(user);  // 返回用户数据
      } catch (err) {
        res.status(500).send('查询用户时出错：' + err.message);
      }
    });

    module.exports = router;
    ```

    **代码讲解：**

    * ​**​`router.post('/add-user', async (req, res) => {...})`​** ​：这是处理 POST 请求的路由，接收用户数据（姓名和预订日期），并将其保存到 MongoDB 中。
    * ​**​`new User({ name, reservationDate })`​** ​：创建一个新的用户实例，并通过 `save()`​ 方法将其保存到 MongoDB 中。
    * ​**​`router.get('/get-user/:name', async (req, res) => {...})`​** ​：这是处理 GET 请求的路由，根据用户姓名查询数据库中的用户数据并返回。

---

## 步骤 4：连接数据库

1. 在 `server.js`​ 中配置 MongoDB 连接和启动服务器：

    ```javascript
    const express = require('express');
    const mongoose = require('mongoose');
    const bodyParser = require('body-parser');
    const userRoutes = require('./routes/userRoutes');  // 引入用户路由

    const app = express();

    // 解析请求体中的 JSON 数据
    app.use(bodyParser.json());

    // 连接 MongoDB 数据库
    mongoose.connect('mongodb://localhost:27017/week6db');

    // 获取数据库连接实例
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB 连接失败：'));
    db.once('open', () => {
      console.log('MongoDB 连接成功！');
    });

    // 使用用户路由
    app.use('/api/users', userRoutes);

    // 启动服务器
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`服务器已启动，访问地址：http://localhost:${PORT}`);
    });
    ```

    **代码讲解：**

    * ​**​`mongoose.connect()`​** ​：连接到本地 MongoDB 数据库 `week6db`​。如果数据库不存在，MongoDB 会自动创建。
    * ​**​`app.use('/api/users', userRoutes)`​** ​：将用户路由注册到 Express 应用中，所有与用户相关的 API 请求都会由 `userRoutes.js`​ 文件中的路由处理。
    * ​**​`bodyParser.json()`​** ​：中间件，用于解析 POST 请求中的 JSON 格式数据。

---

## 步骤 5：测试 API

1. **测试添加用户数据：**   
    使用 `curl`​ 命令发送 POST 请求，保存凉风青叶的用户数据：

    ```bash
    curl -X POST http://localhost:3000/api/users/add-user \
    -H "Content-Type: application/json" \
    -d '{"name": "Aoba_Suzukaze", "reservationDate": "2024-12-25"}'
    ```

    如果数据成功保存，返回以下响应：

    ```bash
    用户数据已成功保存！
    ```
2. **测试查询用户数据：**   
    使用 `curl`​ 命令查询某个用户的数据：

    ```bash
    curl -X GET http://localhost:3000/api/users/get-user/Aoba_Suzukaze
    ```

    如果用户存在，返回以下响应：

    ```json
    {
      "_id": "60d5f84215a7d8a7416b7e56",
      "name": "Aoba_Suzukaze",
      "reservationDate": "2024-12-25T00:00:00.000Z",
      "__v": 0
    }
    ```

    如果用户不存在，返回以下响应：

    ```bash
    未找到该用户
    ```

---

## 步骤 6：运行与调试

1. **启动服务器**：在终端中运行以下命令启动服务器：

    ```bash
    node server.js
    ```
2. **验证功能**：根据上面的测试步骤，使用 `curl`​ 命令测试添加和查询用户数据的功能。

## 总结

在本实验中，你通过实际操作创建了一个简单的 MongoDB 数据表，并实现了保存和查询用户数据的 API。你学习了如何定义 MongoDB 数据模型、如何使用 Express 处理 API 路由以及如何通过 `curl`​ 命令进行测试。通过这个实验，你可以更深入地理解如何在 Node.js 应用中集成 MongoDB，进行数据存储与查询。
