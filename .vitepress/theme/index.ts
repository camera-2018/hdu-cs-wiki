// https://vitepress.dev/guide/custom-theme
import { watch } from 'vue'
import { createMediumZoomProvider } from './useMediumZoom.js'
// import Theme from 'vitepress/theme'
import DefaultTheme from 'vitepress/theme-without-fonts'
import Layout from './Layout.vue'
import Download from '../../components/Download.vue'
import Bilibili from '../../components/Bilibili.vue'
import Parallax from '../../components/Parallax.vue'
import CourseTable from '../../components/CourseTable.vue'
import ShortLink from '../../components/ShortLink.vue'
import WikiLogo from '../components/WikiLogo.vue'
import './style.css'
import './rainbow.css'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import '@shikijs/vitepress-twoslash/style.css'
import vitepressBprogress from 'vitepress-plugin-bprogress'
import 'vitepress-plugin-bprogress/style.css'

let homePageStyle: HTMLStyleElement | undefined = undefined

export default {
  ...DefaultTheme,
  Layout: Layout,

  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('Download', Download)
    ctx.app.component('Bilibili', Bilibili)
    ctx.app.component('Parallax', Parallax)
    ctx.app.component('CourseTable', CourseTable)
    ctx.app.component('ShortLink', ShortLink)
    ctx.app.component('WikiLogo', WikiLogo)
    ctx.app.use(TwoslashFloatingVue)
    vitepressBprogress(ctx)
    if (typeof window === 'undefined')
      return
    watch(
      () => ctx.router.route.data.relativePath,
      () => updateHomePageStyle(location.pathname === '/' || location.pathname === '/contributors'),
      { immediate: true },
    )
    createMediumZoomProvider(ctx.app, ctx.router)
  },
}

if (typeof window !== 'undefined') {
  // detect browser, add to class for conditional styling
  import('./pwa.js')

  const browser = navigator.userAgent.toLowerCase()
  if (browser.includes('chrome'))
    document.documentElement.classList.add('browser-chrome')
  else if (browser.includes('firefox'))
    document.documentElement.classList.add('browser-firefox')
  else if (browser.includes('safari'))
    document.documentElement.classList.add('browser-safari')
}

function updateHomePageStyle(value) {
  if (value) {
    if (homePageStyle)
      return
    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  }
  else {
    if (!homePageStyle)
      return
    else {
      homePageStyle.remove()
      homePageStyle = undefined
    }
  }
}
