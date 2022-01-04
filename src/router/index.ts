import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
const More = () => import(/* webpackChunkName: "more" */ '@/views/More.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/more',
    name: 'More',
    component: More,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
