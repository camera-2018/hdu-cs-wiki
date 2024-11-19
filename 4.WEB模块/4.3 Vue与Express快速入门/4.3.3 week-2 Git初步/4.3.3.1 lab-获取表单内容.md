# Lab2: 创建交互式表单并使用 Git 管理项目

### Lab 目标

1. 学会使用 JavaScript 获取表单中的用户输入并动态输出问候信息。
2. 掌握 Git 的基础操作，从项目初始化到推送到 GitHub。
3. 掌握如何使用浏览器开发者工具调试 JavaScript 代码。

---

## Part 1: 使用 JavaScript 创建动态交互的调查问卷

我们将创建一个简单的调查问卷，用户输入性别和年龄后，系统会根据输入显示不同的问候信息。你将学会如何获取用户输入、处理数据并在页面上动态显示结果。

#### 1. 创建基本的 HTML 表单

首先，创建一个新的项目文件夹，避免使用中文命名的目录。因为 Git 和许多开发工具在处理中文路径时可能会出错，尤其是在 Windows 系统中。

在项目文件夹中新建一个名为 `index.html` 的文件，输入以下代码：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>调查问卷</title>
</head>
<body>
  <h2>用户调查问卷</h2>

  <form id="surveyForm">
    <label for="gender">请选择您的性别:</label>
    <select id="gender">
      <option value="male">男</option>
      <option value="female">女</option>
      <option value="other">其他</option>
    </select>
    <br><br>

    <label for="age">请输入您的年龄:</label>
    <input type="number" id="age">
    <br><br>

    <button type="button" onclick="processForm()">提交</button>
  </form>

  <p id="greetingMessage"></p>

  <script src="script.js"></script>
</body>
</html>
```

#### 2. 添加 JavaScript 文件

接下来，你需要创建 `script.js` 文件，写入以下内容：

```javascript
function processForm() {
  // 获取用户输入的性别和年龄
  let gender = document.getElementById('gender').value;
  let age = parseInt(document.getElementById('age').value);

  // 判断性别和年龄并显示对应的问候信息
  let greeting = '';
  if (gender === 'male') {
    greeting = (age >= 20) ? '小伙子，谢谢你的提交！' : '小兄弟，谢谢你的提交！';
  } else if (gender === 'female') {
    greeting = (age >= 20) ? '女士，谢谢你的提交！' : '小姑娘，谢谢你的提交！';
  } else {
    greeting = '谢谢你的提交！';
  }

  // 显示问候信息到页面上
  document.getElementById('greetingMessage').innerText = greeting;

  // 在控制台中显示问候信息
  console.log(greeting);
}
```

#### 3. 检查并运行代码

保存后，你可以在浏览器中打开 `index.html` 文件，并在页面上输入性别和年龄，然后点击提交按钮。你将看到页面上会显示出不同的问候信息。

:::tip
为了查看控制台输出，请按照以下步骤打开开发者工具：

* Windows/Linux 用户：按下 `F12` 或右键点击页面的任意位置，然后选择 "检查" 或 "检查元素"。
* Mac 用户：按下 `Cmd + Option + I` 或者右键点击页面，选择 "检查"。

然后，在弹出的窗口中，点击上方的 "Console" 选项卡，你将在其中看到输出的问候信息。
:::

---

## Part 2: 使用 Git 管理项目

现在我们将学习如何使用 Git 来管理你的项目版本。通过 Git，我们可以记录项目的每一次更改，并且可以将代码推送到 GitHub，方便以后查看和分享。

### 1. 在本地初始化 Git 仓库

#### 步骤 1: 初始化本地仓库

首先，打开命令行工具（Windows 用户可以使用 PowerShell，Mac 和 Linux 用户可以使用终端）。确保你进入了项目文件夹，然后输入以下命令来初始化 Git 仓库：

```bash
git init
```

* **解释：** 
  `git init` 会在当前文件夹中创建一个新的 Git 仓库。现在，你的项目文件夹已经开始被 Git 追踪，之后的每一次文件修改都可以通过 Git 来记录。

#### 提示：避免中文目录

请注意，如果你使用的是 Windows 系统，确保你的项目文件夹路径不包含中文字符。如果你不小心使用了中文路径，可能会遇到一些工具无法正常工作的情况。

### 2. 添加文件到暂存区

#### 步骤 2: 将文件添加到暂存区

下一步是将项目文件添加到 Git 的暂存区中。暂存区是一个准备提交的区域，只有在将文件添加到暂存区后，才能将它们提交到本地仓库中。

```bash
git add .
```

* **解释：** 
  `git add .` 会将当前文件夹下的所有文件添加到暂存区。这意味着 Git 现在知道这些文件已经被修改，并准备将它们保存到版本历史中。

### 3. 提交文件到本地仓库

#### 步骤 3: 提交文件

接下来，我们将暂存区中的文件提交到本地仓库。输入以下命令：

```bash
git commit -m "feat: 创建调查问卷页面，添加性别和年龄表单交互"
```

* **解释**：
  `git commit -m` 是提交文件的命令，`-m` 后面跟的是提交信息，用于描述这次提交的内容。在这个例子中，我们描述了添加表单和 JavaScript 交互逻辑的功能。

:::warning 规范提交信息的重要性
提交信息不仅仅是给自己看的，它还是项目团队协作中的重要沟通工具。良好的提交信息可以帮助项目成员了解每次更改的目的和内容。因此：

* 提交信息要简明扼要，描述本次提交的具体内容。
* 避免像“修改了一点东西”这种模糊的提交说明。

如果提交时没有想清楚，随意填写了信息，会导致团队以后追踪更改时难以了解每次提交的真正意义。
:::

### 4. 创建远程仓库并关联本地仓库

#### 步骤 4: 在 GitHub 创建远程仓库

现在，前往 GitHub，创建一个新的远程仓库，并命名为 `SurveyForm`（或你喜欢的名字）。注意，不要勾选“初始化仓库”，因为我们已经在本地初始化了仓库。

#### 步骤 5: 关联本地仓库和远程仓库

在命令行中，输入以下命令来将本地仓库和 GitHub 的远程仓库关联起来：

```bash
git remote add origin https://github.com/你的用户名/SurveyForm.git
```

*  

  * ***解释：** 
  `git remote add origin` 命令用来告诉 Git，你的本地仓库与 GitHub 上的这个远程仓库相关联。`origin` 是远程仓库的默认名称，后面跟的是你在 GitHub 上创建的仓库的 URL。

### 5. 推送代码到 GitHub

#### 步骤 6: 推送代码到远程仓库

最后一步，我们将本地仓库中的更改推送到 GitHub 上的远程仓库：

```bash
git push -u origin main
```

* **解释：** 
  `git push` 命令会将本地仓库中的代码上传到 GitHub 的远程仓库。`-u` 参数会将本地的 `main` 分支与远程仓库的 `main` 分支关联起来，确保以后每次推送都不需要重复指定分支。

:::warning 推送前验证身份
在推送代码到 GitHub 时，第一次可能会要求输入 GitHub 的用户名和密码。如果你已经启用了双因素认证，请确保在网站里创建并使用 GitHub 的身份令牌（personal access token）代替密码登录。令牌的获取可以在哔哩哔哩找到详细教程，此处不再展开。
:::

---

## 总结

通过这个 Lab，你学会了如何使用 JavaScript 创建交互式表单，并通过 Git 管理项目的版本历史，最终将项目代码推送到 GitHub。整个过程包括了从初始化仓库、添加文件、提交文件到推送到远程仓库的完整步骤。通过这些操作，你已经具备了基本的前端交互开发和版本控制能力。

:::tip
确保你已经在本地保存好所有的更改，并将它们成功推送到 GitHub。这些技能将是你以后学习前端和后端开发的坚实基础。我们也将在Homework中用到这个云端仓库。
:::