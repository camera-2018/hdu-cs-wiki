export type NavItem = NavItemComponent | NavItemWithLink | NavItemWithChildren

export interface NavItemComponent {
  component: string
  props?: Record<string, any>
}

export interface NavItemWithLink {
  text: string
  link: string
  items?: never

  /**
   * `activeMatch` is expected to be a regex string. We can't use actual
   * RegExp object here because it isn't serializable
   */
  activeMatch?: string
  rel?: string
  target?: string
  noIcon?: boolean
}

export interface NavItemChildren {
  text?: string
  items: NavItemWithLink[]
}

export interface NavItemWithChildren {
  text?: string
  items: (NavItemComponent | NavItemChildren | NavItemWithLink)[]

  /**
   * `activeMatch` is expected to be a regex string. We can't use actual
   * RegExp object here because it isn't serializable
   */
  activeMatch?: string
}

export function nav() {
  return [
    { component: 'ShortLink', },
    { text: '首页', link: '/' },
    {
      text: '新版章节', items: [
        { text: '1.杭电生存指南', link: '/1.杭电生存指南/1.1人文社科的重要性（韩健夫老师寄语）' },
        { text: '2.编程模块', link: '/2.编程模块/2.编程模块' },
        { text: '3.AI模块', link: '/3.AI模块/3.AI模块' },
        { text: '4.WEB模块', link: '/4.WEB模块/4.WEB模块' },
        { text: '5.安全模块', link: '/5.安全模块/5.安全模块' },
        { text: '6.课程合集', link: '/6.课程合集/6.课程合集' },
        { text: '7.底层模块', link: '/7.底层模块/7.底层模块' },
        { text: '8.游戏模块', link: '/8.游戏模块/8.游戏模块' },
        { text: '9.Web3模块', link: '/9.Web3模块/9.Web3模块' },
        { text: '10.硬件模块', link: '/10.硬件模块/10.硬件模块' },
      ]
    },
    {
      text: '旧版章节', items:
        [
          { text: '1.杭电生存指南（最重要模块）', link: '/1.杭电生存指南/1.1人文社科的重要性（韩健夫老师寄语）' },
          { text: '2.高效学习', link: '/2023旧版内容/2.高效学习/2.高效学习' },
          { text: '3.编程思维体系构建', link: '/2023旧版内容/3.编程思维体系构建/3.编程思维体系构建' },
          { text: '4.人工智能', link: '/2023旧版内容/4.人工智能/4.人工智能' },
          { text: '5.富有生命的嵌入式', link: '/2023旧版内容/5.富有生命的嵌入式/5.富有生命的嵌入式' },
          { text: '6.计算机安全', link: '/2023旧版内容/6.计算机安全/6.计算机安全' },
          { text: '7.网络应用开发', link: '/2023旧版内容/7.网络应用开发/7.网络应用开发入门' },
          { text: '8.基础学科', link: '/2023旧版内容/8.基础学科/8.基础学科' },
          { text: '9.计算机网络', link: '/2023旧版内容/9.计算机网络/9.计算机网络' },
        ]
    },
    { text: '博客', link: '/blog/' },
    { text: 'Wiki史', link: '/wiki史' },
    {
      text: '友链', items:
        [
          { text: '杭电导航（生活类）', link: 'https://wiki.hduhelp.com' },
          { text: '西邮 Wiki（生活类）', link: 'https://wiki.cooo.site' },
          { text: '河南大学计算机生存指北（技术类）', link: 'https://cs-survive-henu.github.io' },
        ]
    },
  ] as NavItem[]
}
