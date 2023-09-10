// https://vitepress.dev/guide/custom-theme
import { h, watch } from 'vue'
// import Theme from 'vitepress/theme'
import DefaultTheme from 'vitepress/theme-without-fonts'
import Layout from './Layout.vue'
import Download from '../../components/Download.vue'
import Bilibili from '../../components/Bilibili.vue'
import Parallax from '../../components/Parallax.vue'
import './style.css'
import './rainbow.css'

let homePageStyle = undefined

export default {
  ...DefaultTheme,
  Layout: Layout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('Download', Download)
    ctx.app.component('Bilibili', Bilibili)
    ctx.app.component('Parallax', Parallax)
    if (typeof window === 'undefined')
      return

    watch(
      () => ctx.router.route.data.relativePath,
      () => updateHomePageStyle(location.pathname === '/' || location.pathname === '/contributors'),
      { immediate: true },
    )
  },
}

if (typeof window !== 'undefined') {
  // detect browser, add to class for conditional styling
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