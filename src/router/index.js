import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import helloRoutes from './hello'

export default createRouter({
  history: createWebHashHistory(),
  routes: routes.concat(helloRoutes),
  // strict: true, // 应用到所有路由
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  // parseQuery(query) {},
  // stringifyQuery(obj) {},
})
