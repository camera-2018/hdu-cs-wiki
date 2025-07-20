# 贡献指南

感谢您的贡献，并感谢您在执行贡献操作之前阅读此文档！

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

## 文档命名

1. 对于 md 文件，请命名为 `数字与小数点前缀+文档标题` 的格式

   ```
   1.1.2 新内容.md
   2. 序言.md
   ```

2. 如果您需要开启新的小章节模块，请新建一个文件夹，文件夹的命名格式与 md 文件类似，为 `数字与小数点前缀+模块名`

   ```
   2.2 模块 2
   ```

3. 不论是 md 文件还是文件夹,请不要使用字母或其他特殊符号作为前缀

一个合理的文档结构如下：

```
.
└─ 1.第一章
   ├── 1.1 模块 1
   │   ├── 1.1.10 JavaScript.md
   │   ├── 1.1.11 Lua.md
   │   ├── 1.1.12 Lisp.md
   │   ├── 1.1.1 Ruby.md
   │   ├── 1.1.2 Java.md
   │   ├── 1.1.3 C++.md
   │   ├── 1.1.4 C.md
   │   ├── 1.1.5 Math.md
   │   ├── 1.1.6 Matlab.md
   │   ├── 1.1.7 React.md
   │   ├── 1.1.8 Jupyter.md
   │   └── 1.1.9 Vue.md
   ├── 1.2 模块 2
   │   ├── 1.2.1 C#.md
   │   ├── 1.2.2 Python.md
   │   └── static
   ├── 1.3 结语.md
   ├── 1. 序言.md
   └── static
```

static 文件夹用于存放您的静态资源，如图片，您也可以在模块文件夹下放置新的 static 文件夹，方便引用资源

## 文档风格

1. 使用 Markdown 编写文档，文档格式参考 Markdown 语法。
2. 一个页面必须且只有一个1级标题（H1，一个#），其他标题从2级开始（H2，##）。
3. 本项目自动在英文与中文、数字与中文之间添加空格。

   ```markdown
    AI 与人工智能，AGI 的发展方向。
   ```

4. 标题内的英文单词首字母大写。
5. 代码块使用 ` ``` ` 包裹，并标注常见的语言标识符，如 ` ```python ` ，其作用是使代码正常高亮。
::: details 代码高亮支持的语言

```typescript twoslash
export type Lang =
  | 'abap'
  | 'actionscript-3'
  | 'ada'
  | 'apache'
  | 'apex'
  | 'apl'
  | 'applescript'
  | 'ara'
  | 'asm'
  | 'astro'
  | 'awk'
  | 'ballerina'
  | 'bat' | 'batch'
  | 'beancount'
  | 'berry' | 'be'
  | 'bibtex'
  | 'bicep'
  | 'blade'
  | 'c'
  | 'cadence' | 'cdc'
  | 'clarity'
  | 'clojure' | 'clj'
  | 'cmake'
  | 'cobol'
  | 'codeql' | 'ql'
  | 'coffee'
  | 'cpp'
  | 'crystal'
  | 'csharp' | 'c#' | 'cs'
  | 'css'
  | 'cue'
  | 'cypher' | 'cql'
  | 'd'
  | 'dart'
  | 'dax'
  | 'diff'
  | 'docker' | 'dockerfile'
  | 'dream-maker'
  | 'elixir'
  | 'elm'
  | 'erb'
  | 'erlang' | 'erl'
  | 'fish'
  | 'fsharp' | 'f#' | 'fs'
  | 'gdresource'
  | 'gdscript'
  | 'gdshader'
  | 'gherkin'
  | 'git-commit'
  | 'git-rebase'
  | 'glimmer-js' | 'gjs'
  | 'glimmer-ts' | 'gts'
  | 'glsl'
  | 'gnuplot'
  | 'go'
  | 'graphql'
  | 'groovy'
  | 'hack'
  | 'haml'
  | 'handlebars' | 'hbs'
  | 'haskell' | 'hs'
  | 'hcl'
  | 'hjson'
  | 'hlsl'
  | 'html'
  | 'http'
  | 'imba'
  | 'ini' | 'properties'
  | 'java'
  | 'javascript' | 'js'
  | 'jinja-html'
  | 'jison'
  | 'json'
  | 'json5'
  | 'jsonc'
  | 'jsonl'
  | 'jsonnet'
  | 'jssm' | 'fsl'
  | 'jsx'
  | 'julia'
  | 'kotlin'
  | 'kusto' | 'kql'
  | 'latex'
  | 'less'
  | 'liquid'
  | 'lisp'
  | 'logo'
  | 'lua'
  | 'make' | 'makefile'
  | 'markdown' | 'md'
  | 'marko'
  | 'matlab'
  | 'mdx'
  | 'mermaid'
  | 'mojo'
  | 'narrat' | 'nar'
  | 'nextflow' | 'nf'
  | 'nginx'
  | 'nim'
  | 'nix'
  | 'objective-c' | 'objc'
  | 'objective-cpp'
  | 'ocaml'
  | 'pascal'
  | 'perl'
  | 'php'
  | 'plsql'
  | 'postcss'
  | 'powerquery'
  | 'powershell' | 'ps' | 'ps1'
  | 'prisma'
  | 'prolog'
  | 'proto'
  | 'pug' | 'jade'
  | 'puppet'
  | 'purescript'
  | 'python' | 'py'
  | 'r'
  | 'raku' | 'perl6'
  | 'razor'
  | 'reg'
  | 'rel'
  | 'riscv'
  | 'rst'
  | 'ruby' | 'rb'
  | 'rust' | 'rs'
  | 'sas'
  | 'sass'
  | 'scala'
  | 'scheme'
  | 'scss'
  | 'shaderlab' | 'shader'
  | 'shellscript' | 'bash' | 'sh' | 'shell' | 'zsh'
  | 'shellsession' | 'console'
  | 'smalltalk'
  | 'solidity'
  | 'sparql'
  | 'splunk' | 'spl'
  | 'sql'
  | 'ssh-config'
  | 'stata'
  | 'stylus' | 'styl'
  | 'svelte'
  | 'swift'
  | 'system-verilog'
  | 'tasl'
  | 'tcl'
  | 'tex'
  | 'toml'
  | 'tsx'
  | 'turtle'
  | 'twig'
  | 'typescript' | 'ts'
  | 'v'
  | 'vb' | 'cmd'
  | 'verilog'
  | 'vhdl'
  | 'viml' | 'vim' | 'vimscript'
  | 'vue-html'
  | 'vue'
  | 'vyper' | 'vy'
  | 'wasm'
  | 'wenyan' | '文言'
  | 'wgsl'
  | 'wolfram'
  | 'xml'
  | 'xsl'
  | 'yaml' | 'yml'
  | 'zenscript'
  | 'zig'
```

:::

::: tip 🤓 注意
尽量不要使用 `typora` 等编辑器编辑完 `.md` 文件后直接提交，因为它的渲染效果和本项目前端 md 渲染器 `markdown-it` 不一致。

在 `typora` 中编辑完成后，确认一下 .md 文件源代码是否为正常 Markdown 。

编辑完成后请务必启动本项目在前端查看效果，关于如何启动，请看下文。
:::

## 项目构建指南

需要 nodejs v22 及以上版本。

具体版本可以打开仓库根目录下的 `.node-version` 文件查看。

如果你安装有 [node 版本管理工具](https://github.com/shadowspawn/node-version-usage)，那么它会自动切换到对应的版本。

本项目使用 [bun](https://bun.com/)。

如果你没有安装 bun，可以使用以下命令安装：

```bash
npm install -g bun
```

或者参考 bun 官网文档进行安装。

```bash
bun i                 #安装依赖
bun run docs:dev      #运行预览环境
```

```bash
bun run docs:build    #编译线上环境
bun run docs:preview  #预览线上环境
```

## 图片放置指南

图片放置在当前大章节的 `static` 目录下，然后在 md 文件中使用相对路径引用。

```markdown
![](static/xxx.png)
```

注意尽量不要使用 `img` 这个 HTML 标签，因为经前端构建解析后路径会不正确。

后续会统一放置到 cos 存储桶中。

## 项目配置指南

::: warning 🚧 注意
文件名中禁止英文添加特殊符号，如 `+`、`&`、`#` 等符号，会导致构建失败。
:::

## 如何使用 Git 和 Github

详见 [3.5 Git和Github](./2023旧版内容/3.编程思维体系构建/3.5git与github.md)

## Commit Message 规范

::: tip 🐒
本项目没有强制使用 [commitlint](https://github.com/conventional-changelog/commitlint) ，但是建议遵循以下规范。
> commitlint : 一个提交检查插件 ，可以在提交前检查 commit message 是否符合规范。

本项目选用的规范为 [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)（基于 [Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) 约定）
:::

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
    perf:      性能提升的修改
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

其中详细内容可以参照 [约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/)

本项目额外有使用 semantic-release 自动化版本发布，所以请务必遵循规范提交。

::: warning ⚠️
注意：fix、feat、BREAKING CHANGE 这三种类型的提交会触发自动版本发布。
:::

![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)

## Pull Request 流程与指南

Fork 本仓库，然后在你的仓库中进行修改，修改完成后在本仓库创建 NEW Pull Request ，选择 compare across forks 提交 pr 并评论上你修改的具体信息即可，我们会第一时间审阅并合并。

## Feature

1. Markdown 内支持Latex公式，格式为单行公式双dollar符号、单行公式单dollar符号。（单行公式需要换行才能解析）例如：
    ```latex
    $行内公式\arccos{a}$
    ```
    > 会渲染成 $\arccos{a}$
    ```latex
    $$单行公式\arcsin{b}$$
    ```
    > 会渲染成
    >
    > $$\arcsin{b}$$
    ::: tip
    Latex语法在线编辑器 https://www.latexlive.com
    :::

2. 支持Mermaid流程图，格式如下
    ```markdown
        ```mermaid
        graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
        ``` 
    ```
    会渲染成
    ```mermaid
    graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
    ```
    :::tip
    语法自查 https://mermaid.js.org
    :::

3. 代码分块

    ```
        ::: code-group

        ```sh [npm]
        $ npm install -D vitepress
        ```

        ```sh [pnpm]
        $ pnpm add -D vitepress
        ```

        ```sh [yarn]
        $ yarn add -D vitepress
        ```

        :::
    ```
    ::: code-group

    ```sh [npm]
    $ npm install -D vitepress
    ```

    ```sh [pnpm]
    $ pnpm add -D vitepress
    ```

    ```sh [yarn]
    $ yarn add -D vitepress
    ```

    :::


4. 图片缩放

图片默认支持缩放，鼠标悬浮图片上方会出现放大镜图标，点击即可放大图片。

如果不想让图片缩放，可以在图片class内后添加 `no-zoom` 参数。

markdown 的使用方式如下

```markdown
# 默认（支持缩放）
![](static/xxx.png)
```

```markdown
# 不支持缩放
![](static/xxx.png){.no-zoom}
```
