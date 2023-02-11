import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import daybookRouter from '@/modules/daybook/router'
import authRouter from '@/modules/auth/router'
import { isAuthenticatedGuard } from '../modules/auth/router/authGuard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/daybook',
    beforeEnter: [isAuthenticatedGuard],
    ...daybookRouter,
  },
  {
    path: '/auth',
    ...authRouter,
  }
  ,
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
