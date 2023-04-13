import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "srt-wiki",
  description: "srt-wiki",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '简介', link: '/简介' },
        ]
      },
      {
        text: '1. 杭电生存指南（最重要模块）',
        items: [
          { text: '人文社科的重要性（韩健夫老师寄语）', link: '/1.杭电生存指南/人文社科的重要性（韩健夫老师寄语）' },
          { text: '竞赛指北', link: '/1.杭电生存指南/竞赛指北' },
          { text: '导师选择', link: '/1.杭电生存指南/导师选择' },
          { text: '小心项目陷阱', link: '/1.杭电生存指南/小心项目陷阱' },
          { text: '小组作业避雷指南', link: '/1.杭电生存指南/小组作业避雷指南' },
          { text: '正确解读GPA', link: '/1.杭电生存指南/正确解读GPA' },
          { text: '杭电出国自救指南', link: '/1.杭电生存指南/杭电出国自救指南' },
          { text: '转专业二三事', link: '/1.杭电生存指南/转专业二三事' },
          { text: '问题专题：好想进入实验室', link: '/1.杭电生存指南/问题专题：好想进入实验室' },
          { text: '如何读论文', link: '/1.杭电生存指南/如何读论文' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
