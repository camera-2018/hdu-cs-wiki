// import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash';
import PanguPlugin from 'markdown-it-pangu';
import FootnotePlugin from 'markdown-it-footnote'
import { fileURLToPath, URL } from 'node:url';
import VueMacros from 'unplugin-vue-macros/vite';
import { VitePWA } from 'vite-plugin-pwa';
import { withMermaid } from "vitepress-plugin-mermaid";
import { nav } from './nav.js';
import { chapter2_old, chapter3_old, chapter4_old, chapter5_old, chapter6_old, chapter7_old, chapter8_old, chapter9_old, generateSidebar, main_sidebar, main_sidebar_old } from './sidebar.js';
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  lang: 'zh-CN',
  title: "HDU-CS-WIKI",
  description: "HDU 计算机科学讲义",
  lastUpdated: true,
  cleanUrls: false,
  head: [
    ['script', { async: "async", src: 'https://umami.hdu-cs.wiki/script.js', "data-website-id": "3f11687a-faae-463a-b863-6127a8c28301", "data-domains": "wiki.xyxsw.site,hdu-cs.wiki" }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ["meta", { "name": "description", "content": "HDU计算机科学讲义" }],
    ["meta", { "name": "viewport", "content": "width=device-width,initial-scale=1" }],
    ["meta", { "property": "og:url", "content": "https://hdu-cs.wiki/" }],
    ["meta", { "property": "og:type", "content": "website" }],
    ["meta", { "property": "og:site_name", "content": "HDU-CS-WIKI" }],
    ["meta", { "property": "og:title", "content": "HDU-CS-WIKI | HDU-CS-WIKI" }],
    ["meta", { "property": "og:description", "content": "HDU计算机科学讲义" }],
    ["meta", { "property": "og:image", "content": "https://cdn.xyxsw.site/og-img.png" }],
    ["meta", { "name": "twitter:card", "content": "summary_large_image" }],
    ["meta", { "property": "twitter:domain", "content": "hdu-cs.wiki" }],
    ["meta", { "property": "twitter:url", "content": "https://hdu-cs.wiki/" }],
    ["meta", { "name": "twitter:title", "content": "HDU-CS-WIKI | HDU-CS-WIKI" }],
    ["meta", { "name": "twitter:description", "content": "HDU计算机科学讲义" }],
    ["meta", { "name": "twitter:image", "content": "https://cdn.xyxsw.site/og-img.png" }],
    ["link", { "rel": "apple-touch-icon", "sizes": "180x180", "href": "/apple-touch-icon-180x180.png" }],
    ["link", { "rel": "icon", "type": "image/png", "sizes": "32x32", "href": "/favicon-32x32.png" }],
    ["link", { "rel": "icon", "type": "image/png", "sizes": "16x16", "href": "/favicon-16x16.png" }],
    ["link", { "rel": "manifest", "href": "/manifest.webmanifest" }],
    ["link", { "rel": "mask-icon", "href": "/safari-pinned-tab.svg", "color": "#5bbad5" }],
    ["meta", { "name": "msapplication-TileColor", "content": "#2b5797" }],
    ["meta", { "name": "theme-color", "content": "#ffffff" }],
    ["link", { "rel": "dns-prefetch", "href": "https://fonts.googleapis.com" }],
    ["link", { "rel": "dns-prefetch", "href": "https://fonts.gstatic.com" }],
    ["link", { "rel": "preconnect", "href": "https://fonts.googleapis.com" }],
    ["link", { "rel": "preconnect", "href": "https://fonts.gstatic.com", "crossorigin": "anonymous" }],
    ["link", { "rel": "stylesheet", "href": "https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&family=Noto+Sans+Mono:wght@400;600;700&family=Noto+Sans+SC:wght@400;600;700&display=swap" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/': main_sidebar(),
      '/1.杭电生存指南/': generateSidebar('1.杭电生存指南'),
      '/2.编程模块/': generateSidebar('2.编程模块'),
      '/3.AI模块/': generateSidebar('3.AI模块'),
      '/4.WEB模块/': generateSidebar('4.WEB模块'),
      '/5.安全模块/': generateSidebar('5.安全模块'),
      '/6.课程合集/': generateSidebar('6.课程合集'),
      '/7.底层模块/': generateSidebar('7.底层模块'),
      '/8.游戏模块/': generateSidebar('8.游戏模块'),
      '/9.Web3模块/': generateSidebar('9.Web3模块'),
      '/10.硬件模块/': generateSidebar('10.硬件模块'),
      '/2023旧版内容/': main_sidebar_old(),
      '/2023旧版内容/2.高效学习/': chapter2_old(),
      '/2023旧版内容/3.编程思维体系构建/': chapter3_old(),
      '/2023旧版内容/4.人工智能/': chapter4_old(),
      '/2023旧版内容/5.富有生命的嵌入式/': chapter5_old(),
      '/2023旧版内容/6.计算机安全/': chapter6_old(),
      '/2023旧版内容/7.网络应用开发/': chapter7_old(),
      '/2023旧版内容/8.基础学科/': chapter8_old(),
      '/2023旧版内容/9.计算机网络/': chapter9_old(),
    },
    aside: true,
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
    lineNumbers: true,
    config: (md) => {
      md.use(PanguPlugin);
      md.use(FootnotePlugin)
    },
    math: true,
    codeTransformers: [
      transformerTwoslash()
    ],
    // Explicitly load these languages for types hightlighting
    languages: ['js', 'jsx', 'ts', 'tsx']
  },
  sitemap: {
    hostname: 'https://hdu-cs.wiki'
  },
  vite: {
    plugins: [
      VueMacros(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: false,
          type: 'module',
          navigateFallback: '/',
        },
        injectRegister: 'auto',
        includeAssets: ['favicon.ico', 'favicon-16x16.png',
          'favicon-32x32.png', 'apple-touch-icon-180x180.png', 'safari-pinned-tab.svg'],
        manifest: {
          name: 'HDU 计算机科学讲义',
          short_name: 'HDU-CS-WIKI',
          description: 'HDU 计算机科学讲义',
          theme_color: '#ffffff',
          start_url: '/',
          prefer_related_applications: true,
          icons: [
            {
              src: '/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        workbox: {
          navigateFallback: '/',
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
          maximumFileSizeToCacheInBytes: 10000000,
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200]
                },
              }
            }
          ]
        }
      }),
    ],
    resolve: {
      alias: [
        {
          find: /^.*\/NotFound\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/CustomNotFound.vue', import.meta.url)
          )
        }
      ]
    },
    ssr: {
      noExternal: ["medium-zoom", 'vitepress-plugin-bprogress']
    }
  }
}))

