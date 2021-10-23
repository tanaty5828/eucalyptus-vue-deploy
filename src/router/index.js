import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/articles/create',
    component: () => import('../views/articles/Create.vue'),
  },
  {
    path: '/articles/:id_sha256',
    component: () => import('../views/articles/Show.vue'),
  },
  {
    path: '*',
    component: () => import('../views/errors/Error.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
