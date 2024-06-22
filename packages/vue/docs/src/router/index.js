import NProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layouts'
import routesConfig from './routes.config'

const routes = [{
  path: '/components',
  component: Layout,
  children: [{
    path: 'overview:lang(.*)',
    component: () => import('@/views/overview')
  }],
  ...routesConfig
}, {
  path: '/:lang(.*)',
  redirect: '/components/overview'
}]

const router = createRouter({
  history: createWebHistory(),
  fallback: false,
  routes,
  scrollBehavior: to => {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'auto' }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  if (to.path !== from.path) {
    NProgress.done()
    document.documentElement.scrollTop = 0
  }
})

export default router
