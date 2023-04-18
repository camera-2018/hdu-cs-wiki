// https://vitepress.dev/guide/custom-theme
import { h, watch } from 'vue'
// import Theme from 'vitepress/theme'
import DefaultTheme from 'vitepress/theme-without-fonts'
import './style.css'
import './rainbow.css'

let homePageStyle = undefined


export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    })
  },
  enhanceApp({ app, router, siteData }) {
    if (typeof window === 'undefined')
      return

    watch(
      () => router.route.data.relativePath,
      () => updateHomePageStyle(location.pathname === '/' || location.pathname === '/contributors.html'),
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