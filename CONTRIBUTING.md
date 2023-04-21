# 贡献指南
感谢您的贡献，并感谢您在执行此操作之前阅读此文档！

## 致新贡献者
欢迎你的到来，非常感谢你愿意一起建设 HDU-CS-WIKI 💖。

初次参与，你遇到任何问题都可以直接反馈到本仓库，包括但不限于：
  - 开发环境搭建时遇到任何问题。
  - 文档遇到任何问题（笔误，格式，错误等）。
如果你在运行项目的时候发现任何不符合预期或不合理的地方，请直接提交 Issue 反馈和 Bug 报告！

## 如何贡献
我们欢迎各种贡献，包括但不限于：

- 新功能（Feature）
- 代码构建、CI/CD
- Bug 修复
- 文档内容增删改
- Issue 分类、发起、回复、管理、维护
- 网站页面设计
- 在各种媒体、博客文章、群内宣传 HDU-CS-WIKI

## 文档风格
1. 使用 Markdown 编写文档，文档格式参考 [Markdown 语法]()。
2. 一个页面只有一个1级标题（H1，一个#），其他标题从2级开始（H2，##）。
3. 英文与中文之间用空格分开。
   ```markdown
    AI 与人工智能，AGI 的发展方向。
   ```
4. 标题内的英文单词首字母大写。
5. 代码块使用 ` ``` ` 包裹，并标注常见的语言标识符，如 ` ```python `。

## 项目配置指南

修改新添加或移动位置的 md 文件需要在 `.vitepress/config.js` 中的 `sidebar` 中添加或修改对应的配置。

详见 [VitePress 官方文档](https://vitepress.dev/reference/default-theme-sidebar)

## 如何使用 Git 和 Github

详见 [3.5 Git和Github](https://hdu-cs.wiki/3.%E7%BC%96%E7%A8%8B%E6%80%9D%E7%BB%B4%E4%BD%93%E7%B3%BB%E6%9E%84%E5%BB%BA/3.5git%E4%B8%8Egithub.html)

## Commit Message 规范

本项目遵循以下 commit message 规范：

```bash
模板：
type(scope): subject

type为commit的类型
    feat:      新特性
    fix:       修改问题
    refactor:  代码重构
    docs:      文档修改
    style:     代码格式修改
    test:      测试用例修改
    chore:     其他修改, 比如构建流程, 依赖管理
    pref:      性能提升的修改
    build:     对项目构建或者依赖的改动
    ci:        CI 的修改
    revert:    revert 前一个 commit(撤销前一个commit)
    
scope是文件名 / 模块名 / 影响的范围
    例如  schoolSchedule
    
subject为commit概述
    建议符合 50 / 72 formatting
    
例  feat(JoinForm): add success submit tips

冒号后方可以使用中文描述

注意 冒号和subject之间要加空格
```

## Pull Request 流程与指南
Fork 本仓库，然后在你的仓库中进行修改，修改完成后在本仓库创建 NEW Pull Request ，选择 compare across forks 提交 pr 并评论上你修改的具体信息即可，我们会第一时间审阅并合并。

