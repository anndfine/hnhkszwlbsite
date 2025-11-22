// @/src/router/index.ts
import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import App from '@/App.vue'
const routes = [
  {
    path: '/',          // 根路径
    name: 'home',
    component: App,     // 直接渲染 App
  },
]
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
