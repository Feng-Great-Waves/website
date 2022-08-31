import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('@/views/index')
  }
]

const router = createRouter({
  scrollBehavior: () => ({
    y: 0
  }),
  history: createWebHistory(),
  routes
})

export default router
