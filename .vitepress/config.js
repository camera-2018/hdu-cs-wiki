// import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid-xyxsw";
import { VitePWA } from 'vite-plugin-pwa';
import { main_sidebar, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, chapter9 } from './sidebar.js';
import { nav } from './nav.js';
import PanguPlugin from 'markdown-it-pangu'
import { fileURLToPath, URL } from 'node:url'
import VueMacros from 'unplugin-vue-macros/vite'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  lang: 'zh-CN',
  title: "HDU-CS-WIKI",
  description: "HDU 计算机科学讲义",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['script', { async: "async", src: 'https://umami.hdu-cs.wiki/script.js', "data-website-id": "3f11687a-faae-463a-b863-6127a8c28301", "data-domains": "wiki.xyxsw.site,hdu-cs.wiki" }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ["meta", { "name": "description", "content": "HDU计算机科学讲义" }],
    ["meta", { "name": "viewport", "content": "width=device-width,initial-scale=1" }],
    ["meta", { "property": "og:url", "content": "https://hdu-cs.wiki/" }],
    ["meta", { "property": "og:type", "content": "website" }],
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
    ["link", { "rel": "preconnect", "href": "https://fonts.gstatic.com" }],
    ["link", { "rel": "stylesheet", "href": "https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&family=Noto+Sans+Mono:wght@400;600;700&family=Noto+Sans+SC:wght@400;600;700&display=swap" }],
  ],
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
    lineNumbers: true,
    config: (md) => {
      md.use(PanguPlugin);
    },
    math: true
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
    }
  }
})

