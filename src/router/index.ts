import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import More from '../views/More.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { path: '/more', name: 'More', component: More },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
