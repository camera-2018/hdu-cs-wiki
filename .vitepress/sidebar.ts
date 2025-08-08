import fs from 'fs';
import path from 'path';

export function main_sidebar() {
  return [
    {
      text: '简介',
      collapsed: true,
      items: [
        { text: '简介', link: '/简介' },
        { text: '使用指南', link: '/使用指南' },
        { text: '2023旧版内容', link: '/2023旧版内容/旧版内容索引' },
      ]
    },
    {
      text: '1.杭电生存指南（最重要模块）',
      collapsed: true,
      items: [
        { text: '1.1 人文社科的重要性（韩健夫老师寄语）', link: '/1.杭电生存指南/1.1人文社科的重要性（韩健夫老师寄语）' },
        { text: '1.2 竞赛指北', link: '/1.杭电生存指南/1.2竞赛指北' },
        { text: '1.3 导师选择', link: '/1.杭电生存指南/1.3导师选择' },
        { text: '1.4 小心项目陷阱', link: '/1.杭电生存指南/1.4小心项目陷阱' },
        { text: '1.5 小组作业避雷指南', link: '/1.杭电生存指南/1.5小组作业避雷指南' },
        { text: '1.6 正确解读GPA', link: '/1.杭电生存指南/1.6正确解读GPA' },
        { text: '1.7 杭电出国自救指南', link: '/1.杭电生存指南/1.7杭电出国自救指南' },
        { text: '1.8 转专业二三事', link: '/1.杭电生存指南/1.8转专业二三事' },
        { text: '1.9 问题专题：好想进入实验室', link: '/1.杭电生存指南/1.9问题专题：好想进入实验室' },
        { text: '1.10 如何读论文', link: '/1.杭电生存指南/1.10如何读论文' },
        { text: '1.11 陷入虚无主义？进来看看吧', link: '/1.杭电生存指南/1.11陷入虚无主义？进来看看吧' },
        { text: '1.12 选课原则与抢课技巧', link: '/1.杭电生存指南/1.12选课原则与抢课技巧' },
        { text: '1.13 数学学习篇', link: '/1.杭电生存指南/1.13数学学习篇' },
        { text: '1.14 杭电“失败”指南', link: '/1.杭电生存指南/1.14 杭电失败指南' },
      ]
    },
    {
      text: '2.编程模块',
      collapsed: true,
      items: [
        { text: '2.编程模块', link: '/2.编程模块/2.编程模块' },
      ]
    },
    {
      text: '3.AI模块',
      collapsed: true,
      items: [
        { text: '3.AI模块', link: '/3.AI模块/3.AI模块' },
      ]
    },
    {
      text: '4.WEB模块',
      collapsed: true,
      items: [
        { text: '4.WEB模块', link: '/4.WEB模块/4.WEB模块' },
      ]
    },
    {
      text: '5.安全模块',
      collapsed: true,
      items: [
        { text: '5.安全模块', link: '/5.安全模块/5.安全模块' },
      ]
    },
    {
      text: '6.课程合集',
      collapsed: true,
      items: [
        { text: '6.课程合集', link: '/6.课程合集/6.课程合集' },
      ]
    },
    {
      text: '7.底层模块',
      collapsed: true,
      items: [
        { text: '7.底层模块', link: '/7.底层模块/7.底层模块' },
      ]
    },
    {
      text: '8.游戏模块',
      collapsed: true,
      items: [
        { text: '8.游戏模块', link: '/8.游戏模块/8.游戏模块' },
      ]
    },
    {
      text: '9.Web3模块',
      collapsed: true,
      items: [
        { text: '9.Web3模块', link: '/9.Web3模块/9.Web3模块' },
      ]
    },
    {
      text: '10.硬件模块',
      collapsed: true,
      items: [
        { text: '10.硬件模块', link: '/10.硬件模块/10.硬件模块' },
      ]
    },
    {
      text: '更改日志',
      link: '/CHANGELOG'
    }
    ,
    {
      text: '贡献者',
      link: '/contributors'
    },
    {
      text: '贡献指南',
      link: '/CONTRIBUTING'
    }
  ]
}

export function main_sidebar_old() {
  return [
    {
      text: "2.高效学习",
      collapsed: true,
      items: [{ text: "2.高效学习", link: "/2023旧版内容/2.高效学习/2.高效学习" },
      { text: '2.1高效的前提：摆脱高中思维', link: '/2023旧版内容/2.高效学习/2.1高效的前提：摆脱高中思维' },
      { text: '2.2优雅的使用工具', link: '/2023旧版内容/2.高效学习/2.2优雅的使用工具' },
      { text: '2.3高效的信息检索', link: '/2023旧版内容/2.高效学习/2.3高效的信息检索' },
      { text: '2.4优雅的记笔记', link: '/2023旧版内容/2.高效学习/2.4优雅的记笔记' },
      { text: '2.5以理工科的方式阅读英语', link: '/2023旧版内容/2.高效学习/2.5以理工科的方式阅读英语' },
      { text: '2.6学会使用AI辅助学习', link: '/2023旧版内容/2.高效学习/2.6学会使用AI辅助学习' },]
    },
    {
      text: "3.编程思维体系构建",
      collapsed: true,
      items: [
        { text: '3.编程思维体系构建', link: '/2023旧版内容/3.编程思维体系构建/3.编程思维体系构建' },
        { text: '3.0 编程入门之道', link: '/2023旧版内容/3.编程思维体系构建/3.0 编程入门之道' },
        { text: '3.1该使用哪个编辑器？？？', link: '/2023旧版内容/3.编程思维体系构建/3.1该使用哪个编辑器？？？' },
        { text: '3.2算法杂谈', link: '/2023旧版内容/3.编程思维体系构建/3.2算法杂谈' },
        { text: '3.3如何选择编程语言', link: '/2023旧版内容/3.编程思维体系构建/3.3如何选择编程语言' },
        { text: '3.4C语言', link: '/2023旧版内容/3.编程思维体系构建/3.4C语言' },
        { text: '3.5git与github', link: '/2023旧版内容/3.编程思维体系构建/3.5git与github' },
        { text: '3.6Python（灵巧的胶水）', link: '/2023旧版内容/3.编程思维体系构建/3.6Python（灵巧的胶水）' },
        { text: '3.X 聊聊设计模式和程序设计', link: '/2023旧版内容/3.编程思维体系构建/3.X 聊聊设计模式和程序设计' },
        { text: '3.Y 附加模块：Linux', link: '/2023旧版内容/3.编程思维体系构建/3.Y 附加模块：Linux' }
      ]
    },
    {
      text: "4.人工智能",
      collapsed: true,
      items: [
        { text: "4.人工智能", link: "/2023旧版内容/4.人工智能/4.人工智能" },
        { text: '4.1前言', link: '/2023旧版内容/4.人工智能/4.1前言' },
        { text: '4.2机器学习（AI）快速入门（quick start）', link: '/2023旧版内容/4.人工智能/4.2机器学习（AI）快速入门（quick start）' },
        { text: '4.3人工智能导论及机器学习入门', link: '/2023旧版内容/4.人工智能/4.3人工智能导论及机器学习入门' },
        { text: '4.4FAQ：常见问题', link: '/2023旧版内容/4.人工智能/4.4FAQ：常见问题' },
        { text: '4.5图网络略述（intro&GCN）', link: '/2023旧版内容/4.人工智能/4.5图网络略述（intro&GCN）' },
        { text: '4.6数据分析', link: '/2023旧版内容/4.人工智能/4.6数据分析' },
        { text: '4.7如何做研究', link: '/2023旧版内容/4.人工智能/4.7如何做研究' },
        { text: '4.8科研论文写作', link: '/2023旧版内容/4.人工智能/4.8科研论文写作' },
        { text: '4.9从 AI 到 智能系统 —— 从 LLMs 到 Agents', link: '/2023旧版内容/4.人工智能/4.9从 AI 到 智能系统 —— 从 LLMs 到 Agents' },
        { text: '4.10LLM Agent之结构化输出', link: '/2023旧版内容/4.人工智能/4.10LLMAgent之结构化输出' },
        { text: '4.11本章节内容的局限性', link: '/2023旧版内容/4.人工智能/4.11本章节内容的局限性' },]
    },
    {
      text: "5.富有生命的嵌入式",
      collapsed: true,
      items: [
        { text: "5.富有生命的嵌入式", link: "/2023旧版内容/5.富有生命的嵌入式/5.富有生命的嵌入式" },
        { text: '5.1嵌入式是什么？可以吃吗？', link: '/2023旧版内容/5.富有生命的嵌入式/5.1嵌入式是什么？可以吃吗？' },
        { text: '5.2New meaning of C', link: '/2023旧版内容/5.富有生命的嵌入式/5.2New meaning of C' },
        { text: '5.3还玩裸机？上操作系统！', link: '/2023旧版内容/5.富有生命的嵌入式/5.3还玩裸机？上操作系统！' }
      ]
    },
    {
      text: "6.计算机安全",
      collapsed: true,
      items: [
        { text: "6.计算机安全", link: "/2023旧版内容/6.计算机安全/6.计算机安全" },
        { text: '6.1Web安全', link: '/2023旧版内容/6.计算机安全/6.1Web安全' },
        { text: '6.2二进制安全', link: '/2023旧版内容/6.计算机安全/6.2二进制安全' },
        { text: '6.3密码学', link: '/2023旧版内容/6.计算机安全/6.3密码学' },
        { text: '6.4安全杂项', link: '/2023旧版内容/6.计算机安全/6.4安全杂项' },
        { text: '6.5学习资料推荐', link: '/2023旧版内容/6.计算机安全/6.5学习资料推荐' },]
    },
    {
      text: "7.网络应用开发入门",
      collapsed: true,
      items: [
        { text: "7.网络应用开发入门", link: "/2023旧版内容/7.网络应用开发/7.网络应用开发入门" },
        { text: '7.1WEB开发入门', link: '/2023旧版内容/7.网络应用开发/7.1WEB开发入门' },
        { text: '7.2前端部分', link: '/2023旧版内容/7.网络应用开发/7.2.1基础(三件套)' },
        { text: '7.3后端部分', link: '/2023旧版内容/7.网络应用开发/7.3.1基础部分' },
      ]
    },
    {
      text: "8.基础学科",
      collapsed: true,
      items: [
        { text: "8.基础学科", link: "/2023旧版内容/8.基础学科/8.基础学科" },
        { text: '8.1经济学科普Part1', link: '/2023旧版内容/8.基础学科/8.1经济学科普Part1' },
      ]
    },
    {
      text: "9.计算机网络",
      collapsed: true,
      items: [
        { text: "9.计算机网络", link: "/2023旧版内容/9.计算机网络/9.计算机网络" },
        { text: '9.1 计网速通', link: '/2023旧版内容/9.计算机网络/9.1计网速通' },
      ]
    },
  ]
}

export function chapter2_old() {
  return [
    { text: '返回上一层', link: '/2023旧版内容/旧版内容索引' },
    {
      text: '2.高效学习',
      collapsed: false,
      items: [
        { text: '2.高效学习', link: '/2023旧版内容/2.高效学习/2.高效学习' },
        {
          text: '2.1高效的前提：摆脱高中思维',
          collapsed: true,
          items: [
            { text: '2.1高效的前提：摆脱高中思维', link: '/2023旧版内容/2.高效学习/2.1高效的前提：摆脱高中思维' },
            { text: '2.1.1悲壮的学习方式', link: '/2023旧版内容/2.高效学习/2.1.1悲壮的学习方式' },
            { text: '2.1.2浮躁的心理状态', link: '/2023旧版内容/2.高效学习/2.1.2浮躁的心理状态' },
            { text: '2.1.3错误的提问姿态', link: '/2023旧版内容/2.高效学习/2.1.3错误的提问姿态' },
            { text: '2.1.4书籍的盲目崇拜', link: '/2023旧版内容/2.高效学习/2.1.4书籍的盲目崇拜' },
            { text: '2.1.5错误的学习配比', link: '/2023旧版内容/2.高效学习/2.1.5错误的学习配比' },
          ]
        },
        { text: '2.2优雅的使用工具', link: '/2023旧版内容/2.高效学习/2.2优雅的使用工具' },
        {
          text: '2.3高效的信息检索',
          collapsed: true,
          items: [
            { text: '2.3高效的信息检索', link: '/2023旧版内容/2.高效学习/2.3高效的信息检索' },
            { text: '2.3.1阅读文档（B百度爬）', link: '/2023旧版内容/2.高效学习/2.3.1阅读文档（B百度爬）' },
            { text: '2.3.2检索论文核心内容', link: '/2023旧版内容/2.高效学习/2.3.2检索论文核心内容' },
            { text: '2.3.3优秀的开源社区', link: '/2023旧版内容/2.高效学习/2.3.3优秀的开源社区' },
            { text: '补充：为什么不要用百度', link: '/2023旧版内容/2.高效学习/补充：为什么不要用百度' },
          ]
        },
        { text: '2.4优雅的记笔记', link: '/2023旧版内容/2.高效学习/2.4优雅的记笔记' },
        { text: '2.5以理工科的方式阅读英语', link: '/2023旧版内容/2.高效学习/2.5以理工科的方式阅读英语' },
        { text: '2.6学会使用AI辅助学习', link: '/2023旧版内容/2.高效学习/2.6学会使用AI辅助学习' },
      ]
    },
  ]
}

export function chapter3_old() {
  return [
    { text: '返回上一层', link: '/2023旧版内容/旧版内容索引' },
    {
      text: '3.编程思维体系构建',
      collapsed: false,
      items: [
        { text: '3.编程思维体系构建', link: '/2023旧版内容/3.编程思维体系构建/3.编程思维体系构建' },
        { text: '3.0 编程入门之道', link: '/2023旧版内容/3.编程思维体系构建/3.0 编程入门之道' },
        { text: '3.1该使用哪个编辑器？？？', link: '/2023旧版内容/3.编程思维体系构建/3.1该使用哪个编辑器？？？' },
        {
          text: '3.2算法杂谈',
          collapsed: true,
          items: [
            { text: '3.2算法杂谈', link: '/2023旧版内容/3.编程思维体系构建/3.2算法杂谈' },
            { text: '3.2.1手把手教你学算法——如何使用OJ（Online Judge）', link: '/2023旧版内容/3.编程思维体系构建/3.2.1手把手教你学算法——如何使用OJ（Online Judge）' },
            { text: '3.2.2ACM 竞赛从入门到入坟', link: '/2023旧版内容/3.编程思维体系构建/3.2.2ACM 竞赛从入门到入坟' },
          ]
        },
        { text: '3.3如何选择编程语言', link: '/2023旧版内容/3.编程思维体系构建/3.3如何选择编程语言' },
        {
          text: '3.4C语言',
          collapsed: true,
          items: [
            { text: '3.4C语言', link: '/2023旧版内容/3.编程思维体系构建/3.4C语言' },
            { text: '3.4.1FAQ：常见问题', link: '/2023旧版内容/3.编程思维体系构建/3.4.1FAQ：常见问题' },
            { text: '3.4.2用什么写 C 语言', link: '/2023旧版内容/3.编程思维体系构建/3.4.2用什么写 C 语言' },
            { text: '3.4.3解决编程问题的普适性过程', link: '/2023旧版内容/3.编程思维体系构建/3.4.3解决编程问题的普适性过程' },
            { text: '3.4.4C语言前置概念学习', link: '/2023旧版内容/3.编程思维体系构建/3.4.4C语言前置概念学习' },
            {
              text: '3.4.5阶段一：编程属性',
              collapsed: true,
              items: [
                { text: '3.4.5阶段一：编程属性', link: '/2023旧版内容/3.编程思维体系构建/3.4.5阶段一：编程属性' },
                { text: '3.4.5.1C语言自测标准——链表', link: '/2023旧版内容/3.编程思维体系构建/3.4.5.1C语言自测标准——链表' },
              ]
            },
            {
              text: '3.4.6阶段二：文字冒险（cool）',
              collapsed: true,
              items: [
                { text: '3.4.6阶段二：文字冒险（cool）', link: '/2023旧版内容/3.编程思维体系构建/3.4.6阶段二：文字冒险（cool）' },
                { text: '3.4.6.1.开始冒险', link: '/2023旧版内容/3.编程思维体系构建/3.4.6.1.开始冒险' },
                { text: '3.4.6.2.探索未知', link: '/2023旧版内容/3.编程思维体系构建/3.4.6.2.探索未知' },
                { text: '3.4.6.3.指明地点', link: '/2023旧版内容/3.编程思维体系构建/3.4.6.3.指明地点' },
                { text: '3.4.6.4.创建对象', link: '/2023旧版内容/3.编程思维体系构建/3.4.6.4.创建对象' },
                { text: '3.4.6.5.捡起物品', link: '/2023旧版内容/3.编程思维体系构建/3.4.6.5.捡起物品' },
                { text: '3.4.6.6.绘制地图', link: '/2023旧版内容/3.编程思维体系构建/3.4.6.6.绘制地图' },
                { text: '3.4.6.7.增大距离', link: '/2023旧版内容/3.编程思维体系构建/3.4.6.7.增大距离' },
                { text: '3.4.6.8.移动方向', link: '/2023旧版内容/3.编程思维体系构建/3.4.6.8.移动方向' },
                { text: '3.4.6.9.练习：生成代码', link: '/2023旧版内容/3.编程思维体系构建/3.4.6.9.练习：生成代码' },
                { text: '3.4.6.10.增添属性', link: '/2023旧版内容/3.编程思维体系构建/3.4.6.10.增添属性' },
                { text: '3.4.6.11.设置条件', link: '/2023旧版内容/3.编程思维体系构建/3.4.6.11.设置条件' },
                { text: '3.4.6.12.开启关闭', link: '/2023旧版内容/3.编程思维体系构建/3.4.6.12.开启关闭' },
                { text: '3.4.6.13.编写解析器', link: '/2023旧版内容/3.编程思维体系构建/3.4.6.13.编写解析器' },
                { text: '3.4.6.14.丰富命令', link: '/2023旧版内容/3.编程思维体系构建/3.4.6.14.丰富命令' },
                { text: '3.4.6.15.赋予明暗', link: '/2023旧版内容/3.编程思维体系构建/3.4.6.15.赋予明暗' },
                { text: '3.4.6.16.结语：你终将自由', link: '/2023旧版内容/3.编程思维体系构建/3.4.6.16.结语：你终将自由' },
              ]
            },
            {
              text: '3.4.7C基础知识杂谈',
              collapsed: true,
              items: [
                { text: '3.4.7C基础知识杂谈', link: '/2023旧版内容/3.编程思维体系构建/3.4.7C基础知识杂谈' },
                { text: '3.4.7.1GDB初探索（编程可阅览）', link: '/2023旧版内容/3.编程思维体系构建/3.4.7.1GDB初探索（编程可阅览）' },
                { text: '3.4.7.1.1调试理论', link: '/2023旧版内容/3.编程思维体系构建/3.4.7.1.1调试理论' },
                { text: '3.4.7.2C的历史问题：undefined behavior', link: '/2023旧版内容/3.编程思维体系构建/3.4.7.2C的历史问题：undefined behavior' },
                { text: '3.4.7.3C编译器干了什么', link: '/2023旧版内容/3.编程思维体系构建/3.4.7.3C编译器干了什么' },
                { text: '3.4.7.4Inline Assembly与链接加载', link: '/2023旧版内容/3.编程思维体系构建/3.4.7.4Inline Assembly与链接加载' },
              ]
            },
          ]
        },
        { text: '3.5git与github', link: '/2023旧版内容/3.编程思维体系构建/3.5git与github' },
        {
          text: '3.6Python（灵巧的胶水）',
          collapsed: true,
          items: [
            { text: '3.6Python（灵巧的胶水）', link: '/2023旧版内容/3.编程思维体系构建/3.6Python（灵巧的胶水）' },
            { text: '3.6.1从CS61A看编程语言学习', link: '/2023旧版内容/3.编程思维体系构建/3.6.1从CS61A看编程语言学习' },
            { text: '3.6.2环境配置', link: '/2023旧版内容/3.编程思维体系构建/3.6.2环境配置' },
            { text: '3.6.3安装python', link: '/2023旧版内容/3.编程思维体系构建/3.6.3安装python' },
            {
              text: '3.6.4Python for fun',
              collapsed: true,
              items: [
                { text: '3.6.4Python for fun', link: '/2023旧版内容/3.编程思维体系构建/3.6.4Python for fun' },
                { text: '3.6.4.0阶段零：Python解释器', link: '/2023旧版内容/3.编程思维体系构建/3.6.4.0阶段零：Python解释器' },
                { text: '3.6.4.1阶段一：熟悉语句', link: '/2023旧版内容/3.编程思维体系构建/3.6.4.1阶段一：熟悉语句' },
                { text: '3.6.4.2阶段二：递归操作', link: '/2023旧版内容/3.编程思维体系构建/3.6.4.2阶段二：递归操作' },
                { text: '3.6.4.3阶段三：数据抽象', link: '/2023旧版内容/3.编程思维体系构建/3.6.4.3阶段三：数据抽象' },
                { text: '3.6.4.4阶段四：高阶函数', link: '/2023旧版内容/3.编程思维体系构建/3.6.4.4阶段四：高阶函数' },
                { text: '3.6.4.5阶段五：迭代生成', link: '/2023旧版内容/3.编程思维体系构建/3.6.4.5阶段五：迭代生成' },
                { text: '3.6.4.6结语', link: '/2023旧版内容/3.编程思维体系构建/3.6.4.6结语' },
              ]
            },
          ]
        },
        { text: '3.X 聊聊设计模式和程序设计', link: '/2023旧版内容/3.编程思维体系构建/3.X 聊聊设计模式和程序设计' },
        {
          text: '3.Y 附加模块：Linux',
          collapsed: true,
          items: [
            { text: '3.Y 附加模块：Linux', link: '/2023旧版内容/3.编程思维体系构建/3.Y 附加模块：Linux' },
            { text: '3.Y.1Linux概念普及', link: '/2023旧版内容/3.编程思维体系构建/3.Y.1Linux概念普及' },
            { text: '3.Y.2双系统安装和发行版推荐', link: '/2023旧版内容/3.编程思维体系构建/3.Y.2双系统安装和发行版推荐' },
            { text: '3.Y.3VMware的安装与安装Ubuntu22.04系统', link: '/2023旧版内容/3.编程思维体系构建/3.Y.3VMware的安装与安装Ubuntu22.04系统' },
            { text: '3.Y.4WSL的安装', link: '/2023旧版内容/3.编程思维体系构建/3.Y.4WSL的安装' },
            { text: '3.Y.5Linux初探索', link: '/2023旧版内容/3.编程思维体系构建/3.Y.5Linux初探索' },
            { text: '3.Y.6Vim初探索', link: '/2023旧版内容/3.编程思维体系构建/3.Y.6Vim初探索' },
            { text: '3.Y.7linux小任务', link: '/2023旧版内容/3.编程思维体系构建/3.Y.7linux小任务' },
          ]
        }
      ]
    },

  ]
}

export function chapter4_old() {
  return [
    { text: '返回上一层', link: '/2023旧版内容/旧版内容索引' },
    {
      text: '4.人工智能',
      collapsed: false,
      items: [
        { text: '4.人工智能', link: '/2023旧版内容/4.人工智能/4.人工智能' },
        { text: '4.1前言', link: '/2023旧版内容/4.人工智能/4.1前言' },
        { text: '4.2机器学习（AI）快速入门（quick start）', link: '/2023旧版内容/4.人工智能/4.2机器学习（AI）快速入门（quick start）' },
        {
          text: '4.3人工智能导论及机器学习入门',
          collapsed: true,
          items: [
            { text: '4.3人工智能导论及机器学习入门', link: '/2023旧版内容/4.人工智能/4.3人工智能导论及机器学习入门' },
            {
              text: '4.3.1搜索',
              collapsed: true,
              items: [
                { text: '4.3.1搜索', link: '/2023旧版内容/4.人工智能/4.3.1搜索' },
                { text: '4.3.1.1程序示例——maze迷宫解搜索', link: '/2023旧版内容/4.人工智能/4.3.1.1程序示例——maze迷宫解搜索' },
                { text: '4.3.1.2项目：Tic-Tac-Toe井字棋', link: '/2023旧版内容/4.人工智能/4.3.1.2项目：Tic-Tac-Toe井字棋' },
              ]
            },
            {
              text: '4.3.2知识推理',
              collapsed: true,
              items: [
                { text: '4.3.2知识推理', link: '/2023旧版内容/4.人工智能/4.3.2知识推理' },
                { text: '4.3.2.1程序示例——命题逻辑与模型检测', link: '/2023旧版内容/4.人工智能/4.3.2.1程序示例——命题逻辑与模型检测' },
                { text: '4.3.2.2项目：扫雷，骑士与流氓问题', link: '/2023旧版内容/4.人工智能/4.3.2.2项目：扫雷，骑士与流氓问题' },
              ]
            },
            {
              text: '4.3.3不确定性问题',
              collapsed: true,
              items: [
                { text: '4.3.3不确定性问题', link: '/2023旧版内容/4.人工智能/4.3.3不确定性问题' },
                { text: '4.3.3.1程序示例', link: '/2023旧版内容/4.人工智能/4.3.3.1程序示例' },
                { text: '4.3.3.2项目：遗传', link: '/2023旧版内容/4.人工智能/4.3.3.2项目：遗传' },
              ]
            },
            {
              text: '4.3.4最优化',
              collapsed: true,
              items: [
                { text: '4.3.4最优化', link: '/2023旧版内容/4.人工智能/4.3.4最优化' },
                { text: '4.3.4.1程序示例', link: '/2023旧版内容/4.人工智能/4.3.4.1程序示例' },
                { text: '4.3.4.2项目：填词游戏', link: '/2023旧版内容/4.人工智能/4.3.4.2项目：填词游戏' },
              ]
            },
          ]
        },
        { text: '4.4FAQ：常见问题', link: '/2023旧版内容/4.人工智能/4.4FAQ：常见问题' },
        { text: '4.5图网络略述（intro&GCN）', link: '/2023旧版内容/4.人工智能/4.5图网络略述（intro&GCN）' },
        { text: '4.6数据分析', link: '/2023旧版内容/4.人工智能/4.6数据分析' },
        { text: '4.7如何做研究', link: '/2023旧版内容/4.人工智能/4.7如何做研究' },
        { text: '4.8科研论文写作', link: '/2023旧版内容/4.人工智能/4.8科研论文写作' },
        { text: '4.9从 AI 到 智能系统 —— 从 LLMs 到 Agents', link: '/2023旧版内容/4.人工智能/4.9从 AI 到 智能系统 —— 从 LLMs 到 Agents' },
        { text: '4.10LLM Agent之结构化输出', link: '/2023旧版内容/4.人工智能/4.10LLMAgent之结构化输出' },
        { text: '4.11本章节内容的局限性', link: '/2023旧版内容/4.人工智能/4.11本章节内容的局限性' },

      ]
    },
  ]
}

export function chapter5_old() {
  return [
    { text: '返回上一层', link: '/2023旧版内容/旧版内容索引' },
    {
      text: '5.富有生命的嵌入式',
      collapsed: false,
      items: [
        { text: '5.富有生命的嵌入式', link: '/2023旧版内容/5.富有生命的嵌入式/5.富有生命的嵌入式' },
        { text: '5.1嵌入式是什么？可以吃吗？', link: '/2023旧版内容/5.富有生命的嵌入式/5.1嵌入式是什么？可以吃吗？' },
        { text: '5.2New meaning of C', link: '/2023旧版内容/5.富有生命的嵌入式/5.2New meaning of C' },
        { text: '5.3还玩裸机？上操作系统！', link: '/2023旧版内容/5.富有生命的嵌入式/5.3还玩裸机？上操作系统！' },
      ]
    },
  ]
}

export function chapter6_old() {
  return [
    { text: '返回上一层', link: '/2023旧版内容/旧版内容索引' },
    {
      text: '6.计算机安全',
      collapsed: false,
      items: [
        { text: '6.计算机安全', link: '/2023旧版内容/6.计算机安全/6.计算机安全' },
        {
          text: '6.1Web安全',
          collapsed: true,
          items: [
            { text: '6.1Web安全', link: '/2023旧版内容/6.计算机安全/6.1Web安全' },
            { text: '6.1.1SQL 注入', link: '/2023旧版内容/6.计算机安全/6.1.1SQL 注入' },
          ]
        },
        {
          text: '6.2二进制安全',
          collapsed: true,
          items: [
            { text: '6.2二进制安全', link: '/2023旧版内容/6.计算机安全/6.2二进制安全' },
            { text: '6.2.1基础工具的使用', link: '/2023旧版内容/6.计算机安全/6.2.1基础工具的使用' },
            { text: '6.2.2软件破解、软件加固', link: '/2023旧版内容/6.计算机安全/6.2.2软件破解、软件加固' },
            { text: '6.2.3漏洞挖掘、漏洞利用', link: '/2023旧版内容/6.计算机安全/6.2.3漏洞挖掘、漏洞利用' },
          ]
        },
        { text: '6.3密码学', link: '/2023旧版内容/6.计算机安全/6.3密码学' },
        { text: '6.4安全杂项', link: '/2023旧版内容/6.计算机安全/6.4安全杂项' },
        { text: '6.5学习资料推荐', link: '/2023旧版内容/6.计算机安全/6.5学习资料推荐' },
      ]
    },
  ]
}

export function chapter7_old() {
  return [
    { text: '返回上一层', link: '/2023旧版内容/旧版内容索引' },
    {
      text: '7.网络应用开发',
      collapsed: false,
      items: [
        { text: '7.网络应用开发入门', link: '/2023旧版内容/7.网络应用开发/7.网络应用开发入门' },
        { text: '7.1WEB开发入门', link: '/2023旧版内容/7.网络应用开发/7.1WEB开发入门' },
        {
          text: '7.2前端部分',
          collapsed: true,
          items: [
            { text: '7.2.1基础(三件套)', link: '/2023旧版内容/7.网络应用开发/7.2.1基础(三件套)' },
            { text: '7.2.2进阶(小项目)', link: '/2023旧版内容/7.网络应用开发/7.2.2进阶(小项目)' },
            { text: '7.2.3附录1：前端介绍（详细版）', link: '/2023旧版内容/7.网络应用开发/7.2.3附录1：前端介绍（详细版）' },
            { text: '7.2.4附录2：大前端开发', link: '/2023旧版内容/7.网络应用开发/7.2.4附录2：大前端开发' },
            { text: '7.2.5附录3：跨端开发', link: '/2023旧版内容/7.网络应用开发/7.2.5附录3：跨端开发' },
          ]
        },
        {
          text: '7.3后端部分',
          collapsed: true,
          items: [
            { text: '7.3后端部分', link: '/2023旧版内容/7.网络应用开发/7.3后端部分' },
            { text: '7.3.1基础部分', link: '/2023旧版内容/7.网络应用开发/7.3.1基础部分' },
            { text: '7.3.2进阶部分', link: '/2023旧版内容/7.网络应用开发/7.3.2进阶部分' },
          ]
        },
      ]
    },
  ]
}

export function chapter8_old() {
  return [
    { text: '返回上一层', link: '/2023旧版内容/旧版内容索引' },
    {
      text: '8.基础学科',
      collapsed: false,
      items: [
        { text: '8.基础学科', link: '/2023旧版内容/8.基础学科/8.基础学科' },
        { text: '8.1经济学科普Part1', link: '/2023旧版内容/8.基础学科/8.1经济学科普Part1' },
      ]
    }
  ]
}

export function chapter9_old() {
  return [
    { text: '返回上一层', link: '/2023旧版内容/旧版内容索引' },
    {
      text: '9.计算机网络',
      collapsed: false,
      items: [
        { text: '9 计算机网络', link: '/2023旧版内容/9.计算机网络/9.计算机网络' },
        { text: '9.1 计网速通', link: '/2023旧版内容/9.计算机网络/9.1计网速通' },
        { text: '9.2.1 物理层(待完成)' },
        { text: '9.2.2 链路层(待完成)' },
        {
          text: '9.2.3 网络层',
          collapsed: true,
          items: [
            { text: '9.2.3 网络层', link: '/2023旧版内容/9.计算机网络/9.2.3网络层' },
            { text: '9.2.3.1 IP 协议', link: '/2023旧版内容/9.计算机网络/9.2.3.1IP协议' },
            { text: '9.2.3.2 子网与无类域间路由', link: '/2023旧版内容/9.计算机网络/9.2.3.2子网与无类域间路由' }
          ]
        },
      ]
    }
  ]
}

// Function to extract numeric prefix as an array of numbers
function getNumericPrefix(fileName: string): number[] {
  const match = fileName.match(/^(\d+(\.\d+)?(?:\.\d+)*)/);
  if (match) {
    return match[0].split('.').map(Number); // Convert to array of numbers
  }
  return [];
}

// Function to compare two numeric prefixes
interface NumericPrefix {
  prefix: number[];
}

function compareNumericPrefixes(a: string, b: string): number {
  const prefixA: NumericPrefix = { prefix: getNumericPrefix(a) };
  const prefixB: NumericPrefix = { prefix: getNumericPrefix(b) };

  for (let i = 0; i < Math.max(prefixA.prefix.length, prefixB.prefix.length); i++) {
    const numA: number = prefixA.prefix[i] || 0;
    const numB: number = prefixB.prefix[i] || 0;
    if (numA !== numB) {
      return numA - numB;
    }
  }
  return 0;
}

/**
 * Generate sidebar structure for a directory.
 *
 * @param dir - Directory path to read.
 * @param excludeDir - Array of directory names to exclude.
 * @param maxDepth - Maximum depth of recursion.
 * @param currentDepth - Current depth in recursion.
 * @returns Array of sidebar items.
 */

export function generateSidebarBasic(
  dir: string,
  excludeDir: string[] = [],
  maxDepth: number,
  currentDepth: number = 0
): SidebarItem[] {
  if (currentDepth >= maxDepth) {
    console.warn("The file depth is beyond the maximum depth that your sidebar can show!");
  }

  const files = fs.readdirSync(dir);
  const sortedFiles = files.sort(compareNumericPrefixes);

  const sidebar: (SidebarItem | null)[] = sortedFiles.map((file) => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      if (excludeDir.includes(file)) return null; // Skip excluded directories
      return {
        text: file,
        collapsed: true,
        items: generateSidebarBasic(fullPath, excludeDir, maxDepth, currentDepth + 1),
      };
    } else if (file.endsWith('.md')) {
      return {
        text: file.replace('.md', ''),
        link: `/${fullPath.replace('.md', '')}`,
      };
    }
    return null;
  });

  return sidebar.filter(Boolean) as SidebarItem[];
}

/**
 * Generates a sidebar configuration for VitePress.
 *
 * @param {string} dir - The directory to generate the sidebar from.
 * @param {Object} [options] - Optional parameters.
 * @param {string[]} [options.excludeDir=['static']] - Directories to exclude from the sidebar.
 * @param {string} [options.previousLevel='/'] - Link to the previous level.
 * @param {string} [options.previousLevelDescription='返回上一层'] - Description for the previous level link.
 * @param {string} [options.topLevelName] - Name for the top level of the sidebar.
 * @param {number} [options.maxDepth=5] - Maximum depth of directories to include.
 * @returns {Object[]} Sidebar configuration array.
 */
interface SidebarOptions {
  excludeDir?: string[];
  previousLevel?: string;
  previousLevelDescription?: string;
  topLevelName?: string;
  maxDepth?: number;
}

interface SidebarItem {
  text: string;
  link?: string;
  collapsed?: boolean;
  items?: SidebarItem[];
}

export function generateSidebar(
  dir: string,
  {
    excludeDir = ['static'],
    previousLevel = '/',
    previousLevelDescription = '返回上一层',
    topLevelName = '',
    maxDepth = 5,
  }: SidebarOptions = {}
): SidebarItem[] {
  const sidebar: SidebarItem[] = [
    {
      text: previousLevelDescription,
      link: previousLevel,
    },
    {
      text: topLevelName ?? dir,
      collapsed: false,
      items: generateSidebarBasic(dir, excludeDir, maxDepth),
    },
  ];
  return sidebar;
}

