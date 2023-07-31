// import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";
import mathjax3 from 'markdown-it-mathjax3';
import { main_sidebar, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, chapter9 } from './sidebar.js';
import { nav } from './nav.js';
import PanguPlugin from 'markdown-it-pangu'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import { fileURLToPath, URL } from 'node:url'

const links = []

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
export default withMermaid({
  lang: 'zh-CN',
  title: "HDU-CS-WIKI",
  description: "HDU计算机科学讲义",
  lastUpdated: true,
  head: [['script', { async: "async", src: 'https://umami.hdu-cs.wiki/script.js', "data-website-id": "3f11687a-faae-463a-b863-6127a8c28301", "data-domains": "wiki.xyxsw.site,hdu-cs.wiki" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/': main_sidebar(),
      '/2.高效学习/': chapter2(),
      '/3.编程思维体系构建/': chapter3(),
      '/4.人工智能/': chapter4(),
      '/5.富有生命的嵌入式/': chapter5(),
      '/6.计算机安全/': chapter6(),
      '/7.网络应用开发/': chapter7(),
      '/8.基础学科/': chapter8(),
      '/9.计算机网络/': chapter9(),
    },
    outline: [2, 6],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/camera-2018/hdu-cs-wiki' }
    ],
    footer: {
      message: 'Made with ❤️ by ALL 协作者',
      copyright: 'Copyright © 2023-present Evan You && ALL 协作者'
    },
    lastUpdatedText: '上次更改',
    docFooter: {
      prev: '上一小节',
      next: '下一小节'
    },
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/camera-2018/hdu-cs-wiki/edit/master/:path',
      text: '在 GitHub 上修改此页'
    },
    externalLinkIcon: true,
  },
  markdown: {
    config: (md) => {
      md.use(mathjax3);
      md.use(PanguPlugin);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated
      })
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: 'https://hdu-cs.wiki/'
    })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPSwitchAppearance\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/CustomSwitchAppearance.vue', import.meta.url)
          )
        }
      ]
    }
  }
})

