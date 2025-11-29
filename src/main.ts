// @/src/main.ts
import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 使用 ViteSSG 代替 createApp
export const createApp = ViteSSG(
  App,
  {
    routes: router.options.routes, // 使用 router 配置的路由
    scrollBehavior(to, from, savedPosition) {
      // 保留浏览器返回时的滚动位置
      return savedPosition || { top: 0 }
    },
  },
  // 第三个参数是回调，可注册插件或全局逻辑
  ({ app, router, routes, isClient }) => {
    app.use(createPinia())
  }
)

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')
