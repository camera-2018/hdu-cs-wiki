# 前端Lab

## 目标

* 掌握 DOM 操作和事件处理，实现动态的网页交互。
* 熟练使用高级 CSS 技巧，如背景图自动填充、半透明磨砂效果、按钮悬停变暗等，打造美观的网页界面。
* 了解项目的文件结构和相对路径的使用，确保资源正确加载。
* 将项目部署到 GitHub Pages，让你的应用可以在线访问。
* 学会在移动设备上调试网页，提高页面的响应式设计能力。

## Part 1: 实现具有增删功能的 Todo List 应用

在这个部分，我们将一步步地创建一个具有增删任务功能的 Todo List 应用，并添加精美的样式。让我们一起开始吧！

### 1. 项目文件结构

首先，我们需要规划一下项目的文件结构：

```
your-project/
├── index.html
├── style.css
├── script.js
└── background.jpg
```

:::warning

* `background.jpg` 文件应与 `index.html` 和 `style.css` 保持在同一目录下，确保路径正确。
* 文件命名：确保文件名全部小写，不要包含空格或特殊字符。

:::

### 2. 创建基本的 HTML 结构

在 `index.html` 中，输入以下代码：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>我的 Todo List</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <img src="background.jpg" alt="背景图" class="background">
  <div class="card">
    <h1>我的待办事项</h1>
    <ul id="todo-list">
      <!-- 动态生成的任务项将显示在这里 -->
    </ul>
    <div class="input-group">
      <input type="text" id="task-input" placeholder="请输入新任务">
      <button id="add-button" class="button">添加</button>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

相对路径的使用：

* 链接 CSS 文件：`<link rel="stylesheet" href="style.css">`，表示 `style.css` 与 `index.html` 在同一目录下。
* 链接 JavaScript 文件：`<script src="script.js"></script>`，同理。

DOM 树结构：

我们的 HTML 结构对应的 DOM 树如下所示：

```
html
└── body
    ├── img.background
    └── div.card
        ├── h1
        ├── ul#todo-list
        └── div.input-group
            ├── input#task-input
            └── button#add-button.button
```

### 3. 添加样式美化页面

在 `style.css` 中，输入以下代码：

```css
/* 全局样式 */
body {
  margin: 0;
  padding: 0;
  font-family: '微软雅黑', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

/* 背景图片样式 */
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

/* 卡片样式 */
.card {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  width: 400px;
  padding: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  text-align: center;
  z-index: 1;
}

/* 列表样式 */
#todo-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

#todo-list li {
  background: rgba(255, 255, 255, 0.5);
  margin: 10px 0;
  padding: 10px 15px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 输入区域样式 */
.input-group {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

#task-input {
  width: 70%;
  padding: 10px;
  border: none;
  border-radius: 10px 0 0 10px;
  outline: none;
}

.button {
  width: 30%;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #2c80b4;
}

/* 删除按钮样式 */
.delete-btn {
  background-color: transparent;
  border: none;
  color: #e74c3c;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.3s;
}

.delete-btn:hover {
  color: #c0392b;
}
```

提示：

* 背景图片：在 `background.jpg` 文件放在与 `index.html` 和 `style.css` 同目录下，确保路径简洁。
* 使用 `img` 标签设置背景图，并通过 CSS 设置位置、大小和 z-index 确保其在最底层。

### 4. 编写 JavaScript 实现功能

在 `script.js` 中，输入以下代码：

```javascript
// 获取元素
const addButton = document.getElementById('add-button');
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');

// 添加任务函数
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('请输入任务内容！');
    return;
  }

  // 创建任务项
  const listItem = document.createElement('li');

  // 创建任务文本
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  // 创建删除按钮
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '删除';
  deleteButton.classList.add('delete-btn');

  // 组装任务项
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);

  // 清空输入框
  taskInput.value = '';

  // 绑定删除事件
  deleteButton.addEventListener('click', function() {
    todoList.removeChild(listItem);
  });
}

// 绑定添加按钮点击事件
addButton.addEventListener('click', addTask);

// 按下回车键也能添加任务
taskInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
```

解释：

* `trim()` 方法：用于去除字符串两端的空白字符，防止用户只输入空格。
* 事件监听器：为添加按钮和输入框添加事件监听器，实现交互功能。
* 任务项点击事件：点击任务项即可删除，方便管理。

### 5. 运行你的应用

步骤：

1. 使用 Live Server 运行项目：

    * 在 VSCode 中打开 `index.html` 文件。
    * 右键点击编辑区域，选择 `Open with Live Server`。
2. 测试应用：

    * 在浏览器中，输入任务内容，点击添加按钮或按下回车键，添加任务。
    * 点击任务项，删除任务。

提示：

* Live Server 插件：如果你之前已经安装了 Live Server，可以直接使用。如果没有安装，可以在 VSCode 的扩展商店中搜索 `Live Server`，点击安装。
* 相对路径问题：确保你的 CSS 和 JavaScript 文件与 `index.html` 正确关联，背景图片的路径也要正确。

### 6. 调试与优化

在浏览器中打开开发者工具：

* 按下 `F12`，打开开发者工具。

查看移动端效果：

1. 切换到移动设备视图：

    * 在开发者工具中，点击左上角的 设备图标（Toggle device toolbar），或者按下快捷键 `Ctrl + Shift + M`（Windows）或 `Cmd + Shift + M`（Mac）。
2. 选择设备：

    * 在顶部的设备下拉菜单中，选择常用的移动设备，例如 iPhone X、Pixel 2 等。
3. 查看效果并调试：

    * 检查页面在不同设备上的显示效果。

拓展阅读：

* 响应式设计：使用 CSS 媒体查询，根据屏幕宽度调整元素的样式。

  ```css
  @media (max-width: 400px) {
    .card {
      width: 90%;
      margin: 50px auto;
    }
  }
  ```

## Part 2: 部署你的应用到 GitHub Pages

现在，我们将把你的应用部署到 GitHub Pages，让你的朋友们可以在线访问你的作品。

### 1. 推送到仓库

之前已经讲过，这里有两种情况：

**情况1：第一次初始化仓库**

```bash
git init
git add .
git commit -m "feat: 初始提交，完成 Todo List 应用"
# 在 GitHub 上创建一个仓库，不要勾选 `Initialize this repository with a README`
git remote add origin https://github.com/你的用户名/todo-list.git
git push -u origin master
```

**情况2：已有本地和远程仓库**

```bash
git branch -M main # 如果本地分支是 master，远程仓库是 main，重命名本地分支
# 推送到远程
git push -u origin main
```

### 2. 部署到 GitHub Pages

步骤：

1. 在 GitHub 仓库中，进入 `Settings`。
2. 启用 GitHub Pages：

    * 左侧菜单中，点击 `Pages`。
    * 在 `Source` 部分，选择部署方式（例如 `From Actions` 或 `From Branch`）。
    * 选择分支，通常为 `main` 或 `master`。
3. 等待部署完成：

    * 页面会刷新，但不会直接显示访问链接。
    * 你可以通过仓库的 `Settings > Pages` 页面找到访问链接，通常为：

      ```
      Your site is ready to be published at https://你的用户名.github.io/todo-list/
      ```

注意事项：

* 入口文件命名：确保你的入口文件是 `index.html`，否则 GitHub Pages 无法正确识别。
* 等待时间：首次部署可能需要几分钟时间，请耐心等待。

### 4. 访问你的应用

* 打开链接：点击或复制 GitHub Pages 提供的链接，在浏览器中访问。
* 测试应用：再次测试添加和删除任务的功能，确保在线上环境中一切正常。

恭喜你！你已经成功地将你的应用部署到了 GitHub Pages，快把这个链接复制下来吧！

## 总结

在这个 Lab 中，我们：

* 实现了一个具有增删功能的 Todo List 应用，掌握了 DOM 操作和事件处理。
* 学习了高级 CSS 技巧，如背景图自动填充、半透明磨砂效果、按钮悬停变暗等，提升了网页的美观度。
* 了解了项目的文件结构和相对路径的使用，确保资源正确加载。
* 学会了在移动设备上调试网页，增强了页面的响应式设计能力。
* 将项目部署到了 GitHub Pages，体验了从开发到上线的完整流程。
