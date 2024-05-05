import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Video from '../views/Video.vue'
import Market from '../views/Market.vue'
import Login from '../views/Login.vue'
import Game from '../views/Game.vue'
import Group from '../views/Group.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { layout: 'Empty' }
    },
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
    },
    {
      path: '/group',
      name: 'group',
      component: Group
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
  ]
})

export default router
