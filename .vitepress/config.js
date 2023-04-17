import { defineConfig } from 'vitepress'

import mathjax3 from 'markdown-it-mathjax3';

const customElements = [
  'mjx-container',
  'mjx-assistive-mml',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "HDU-CS-WIKI",
  description: "HDU计算机科学讲义",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
    ],

    sidebar: [
      {
        text: '简介',
        collapsed: true,
        items: [
          { text: '简介', link: '/简介' },
        ]
      },
      {
        text: '1.杭电生存指南（最重要模块）',
        collapsed: true,
        items: [
          { text: '1.1人文社科的重要性（韩健夫老师寄语）', link: '/1.杭电生存指南/1.1人文社科的重要性（韩健夫老师寄语）' },
          { text: '1.2竞赛指北', link: '/1.杭电生存指南/1.2竞赛指北' },
          { text: '1.3导师选择', link: '/1.杭电生存指南/1.3导师选择' },
          { text: '1.4小心项目陷阱', link: '/1.杭电生存指南/1.4小心项目陷阱' },
          { text: '1.5小组作业避雷指南', link: '/1.杭电生存指南/1.5小组作业避雷指南' },
          { text: '1.6正确解读GPA', link: '/1.杭电生存指南/1.6正确解读GPA' },
          { text: '1.7杭电出国自救指南', link: '/1.杭电生存指南/1.7杭电出国自救指南' },
          { text: '1.8转专业二三事', link: '/1.杭电生存指南/1.8转专业二三事' },
          { text: '1.9问题专题：好想进入实验室', link: '/1.杭电生存指南/1.9问题专题：好想进入实验室' },
          { text: '1.10如何读论文', link: '/1.杭电生存指南/1.10如何读论文' },
        ]
      },
      {
        text: '2.高效学习',
        collapsed: true,
        items: [
          { text: '2.高效学习', link: '/2.高效学习/2.高效学习' },
          {
            text: '2.1高效的前提：摆脱高中思维',
            collapsed: true,
            items: [
              { text: '2.1高效的前提：摆脱高中思维', link: '/2.高效学习/2.1高效的前提：摆脱高中思维' },
              { text: '2.1.1悲壮的学习方式', link: '/2.高效学习/2.1.1悲壮的学习方式' },
              { text: '2.1.2浮躁的心理状态', link: '/2.高效学习/2.1.2浮躁的心理状态' },
              { text: '2.1.3错误的提问姿态', link: '/2.高效学习/2.1.3错误的提问姿态' },
              { text: '2.1.4书籍的盲目崇拜', link: '/2.高效学习/2.1.4书籍的盲目崇拜' },
              { text: '2.1.5错误的学习配比', link: '/2.高效学习/2.1.5错误的学习配比' },
            ]
          },
          { text: '2.2优雅的使用工具', link: '/2.高效学习/2.2优雅的使用工具' },
          {
            text: '2.3高效的信息检索',
            collapsed: true,
            items: [
              { text: '2.3高效的信息检索', link: '/2.高效学习/2.3高效的信息检索' },
              { text: '2.3.1阅读文档（B百度爬）', link: '/2.高效学习/2.3.1阅读文档（B百度爬）' },
              { text: '2.3.2检索论文核心内容', link: '/2.高效学习/2.3.2检索论文核心内容' },
              { text: '2.3.3优秀的开源社区', link: '/2.高效学习/2.3.3优秀的开源社区' },
              { text: '补充：为什么不要用百度', link: '/2.高效学习/补充：为什么不要用百度' },
            ]
          },
          { text: '2.4提问的艺术', link: '/2.高效学习/2.4提问的艺术' },
          { text: '2.5优雅的记笔记', link: '/2.高效学习/2.5优雅的记笔记' },
          { text: '2.6以理工科的方式阅读英语', link: '/2.高效学习/2.6以理工科的方式阅读英语' },
        ]
      },
      {
        text: '3.编程思维体系构建',
        collapsed: true,
        items: [
          { text: '3.编程思维体系构建', link: '/3.编程思维体系构建/3.编程思维体系构建' },
          { text: '3.0 编程入门之道', link: '/3.编程思维体系构建/3.0 编程入门之道' },
          { text: '3.1该使用哪个编辑器？？？', link: '/3.编程思维体系构建/3.1该使用哪个编辑器？？？' },
          {
            text: '3.2算法杂谈',
            collapsed: true,
            items: [
              { text: '3.2算法杂谈', link: '/3.编程思维体系构建/3.2算法杂谈' },
              { text: '3.2.1为什么要选择ACM——谈谈我与ACM', link: '/3.编程思维体系构建/3.2.1为什么要选择ACM——谈谈我与ACM' },
              { text: '3.2.2手把手教你学算法——如何使用OJ（Online Judge）', link: '/3.编程思维体系构建/3.2.2手把手教你学算法——如何使用OJ（Online Judge）' },
            ]
          },
          { text: '3.3如何选择编程语言', link: '/3.编程思维体系构建/3.3如何选择编程语言' },
          {
            text: '3.4C语言',
            collapsed: true,
            items: [
              { text: '3.4C语言', link: '/3.编程思维体系构建/3.4C语言' },
              { text: '3.4.1FAQ：常见问题', link: '/3.编程思维体系构建/3.4.1FAQ：常见问题' },
              { text: '3.4.2用什么写 C 语言', link: '/3.编程思维体系构建/3.4.2用什么写 C 语言' },
              { text: '3.4.3解决编程问题的普适性过程', link: '/3.编程思维体系构建/3.4.3解决编程问题的普适性过程' },
              { text: '3.4.4C语言前置概念学习', link: '/3.编程思维体系构建/3.4.4C语言前置概念学习' },
              {
                text: '3.4.5阶段一：编程属性',
                collapsed: true,
                items: [
                  { text: '3.4.5阶段一：编程属性', link: '/3.编程思维体系构建/3.4.5阶段一：编程属性' },
                  { text: '3.4.5.1C语言自测标准——链表', link: '/3.编程思维体系构建/3.4.5.1C语言自测标准——链表' },
                ]
              },
              {
                text: '3.4.6阶段二：文字冒险（cool）',
                collapsed: true,
                items: [
                  { text: '3.4.6阶段二：文字冒险（cool）', link: '/3.编程思维体系构建/3.4.6阶段二：文字冒险（cool）' },
                  { text: '3.4.6.1.开始冒险', link: '/3.编程思维体系构建/3.4.6.1.开始冒险' },
                  { text: '3.4.6.2.探索未知', link: '/3.编程思维体系构建/3.4.6.2.探索未知' },
                  { text: '3.4.6.3.指明地点', link: '/3.编程思维体系构建/3.4.6.3.指明地点' },
                  { text: '3.4.6.4.创建对象', link: '/3.编程思维体系构建/3.4.6.4.创建对象' },
                  { text: '3.4.6.5.捡起物品', link: '/3.编程思维体系构建/3.4.6.5.捡起物品' },
                  { text: '3.4.6.6.绘制地图', link: '/3.编程思维体系构建/3.4.6.6.绘制地图' },
                  { text: '3.4.6.7.增大距离', link: '/3.编程思维体系构建/3.4.6.7.增大距离' },
                  { text: '3.4.6.8.移动方向', link: '/3.编程思维体系构建/3.4.6.8.移动方向' },
                  { text: '3.4.6.9.练习：生成代码', link: '/3.编程思维体系构建/3.4.6.9.练习：生成代码' },
                  { text: '3.4.6.10.增添属性', link: '/3.编程思维体系构建/3.4.6.10.增添属性' },
                  { text: '3.4.6.11.设置条件', link: '/3.编程思维体系构建/3.4.6.11.设置条件' },
                  { text: '3.4.6.12.开启关闭', link: '/3.编程思维体系构建/3.4.6.12.开启关闭' },
                  { text: '3.4.6.13.编写解析器', link: '/3.编程思维体系构建/3.4.6.13.编写解析器' },
                  { text: '3.4.6.14.丰富命令', link: '/3.编程思维体系构建/3.4.6.14.丰富命令' },
                  { text: '3.4.6.15.赋予明暗', link: '/3.编程思维体系构建/3.4.6.15.赋予明暗' },
                  { text: '3.4.6.16.结语：你终将自由', link: '/3.编程思维体系构建/3.4.6.16.结语：你终将自由' },
                ]
              },
              {
                text: '3.4.7C基础知识杂谈',
                collapsed: true,
                items: [
                  { text: '3.4.7C基础知识杂谈', link: '/3.编程思维体系构建/3.4.7C基础知识杂谈' },
                  { text: '3.4.7.1GDB初探索（编程可阅览）', link: '/3.编程思维体系构建/3.4.7.1GDB初探索（编程可阅览）' },
                  { text: '3.4.7.1.1调试理论', link: '/3.编程思维体系构建/3.4.7.1.1调试理论' },
                  { text: '3.4.7.2C的历史问题：undefined behavior', link: '/3.编程思维体系构建/3.4.7.2C的历史问题：undefined behavior' },
                  { text: '3.4.7.3C编译器干了什么', link: '/3.编程思维体系构建/3.4.7.3C编译器干了什么' },
                  { text: '3.4.7.4Inline Assembly与链接加载', link: '/3.编程思维体系构建/3.4.7.4Inline Assembly与链接加载' },
                ]
              },
            ]
          },
          { text: '3.5git与github', link: '/3.编程思维体系构建/3.5git与github' },
          {
            text: '3.6Python（灵巧的胶水）',
            collapsed: true,
            items: [
              { text: '3.6Python（灵巧的胶水）', link: '/3.编程思维体系构建/3.6Python（灵巧的胶水）' },
              { text: '3.6.1从CS61A看编程语言学习', link: '/3.编程思维体系构建/3.6.1从CS61A看编程语言学习' },
              { text: '3.6.2环境配置', link: '/3.编程思维体系构建/3.6.2环境配置' },
              { text: '3.6.3安装python', link: '/3.编程思维体系构建/3.6.3安装python' },
              {
                text: '3.6.4Python for fun',
                collapsed: true,
                items: [
                  { text: '3.6.4Python for fun', link: '/3.编程思维体系构建/3.6.4Python for fun' },
                  { text: '3.6.4.0阶段零：Python解释器', link: '/3.编程思维体系构建/3.6.4.0阶段零：Python解释器' },
                  { text: '3.6.4.1阶段一：熟悉语句', link: '/3.编程思维体系构建/3.6.4.1阶段一：熟悉语句' },
                  { text: '3.6.4.2阶段二：递归操作', link: '/3.编程思维体系构建/3.6.4.2阶段二：递归操作' },
                  { text: '3.6.4.3阶段三：数据抽象', link: '/3.编程思维体系构建/3.6.4.3阶段三：数据抽象' },
                  { text: '3.6.4.4阶段四：高阶函数', link: '/3.编程思维体系构建/3.6.4.4阶段四：高阶函数' },
                  { text: '3.6.4.5阶段五：迭代生成', link: '/3.编程思维体系构建/3.6.4.5阶段五：迭代生成' },
                  { text: '3.6.4.6结语', link: '/3.编程思维体系构建/3.6.4.6结语' },
                ]
              },
              {
                text: '3.6.5关于CS61A',
                collapsed: true,
                items: [
                  { text: '3.6.5关于CS61A', link: '/3.编程思维体系构建/3.6.5关于CS61A' },
                  { text: '3.6.5.1lab00：让我们开始吧', link: '/3.编程思维体系构建/3.6.5.1lab00：让我们开始吧' },
                ]
              },
            ]
          },
          { text: '3.X 聊聊设计模式和程序设计', link: '/3.编程思维体系构建/3.X 聊聊设计模式和程序设计' },
          {
            text: '3.Y 附加模块：Linux',
            collapsed: true,
            items: [
              { text: '3.Y 附加模块：Linux', link: '/3.编程思维体系构建/3.Y 附加模块：Linux' },
              { text: '3.Y.1VMware的安装与安装Ubuntu22.04系统', link: '/3.编程思维体系构建/3.Y.1VMware的安装与安装Ubuntu22.04系统' },
              { text: '3.Y.2WSL的安装', link: '/3.编程思维体系构建/3.Y.2WSL的安装' },
              { text: '3.Y.3Linux初探索', link: '/3.编程思维体系构建/3.Y.3Linux初探索' },
              { text: '3.Y.4Vim初探索', link: '/3.编程思维体系构建/3.Y.4Vim初探索' },
              { text: '3.Y.5linux小任务', link: '/3.编程思维体系构建/3.Y.5linux小任务' },
            ]
          }
        ]
      },
      {
        text: '4.人工智能',
        collapsed: true,
        items: [
          { text: '4.人工智能', link: '/4.人工智能/4.人工智能' },
          { text: '4.1前言', link: '/4.人工智能/4.1前言' },
          { text: '4.2机器学习（AI）快速入门（quick start）', link: '/4.人工智能/4.2机器学习（AI）快速入门（quick start）' },
          {
            text: '4.3人工智能导论及机器学习入门',
            collapsed: true,
            items: [
              { text: '4.3人工智能导论及机器学习入门', link: '/4.人工智能/4.3人工智能导论及机器学习入门' },
              {
                text: '4.3.1搜索',
                collapsed: true,
                items: [
                  { text: '4.3.1搜索', link: '/4.人工智能/4.3.1搜索' },
                  { text: '4.3.1.1程序示例——maze迷宫解搜索', link: '/4.人工智能/4.3.1.1程序示例——maze迷宫解搜索' },
                  { text: '4.3.1.2项目：Tic-Tac-Toe井字棋', link: '/4.人工智能/4.3.1.2项目：Tic-Tac-Toe井字棋' },
                ]
              },
              {
                text: '4.3.2知识推理',
                collapsed: true,
                items: [
                  { text: '4.3.2知识推理', link: '/4.人工智能/4.3.2知识推理' },
                  { text: '4.3.2.1程序示例——命题逻辑与模型检测', link: '/4.人工智能/4.3.2.1程序示例——命题逻辑与模型检测' },
                  { text: '4.3.2.2项目：扫雷，骑士与流氓问题', link: '/4.人工智能/4.3.2.2项目：扫雷，骑士与流氓问题' },
                ]
              },
            ]
          },
          { text: '4.4FAQ：常见问题', link: '/4.人工智能/4.4FAQ：常见问题' },
          {
            text: '4.6深度学习',
            collapsed: true,
            items: [
              { text: '4.6深度学习', link: '/4.人工智能/4.6深度学习' },
              { text: '4.6.1工欲善其事，必先利其器', link: '/4.人工智能/4.6.1工欲善其事，必先利其器' },
              { text: '4.6.2你可能会需要的术语介绍', link: '/4.人工智能/4.6.2你可能会需要的术语介绍' },
              { text: '4.6.3深度学习快速入门', link: '/4.人工智能/4.6.3深度学习快速入门' },
              { text: '4.6.4Pytorch安装', link: '/4.人工智能/4.6.4Pytorch安装' },
              {
                text: '4.6.5计算机视觉（CV）',
                collapsed: true,
                items: [
                  { text: '4.6.5计算机视觉（CV）', link: '/4.人工智能/4.6.5计算机视觉（CV）' },
                  { text: '4.6.5.1CV领域任务(研究目标)', link: '/4.人工智能/4.6.5.1CV领域任务(研究目标)' },
                  {
                    text: '4.6.5.2经典网络',
                    collapsed: true,
                    items: [
                      { text: '4.6.5.2经典网络', link: '/4.人工智能/4.6.5.2经典网络' },
                      { text: '4.6.5.2.1AlexNet', link: '/4.人工智能/4.6.5.2.1AlexNet' },
                      { text: '4.6.5.2.2FCN', link: '/4.人工智能/4.6.5.2.2FCN' },
                      { text: '4.6.5.2.3ResNet', link: '/4.人工智能/4.6.5计算机视觉（CV）' },
                      { text: '4.6.5.2.4UNet', link: '/4.人工智能/4.6.5.2.4UNet' },
                      { text: '4.6.5.2.5GAN', link: '/4.人工智能/4.6.5.2.5GAN' },
                      { text: '4.6.5.2.6思考题参考', link: '/4.人工智能/4.6.5.2.6思考题参考' },
                      { text: '4.6.5.2.7还要学更多？', link: '/4.人工智能/4.6.5.2.7还要学更多？' },
                    ]
                  },
                  {
                    text: '4.6.5.3神经辐射场(NeRF)',
                    collapsed: true,
                    items: [
                      { text: '4.6.5.3神经辐射场(NeRF)', link: '/4.人工智能/4.6.5.3神经辐射场(NeRF)' },
                      { text: '4.6.5.3.1NeRF', link: '/4.人工智能/4.6.5.3.1NeRF' },
                      { text: '4.6.5.3.2NeRF的改进方向', link: '/4.人工智能/4.6.5.3.2NeRF的改进方向' },
                      { text: '4.6.5.3.3自制数据集的工具COLMAP', link: '/4.人工智能/4.6.5.3.3自制数据集的工具COLMAP' },
                    ]
                  },
                  {
                    text: '4.6.5.4数据预处理（torchvision）',
                    collapsed: true,
                    items: [
                      { text: '4.6.5.4数据预处理（torchvision）', link: '/4.人工智能/4.6.5.4数据预处理（torchvision）' },
                      { text: '4.6.5.4.1数据读取', link: '/4.人工智能/4.6.5.4.1数据读取' },
                      { text: '4.6.5.4.2数据增强', link: '/4.人工智能/4.6.5.4.2数据增强' },
                      { text: '4.6.5.4.3其他功能', link: '/4.人工智能/4.6.5.4.3其他功能' },
                    ]
                  },
                ]
              },
              {
                text: '4.6.6自然语言处理（NLP）',
                collapsed: true,
                items: [
                  { text: '4.6.6自然语言处理（NLP）', link: '/4.人工智能/4.6.6自然语言处理（NLP）' },
                  { text: '4.6.6.1NLP领域任务（研究目标）', link: '/4.人工智能/4.6.6.1NLP领域任务（研究目标）' },
                  {
                    text: '4.6.6.2推荐系统',
                    collapsed: true,
                    items: [
                      { text: '4.6.6.2推荐系统', link: '/4.人工智能/4.6.6.2推荐系统' },
                      { text: '4.6.6.2.1推荐系统经典模型综述', link: '/4.人工智能/4.6.6.2.1推荐系统经典模型综述' },
                      {
                        text: '4.6.6.2.2基于数据的角度，看待推荐系统的构造',
                        collapsed: true,
                        items: [
                          { text: '4.6.6.2.2基于数据的角度，看待推荐系统的构造', link: '/4.人工智能/4.6.6.2.2基于数据的角度，看待推荐系统的构造' },
                          { text: '4.6.6.2.2.1《推荐系统实践》读后的一些想法', link: '/4.人工智能/4.6.6.2.2.1《推荐系统实践》读后的一些想法' },
                          { text: '4.6.6.2.2.2推荐系统概念解释 and 一个好的推荐系统', link: '/4.人工智能/4.6.6.2.2.2推荐系统概念解释 and 一个好的推荐系统' },
                          { text: '4.6.6.2.2.3利用上下文信息', link: '/4.人工智能/4.6.6.2.2.3利用上下文信息' },
                        ]
                      },
                      { text: '4.6.6.2.3序列化推荐', link: '/4.人工智能/4.6.6.2.3序列化推荐' },
                    ]
                  },
                  { text: '4.6.6.3知识图谱', link: '/4.人工智能/4.6.6.3知识图谱' }
                ]
              },
              {
                text: '4.6.7Transformer',
                collapsed: true,
                items: [
                  { text: '4.6.7Transformer', link: '/4.人工智能/4.6.7Transformer' },
                  { text: '4.6.7.1VIT', link: '/4.人工智能/4.6.7.1VIT' },
                  { text: '4.6.7.2BERT', link: '/4.人工智能/4.6.7.2BERT' },
                  { text: '4.6.7.3MAE', link: '/4.人工智能/4.6.7.3MAE' },
                ]
              },
              {
                text: '4.6.8对比学习',
                collapsed: true,
                items: [
                  { text: '4.6.8对比学习', link: '/4.人工智能/4.6.8对比学习' },
                  { text: '4.6.8.1前言', link: '/4.人工智能/4.6.8.1前言' },
                  { text: '4.6.8.2Inst Disc', link: '/4.人工智能/4.6.8.2Inst Disc' },
                  { text: '4.6.8.3定义正负样本的方式', link: '/4.人工智能/4.6.8.3定义正负样本的方式' },
                  { text: '4.6.8.4MoCo', link: '/4.人工智能/4.6.8.4MoCo' },
                  { text: '4.6.8.5SimCLR', link: '/4.人工智能/4.6.8.5SimCLR' },
                  { text: '4.6.8.6SwAV', link: '/4.人工智能/4.6.8.6SwAV' },
                  { text: '4.6.8.7BYOL', link: '/4.人工智能/4.6.8.7BYOL' },
                  { text: '4.6.8.8SimSiam', link: '/4.人工智能/4.6.8.8SimSiam' },
                  { text: '4.6.8.9MoCo v3', link: '/4.人工智能/4.6.8.9MoCo v3' },
                  { text: '4.6.8.10总结', link: '/4.人工智能/4.6.8.10总结' },
                ]
              }
            ]
          },
          { text: '4.7数据分析', link: '/4.人工智能/4.7数据分析' },
          { text: '4.8如何做研究', link: '/4.人工智能/4.8如何做研究' },
          { text: '4.9科研论文写作', link: '/4.人工智能/4.9科研论文写作' },
          { text: '4.10相关资料', link: '/4.人工智能/4.10相关资料' },
          { text: '4.11本章节内容的局限性', link: '/4.人工智能/4.11本章节内容的局限性' },
        ]
      },
      {
        text: '6.计算机安全',
        collapsed: true,
        items: [
          { text: '6.计算机安全', link: '/6.计算机安全/6.计算机安全' },
          {
            text: '6.1网络安全',
            collapsed: true,
            items: [
              { text: '6.1网络安全', link: '/6.计算机安全/6.1网络安全' },
              { text: '6.1.1SQL 注入', link: '/6.计算机安全/6.1.1SQL 注入' },
            ]
          },
          {
            text: '6.2二进制安全',
            collapsed: true,
            items: [
              { text: '6.2二进制安全', link: '/6.计算机安全/6.2二进制安全' },
              { text: '6.2.1基础工具的使用', link: '/6.计算机安全/6.2.1基础工具的使用' },
              { text: '6.2.2软件破解、软件加固', link: '/6.计算机安全/6.2.2软件破解、软件加固' },
            ]
          },
          { text: '6.4CTF信息安全竞赛', link: '/6.计算机安全/6.4CTF信息安全竞赛' },
        ]
      },
      {
        text: '7.Web开发入门',
        collapsed: true,
        items: [
          { text: '7.Web开发入门', link: '/7.Web开发入门/7.Web开发入门' },
          {
            text: '7.1前端部分',
            collapsed: true,
            items: [
              { text: '7.1前端部分', link: '/7.Web开发入门/7.1前端部分' },
              { text: '7.1.1基础部分', link: '/7.Web开发入门/7.1.1基础部分' },
              { text: '7.1.2进阶部分', link: '/7.Web开发入门/7.1.2进阶部分' },
              { text: '7.1.3附录1：前端介绍（详细版）', link: '/7.Web开发入门/7.1.3附录1：前端介绍（详细版）' },
              { text: '7.1.4附录2：大前端开发', link: '/7.Web开发入门/7.1.4附录2：大前端开发' },
            ]
          },
          {
            text: '7.2后端部分',
            collapsed: true,
            items: [
              { text: '7.2后端部分', link: '/7.Web开发入门/7.2后端部分' },
              { text: '7.2.1基础部分', link: '/7.Web开发入门/7.2.1基础部分' },
              { text: '7.2.2进阶部分', link: '/7.Web开发入门/7.2.2进阶部分' },
            ]
          }
        ]
      },
      {
        text: '8.外行社科',
        collapsed: true,
        items: [
          { text: '8.外行社科', link: '/8.外行社科/8.外行社科' },
          { text: '8.1经济学科普Part1', link: '/8.外行社科/8.1经济学科普Part1' },
          { text: '8.2陷入虚无主义？进来看看吧', link: '/8.外行社科/8.2陷入虚无主义？进来看看吧' },
        ]
      },
      {
        text: 'Contributors',
        link: '/contributors'
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/camera-2018/hdu-cs-wiki' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Evan You && HDU 计算机科协 && ALL 协作者'
    },
    lastUpdatedText: '上次更改',
    docFooter: {
      prev: '上一小节',
      next: '下一小节'
    },
    search: {
      provider: 'local'
    }
  },
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
})

