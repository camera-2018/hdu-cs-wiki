// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
// import Theme from 'vitepress/theme'
import DefaultTheme from 'vitepress/theme-without-fonts'
import './style.css'

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
// export default {
//   ...DefaultTheme,
// }