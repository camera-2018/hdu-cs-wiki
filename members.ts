type Member = {
  avatar: string
  name: string
  title: string
  links: {
    icon: string
    link: string
  }[]
}[]

// 写了个走 CF 的代理，为了让头像加载快点儿
// 格式暂时为：https://avatars-gh-fast.2907618001.workers.dev/ + github 用户名（不是昵称）（不加png）
// https://avatars-gh-fast.2907618001.workers.dev/camera-2018

export const members: Member = [
  {
    avatar: 'https://avatars-gh-fast.2907618001.workers.dev/camera-2018',
    name: 'camera-2018',
    title: 'Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/camera-2018' },
    ]
  },
  {
    avatar: 'https://avatars-gh-fast.2907618001.workers.dev/HanWu311',
    name: 'ZZM',
    title: 'Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/HanWu311' },
    ]
  },
  {
    avatar: 'https://avatars-gh-fast.2907618001.workers.dev/aFlyBird0',
    name: '爱飞的鸟',
    title: 'Contributer',
    links: [
      { icon: 'github', link: 'https://github.com/aFlyBird0' },
    ]
  },
  {
    avatar: 'https://avatars-gh-fast.2907618001.workers.dev/MarleneJiang',
    name: 'Marlene',
    title: 'Contributer',
    links: [
      { icon: 'github', link: 'https://github.com/MarleneJiang' },
    ]
  },
  {
    avatar: 'https://avatars-gh-fast.2907618001.workers.dev/creammmmmmmmmmmmmmmm',
    name: '可可',
    title: 'Contributer',
    links: [
      { icon: 'github', link: 'https://github.com/creammmmmmmmmmmmmmmm' },
    ]
  },
  {
    avatar: 'https://avatars-gh-fast.2907618001.workers.dev/renhaofan',
    name: '任浩帆',
    title: 'Contributer',
    links: [
      { icon: 'github', link: 'https://github.com/renhaofan' },
    ]
  },
  {
    avatar: 'https://avatars-gh-fast.2907618001.workers.dev/ZhouXiinlei',
    name: 'Xinlei_Zhou',
    title: 'Contributer',
    links: [
      { icon: 'github', link: 'https://github.com/ZhouXiinlei' },
    ]
  },
  {
    avatar: 'https://avatars-gh-fast.2907618001.workers.dev/46135621',
    name: '46135621',
    title: 'Contributer',
    links: [
      { icon: 'github', link: 'https://github.com/46135621' },
    ]
  },
  {
    avatar: 'https://avatars-gh-fast.2907618001.workers.dev/buwyi',
    name: 'buwyi',
    title: 'Contributer',
    links: [
      { icon: 'github', link: 'https://github.com/buwyi' },
    ]
  },
]
