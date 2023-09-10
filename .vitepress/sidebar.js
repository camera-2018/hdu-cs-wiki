export function main_sidebar() {
  return [
    {
      text: '简介',
      collapsed: true,
      items: [
        { text: '简介', link: '/简介' },
        { text: '使用指南', link: '/使用指南' },
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
      text: "2.高效学习",
      collapsed: true,
      items: [{ text: "2.高效学习", link: "/2.高效学习/2.高效学习" }]
    },
    {
      text: "3.编程思维体系构建",
      collapsed: true,
      items: [
        { text: "3.编程思维体系构建", link: "/3.编程思维体系构建/3.编程思维体系构建" }
      ]
    },
    {
      text: "4.人工智能",
      collapsed: true,
      items: [{ text: "4.人工智能", link: "/4.人工智能/4.人工智能" }]
    },
    {
      text: "5.富有生命的嵌入式",
      collapsed: true,
      items: [
        { text: "5.富有生命的嵌入式", link: "/5.富有生命的嵌入式/5.富有生命的嵌入式" }
      ]
    },
    {
      text: "6.计算机安全",
      collapsed: true,
      items: [{ text: "6.计算机安全", link: "/6.计算机安全/6.计算机安全" }]
    },
    {
      text: "7.网络应用开发入门",
      collapsed: true,
      items: [
        { text: "7.网络应用开发入门", link: "/7.网络应用开发/7.网络应用开发入门" }
      ]
    },
    {
      text: "8.基础学科",
      collapsed: true,
      items: [{ text: "8.基础学科", link: "/8.基础学科/8.基础学科" }]
    },
    {
      text: "9.计算机网络",
      collapsed: true,
      items: [{ text: "9.计算机网络", link: "/9.计算机网络/9.计算机网络" }]
    },
    {
      text: 'Contributors',
      link: '/contributors'
    },
    {
      text: '贡献指南',
      link: '/CONTRIBUTING'
    },
    {
      text: 'notebook测试',
      link: '/notebook'
    }
  ]
}

export function chapter2() {
  return [
    { text: '返回上一层', link: '/简介' },
    {
      text: '2.高效学习',
      collapsed: false,
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
        { text: '2.4优雅的记笔记', link: '/2.高效学习/2.4优雅的记笔记' },
        { text: '2.5以理工科的方式阅读英语', link: '/2.高效学习/2.5以理工科的方式阅读英语' },
        { text: '2.6学会使用AI辅助学习', link: '/2.高效学习/2.6学会使用AI辅助学习' },
      ]
    },
  ]
}

export function chapter3() {
  return [
    { text: '返回上一层', link: '/简介' },
    {
      text: '3.编程思维体系构建',
      collapsed: false,
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
            { text: '3.2.3ACM 竞赛从入门到入坟', link: '/3.编程思维体系构建/3.2.3ACM 竞赛从入门到入坟' },
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
              text: '3.6.5 CS61A 食用指南',
              collapsed: true,
              items: [
                { text: '3.6.5 CS61A 食用指南', link: '/3.编程思维体系构建/3.6.5CS61A食用指南' },
                { text: '3.6.5.1 CS61A Sec1', link: '/3.编程思维体系构建/3.6.5.1CS61A Sec1' },
              ]
            }
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

  ]
}

export function chapter4() {
  return [
    { text: '返回上一层', link: '/简介' },
    {
      text: '4.人工智能',
      collapsed: false,
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
            {
              text: '4.3.3不确定性问题',
              collapsed: true,
              items: [
                { text: '4.3.3不确定性问题', link: '/4.人工智能/4.3.3不确定性问题' },
                { text: '4.3.3.1程序示例', link: '/4.人工智能/4.3.3.1程序示例' },
                { text: '4.3.3.2项目：遗传', link: '/4.人工智能/4.3.3.2项目：遗传' },
              ]
            },
            {
              text: '4.3.4最优化',
              collapsed: true,
              items: [
                { text: '4.3.4最优化', link: '/4.人工智能/4.3.4最优化' },
                { text: '4.3.4.1程序示例', link: '/4.人工智能/4.3.4.1程序示例' },
                { text: '4.3.4.2项目：填词游戏', link: '/4.人工智能/4.3.4.2项目：填词游戏' },
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
                  text: '4.6.5.2CV中的数据预处理（torchvision）',
                  collapsed: true,
                  items: [
                    { text: '4.6.5.2CV中的数据预处理（torchvision）', link: '/4.人工智能/4.6.5.2CV中的数据预处理（torchvision）' },
                    { text: '4.6.5.2.1数据读取', link: '/4.人工智能/4.6.5.2.1数据读取' },
                    { text: '4.6.5.2.2数据增强', link: '/4.人工智能/4.6.5.2.2数据增强' },
                  ]
                },
                {
                  text: '4.6.5.3CV中的经典网络',
                  collapsed: true,
                  items: [
                    { text: '4.6.5.3CV中的经典网络', link: '/4.人工智能/4.6.5.3CV中的经典网络' },
                    { text: '4.6.5.3.1AlexNet', link: '/4.人工智能/4.6.5.3.1AlexNet' },
                    { text: '4.6.5.3.2FCN', link: '/4.人工智能/4.6.5.3.2FCN' },
                    { text: '4.6.5.3.3ResNet', link: '/4.人工智能/4.6.5.3.3ResNet' },
                    { text: '4.6.5.3.4UNet', link: '/4.人工智能/4.6.5.3.4UNet' },
                    { text: '4.6.5.3.5GAN', link: '/4.人工智能/4.6.5.3.5GAN' },
                    { text: '4.6.5.3.6思考题参考', link: '/4.人工智能/4.6.5.3.6思考题参考' },
                    { text: '4.6.5.3.7还要学更多？', link: '/4.人工智能/4.6.5.3.7还要学更多？' },
                  ]
                },
                {
                  text: '4.6.5.4神经辐射场(NeRF)',
                  collapsed: true,
                  items: [
                    { text: '4.6.5.4神经辐射场(NeRF)', link: '/4.人工智能/4.6.5.4神经辐射场(NeRF)' },
                    { text: '4.6.5.4.1NeRF', link: '/4.人工智能/4.6.5.4.1NeRF' },
                    { text: '4.6.5.4.2NeRF的改进方向', link: '/4.人工智能/4.6.5.4.2NeRF的改进方向' },
                    { text: '4.6.5.4.3自制数据集的工具COLMAP', link: '/4.人工智能/4.6.5.4.3自制数据集的工具COLMAP' },
                  ]
                },
                {
                  text: '4.6.5.5行人重识别(ReID)',
                  collapsed: true,
                  items: [
                    { text: '4.6.5.5行人重识别(ReID)', link: '/4.人工智能/4.6.5.5行人重识别(ReID)' },
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
                        { text: '4.6.6.2.2.3推荐系统实例', link: '/4.人工智能/4.6.6.2.2.3推荐系统实例' },
                        { text: '4.6.6.2.2.4利用用户行为数据', link: '/4.人工智能/4.6.6.2.2.4利用用户行为数据' },
                        { text: '4.6.6.2.2.5推荐系统冷启动', link: '/4.人工智能/4.6.6.2.2.5推荐系统冷启动' },
                        { text: '4.6.6.2.2.6利用标签信息', link: '/4.人工智能/4.6.6.2.2.6利用标签信息' },
                        { text: '4.6.6.2.2.7利用上下文信息', link: '/4.人工智能/4.6.6.2.2.7利用上下文信息' },
                      ]
                    },
                    { text: '4.6.6.2.3序列化推荐', link: '/4.人工智能/4.6.6.2.3序列化推荐' },
                  ]
                },
                { text: '4.6.6.3知识图谱', link: '/4.人工智能/4.6.6.3知识图谱' },
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
            },
            {
              text: '4.6.9深度强化学习',
              collapsed: true,
              items: [
                { text: '4.6.9深度强化学习', link: '/4.人工智能/4.6.9深度强化学习' },
                { text: '4.6.9.1前言', link: '/4.人工智能/4.6.9.1前言' },
                { text: '4.6.9.2基础资料推荐', link: '/4.人工智能/4.6.9.2基础资料推荐' },
                { text: '4.6.9.3基本概念介绍', link: '/4.人工智能/4.6.9.3基本概念介绍' },
              ]
            }
          ]
        },
        { text: '4.7图网络略述（intro&GCN）', link: '/4.人工智能/4.7图网络略述（intro&GCN）' },
        { text: '4.8数据分析', link: '/4.人工智能/4.8数据分析' },
        { text: '4.9如何做研究', link: '/4.人工智能/4.9如何做研究' },
        { text: '4.10科研论文写作', link: '/4.人工智能/4.10科研论文写作' },
        { text: '4.11从 AI 到 智能系统 —— 从 LLMs 到 Agents', link: '/4.人工智能/4.11从 AI 到 智能系统 —— 从 LLMs 到 Agents' },
        { text: '4.12LLM Agent之结构化输出', link: '/4.人工智能/4.12LLMAgent之结构化输出' },
        { text: '4.13本章节内容的局限性', link: '/4.人工智能/4.13本章节内容的局限性' },
        { text: 'SRT社团介绍', link: '/4.人工智能/SRT' },
        {
          text: 'FunRec',
          collapsed: true,
          items: [
            { text: 'FunRec概述', link: '/4.人工智能/FunRec概述' },
            {
              text: '推荐系统概述',
              collapsed: true,
              items: [
                { text: '推荐系统的意义', link: '/4.人工智能/ch01/ch1.1.md' },
                { text: '推荐系统架构', link: '/4.人工智能/ch01/ch1.2.md' },
                { text: '推荐系统技术栈', link: '/4.人工智能/ch01/ch1.3.md' },
              ]
            },
            {
              text: '推荐系统算法基础',
              collapsed: true,
              items: [
                {
                  text: '经典召回模型',
                  collapsed: true,
                  items: [
                    {
                      text: '基于协同过滤的召回', collapsed: true, items: [
                        { text: 'UserCF', link: '/4.人工智能/ch02/ch2.1/ch2.1.1/usercf.md' },
                        { text: 'ItemCF', link: '/4.人工智能/ch02/ch2.1/ch2.1.1/itemcf.md' },
                        { text: 'Swing', link: '/4.人工智能/ch02/ch2.1/ch2.1.1/Swing.md' },
                        { text: '矩阵分解', link: '/4.人工智能/ch02/ch2.1/ch2.1.1/mf.md' },
                      ]
                    },
                    { text: 'FM召回', link: '/4.人工智能/ch02/ch2.1/ch2.1.2/FM.md' },
                    {
                      text: 'item2vec召回系列', collapsed: true, items: [
                        { text: 'word2vec原理', link: '/4.人工智能/ch02/ch2.1/ch2.1.2/word2vec.md' },
                        { text: 'item2vec召回', link: '/4.人工智能/ch02/ch2.1/ch2.1.2/item2vec.md' },
                        { text: 'Airbnb召回', link: '/4.人工智能/ch02/ch2.1/ch2.1.2/Airbnb.md' },
                      ]
                    },
                    { text: 'YoutubeDNN召回', link: '/4.人工智能/ch02/ch2.1/ch2.1.2/YoutubeDNN.md' },
                    {
                      text: '双塔召回', collapsed: true, items: [
                        { text: '经典双塔', link: '/4.人工智能/ch02/ch2.1/ch2.1.2/DSSM.md' },
                        { text: 'Youtube双塔', link: '/4.人工智能/ch02/ch2.1/ch2.1.2/YoutubeTwoTower.md' },
                      ]
                    },
                    {
                      text: '图召回', collapsed: true, items: [
                        { text: 'EGES', link: '/4.人工智能/ch02/ch2.1/ch2.1.3/EGES.md' },
                        { text: 'PinSAGE', link: '/4.人工智能/ch02/ch2.1/ch2.1.3/PinSage.md' },
                      ]
                    },
                    {
                      text: '序列召回', collapsed: true, items: [
                        { text: 'MIND', link: '/4.人工智能/ch02/ch2.1/ch2.1.4/MIND.md' },
                        { text: 'SDM', link: '/4.人工智能/ch02/ch2.1/ch2.1.4/SDM.md' },
                      ]
                    },
                    {
                      text: '树模型召回', collapsed: true, items: [
                        { text: 'TDM', link: '/4.人工智能/ch02/ch2.1/ch2.1.5/TDM.md' },
                      ]
                    }
                  ]
                },
                {
                  text: '经典排序模型',
                  collapsed: true,
                  items: [
                    { text: 'GBDT+LR', link: '/4.人工智能/ch02/ch2.2/ch2.2.1.md' },
                    {
                      text: '特征交叉', collapsed: true, items: [
                        { text: 'FM', link: '/4.人工智能/ch02/ch2.2/ch2.2.2/FM.md' },
                        { text: 'PNN', link: '/4.人工智能/ch02/ch2.2/ch2.2.2/PNN.md' },
                        { text: 'DCN', link: '/4.人工智能/ch02/ch2.2/ch2.2.2/DCN.md' },
                        { text: 'AutoInt', link: '/4.人工智能/ch02/ch2.2/ch2.2.2/AutoInt.md' },
                        { text: 'FiBiNET', link: '/4.人工智能/ch02/ch2.2/ch2.2.2/FiBiNet.md' },
                      ]
                    },
                    {
                      text: 'WideNDeep系列', collapsed: true, items: [
                        { text: 'Wide&Deep', link: '/4.人工智能/ch02/ch2.2/ch2.2.3/WideNDeep.md' },
                        { text: 'NFM', link: '/4.人工智能/ch02/ch2.2/ch2.2.3/NFM.md' },
                        { text: 'AFM', link: '/4.人工智能/ch02/ch2.2/ch2.2.3/AFM.md' },
                        { text: 'DeepFM', link: '/4.人工智能/ch02/ch2.2/ch2.2.3/DeepFM.md' },
                        { text: 'xDeepFM', link: '/4.人工智能/ch02/ch2.2/ch2.2.3/xDeepFM.md' },
                      ]
                    },
                    {
                      text: '序列模型', collapsed: true, items: [
                        { text: 'DIN', link: '/4.人工智能/ch02/ch2.2/ch2.2.4/DIN.md' },
                        { text: 'DIEN', link: '/4.人工智能/ch02/ch2.2/ch2.2.4/DIEN.md' },
                        { text: 'DSIN', link: '/4.人工智能/ch02/ch2.2/ch2.2.4/DSIN.md' },
                      ]
                    },
                    {
                      text: '多任务学习', collapsed: true, items: [
                        { text: '多任务学习概述', link: '/4.人工智能/ch02/ch2.2/ch2.2.5/2.2.5.0.md' },
                        { text: 'ESMM', link: '/4.人工智能/ch02/ch2.2/ch2.2.5/ESMM.md' },
                        { text: 'MMOE', link: '/4.人工智能/ch02/ch2.2/ch2.2.5/MMOE.md' },
                        { text: 'PLE', link: '/4.人工智能/ch02/ch2.2/ch2.2.5/PLE.md' },
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
  ]
}

export function chapter5() {
  return [
    { text: '返回上一层', link: '/简介' },
    {
      text: '5.富有生命的嵌入式',
      collapsed: false,
      items: [
        { text: '5.富有生命的嵌入式', link: '/5.富有生命的嵌入式/5.富有生命的嵌入式' },
        { text: '5.1嵌入式是什么？可以吃吗？', link: '/5.富有生命的嵌入式/5.1嵌入式是什么？可以吃吗？' },
        { text: '5.2New meaning of C', link: '/5.富有生命的嵌入式/5.2New meaning of C' },
        { text: '5.3还玩裸机？上操作系统！', link: '/5.富有生命的嵌入式/5.3还玩裸机？上操作系统！' },
      ]
    },
  ]
}

export function chapter6() {
  return [
    { text: '返回上一层', link: '/简介' },
    {
      text: '6.计算机安全',
      collapsed: false,
      items: [
        { text: '6.计算机安全', link: '/6.计算机安全/6.计算机安全' },
        {
          text: '6.1Web安全',
          collapsed: true,
          items: [
            { text: '6.1Web安全', link: '/6.计算机安全/6.1Web安全' },
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
            { text: '6.2.3漏洞挖掘、漏洞利用', link: '/6.计算机安全/6.2.3漏洞挖掘、漏洞利用' },
          ]
        },
        { text: '6.3密码学', link: '/6.计算机安全/6.3密码学' },
        { text: '6.4安全杂项', link: '/6.计算机安全/6.4安全杂项' },
        { text: '6.5学习资料推荐', link: '/6.计算机安全/6.5学习资料推荐' },
      ]
    },
  ]
}

export function chapter7() {
  return [
    { text: '返回上一层', link: '/简介' },
    {
      text: '7.网络应用开发',
      collapsed: false,
      items: [
        { text: '7.网络应用开发入门', link: '/7.网络应用开发/7.网络应用开发入门' },
        {
          text: '7.1WEB开发入门',
          collapsed: true,
          items: [
            { text: '7.1WEB开发入门', link: '/7.网络应用开发/7.1WEB开发入门' },
            {
              text: '7.1.1前端部分',
              collapsed: true,
              items: [
                { text: '7.1.1前端部分', link: '/7.网络应用开发/7.1.1前端部分' },
                { text: '7.1.1.1基础部分', link: '/7.网络应用开发/7.1.1.1基础部分' },
                { text: '7.1.1.2进阶部分', link: '/7.网络应用开发/7.1.1.2进阶部分' },
                { text: '7.1.1.3附录1：前端介绍（详细版）', link: '/7.网络应用开发/7.1.1.3附录1：前端介绍（详细版）' },
                { text: '7.1.1.4附录2：大前端开发', link: '/7.网络应用开发/7.1.1.4附录2：大前端开发' },
                { text: '7.1.1.5附录3：跨端开发', link: '/7.网络应用开发/7.1.1.5附录3：跨端开发' },
              ]
            },
            {
              text: '7.1.2后端部分',
              collapsed: true,
              items: [
                { text: '7.1.2后端部分', link: '/7.网络应用开发/7.1.2后端部分' },
                { text: '7.1.2.1基础部分', link: '/7.网络应用开发/7.1.2.1基础部分' },
                { text: '7.1.2.2进阶部分', link: '/7.网络应用开发/7.1.2.2进阶部分' },
              ]
            },
          ]
        },
      ]
    },
  ]
}

export function chapter8() {
  return [
    { text: '返回上一层', link: '/简介' },
    {
      text: '8.基础学科',
      collapsed: false,
      items: [
        { text: '8.基础学科', link: '/8.基础学科/8.基础学科' },
        { text: '8.1经济学科普Part1', link: '/8.基础学科/8.1经济学科普Part1' },
      ]
    }
  ]
}

export function chapter9() {
  return [
    { text: '返回上一层', link: '/简介' },
    {
      text: '9.计算机网络',
      collapsed: false,
      items: [
        { text: '9 计算机网络', link: '/9.计算机网络/9.计算机网络' },
        { text: '9.1 计网速通', link: '/9.计算机网络/9.1计网速通' },
        { text: '9.2.1 物理层' },
        { text: '9.2.2 链路层' },
        {
          text: '9.2.3 网络层',
          collapsed: true,
          items: [
            { text: '9.2.3 网络层', link: '/9.计算机网络/9.2.3网络层' },
            { text: '9.2.3.1 IP 协议', link: '/9.计算机网络/9.2.3.1IP协议' },
            { text: '9.2.3.2 子网与无类域间路由', link: '/9.计算机网络/9.2.3.2子网与无类域间路由' }
          ]
        },
      ]
    }
  ]
}
