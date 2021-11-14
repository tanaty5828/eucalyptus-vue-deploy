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
    path: '/articles/show/:id_sha256',
    component: () => import('../views/articles/Show.vue'),
  },
  {
    path: '/articles',
    component: () => import('../views/articles/Index.vue'),
  },
  {
    path: '/articles/:id_sha256/edit',
    component: () => import('../views/articles/Edit.vue'),
  },
  {
    path: '/articles/search-not-found',
    component: () => import('../views/errors/SearchNotFound.vue'),
  },
  {
    path: '/400',
    component: () => import('../views/errors/400.vue'),
  },
  {
    path: '/404',
    component: () => import('../views/errors/404.vue'),
  },
  {
    path: '/500',
    component: () => import('../views/errors/404.vue'),
  },
  {
    path: '*',
    component: () => import('../views/errors/404.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
