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
// 格式暂时为：https://avatars.hdu-cs.wiki/ + github 用户名（不是昵称）（不加png）
// https://avatars.hdu-cs.wiki/camera-2018

export const members: Member = [
  {
    avatar: 'https://avatars.hdu-cs.wiki/camera-2018',
    name: 'camera-2018',
    title: 'Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/camera-2018' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/HanWu311',
    name: 'HanWu311',
    title: 'Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/HanWu311' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/FallenYing',
    name: 'FallenYing',
    title: 'Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/FallenYing' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/semantic-release-bot',
    name: 'semantic-release-bot',
    title: 'Active Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/semantic-release-bot' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/E1PsyCongroo',
    name: 'E1PsyCongroo',
    title: 'Active Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/E1PsyCongroo' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/MarleneJiang',
    name: 'MarleneJiang',
    title: 'Active Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/MarleneJiang' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/fltb',
    name: 'fltb',
    title: 'Active Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/fltb' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/ZhouXiinlei',
    name: 'ZhouXiinlei',
    title: 'Active Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/ZhouXiinlei' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/BaiMeow',
    name: 'BaiMeow',
    title: 'Active Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/BaiMeow' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/m0n-k1y',
    name: 'm0n-k1y',
    title: 'Active Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/m0n-k1y' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/Kiameow',
    name: 'Kiameow',
    title: 'Active Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/Kiameow' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/Plumbiu',
    name: 'Plumbiu',
    title: 'Active Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/Plumbiu' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/46135621',
    name: '46135621',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/46135621' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/creamm-kk',
    name: 'creamm-kk',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/creamm-kk' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/4nsw3r123',
    name: '4nsw3r123',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/4nsw3r123' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/ganbabamaster',
    name: 'ganbabamaster',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/ganbabamaster' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/ChengNanFlower',
    name: 'ChengNanFlower',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/ChengNanFlower' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/ek1ng',
    name: 'ek1ng',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/ek1ng' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/Duke486',
    name: 'Duke486',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/Duke486' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/w31r4',
    name: 'w31r4',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/w31r4' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/sd0ric4',
    name: 'sd0ric4',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/sd0ric4' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/LittleFish0403',
    name: 'LittleFish0403',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/LittleFish0403' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/Bian-Mu',
    name: 'Bian-Mu',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/Bian-Mu' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/aFlyBird0',
    name: 'aFlyBird0',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/aFlyBird0' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/NX-Official',
    name: 'NX-Official',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/NX-Official' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/PM25OO',
    name: 'PM25OO',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/PM25OO' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/NingmengLemon',
    name: 'NingmengLemon',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/NingmengLemon' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/stydxm',
    name: 'stydxm',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/stydxm' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/U1traVeno',
    name: 'U1traVeno',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/U1traVeno' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/wenjing233',
    name: 'wenjing233',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/wenjing233' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/jikeezi',
    name: 'jikeezi',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/jikeezi' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/cherryyyyeahhh',
    name: 'cherryyyyeahhh',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/cherryyyyeahhh' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/axiomofchoice-hjt',
    name: 'axiomofchoice-hjt',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/axiomofchoice-hjt' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/YXZ252426',
    name: 'YXZ252426',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/YXZ252426' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/Tongasq',
    name: 'Tongasq',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/Tongasq' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/LRache',
    name: 'LRache',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/LRache' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/Krisnile',
    name: 'Krisnile',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/Krisnile' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/kiramyby',
    name: 'kiramyby',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/kiramyby' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/KAFUUC',
    name: 'KAFUUC',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/KAFUUC' },
    ]
  },
  {
    avatar: 'https://avatars.hdu-cs.wiki/Ec3o',
    name: 'Ec3o',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/Ec3o' },
    ]
  },
]
