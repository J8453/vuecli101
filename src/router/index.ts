import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import VueHome from '../views/VueHome.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/todos',
    name: 'Todos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Todos.vue'),
  },
  {
    path: '/vue',
    name: 'VueHome',
    component: VueHome,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
