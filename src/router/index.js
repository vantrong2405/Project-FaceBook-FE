import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Video from '../views/Video.vue'
import Market from '../views/Market.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // login
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { layout: 'Empty' }
    },
    // page
    {
      path: '/',
      name: 'main',
      component: Home
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/market',
      name: 'market',
      component: Market
    }
  ]
})

export default router
