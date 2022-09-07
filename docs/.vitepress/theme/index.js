import DefaultTheme from 'vitepress/theme'
import Gallery from '../../../components/Gallery.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('Gallery', Gallery)
  }
}