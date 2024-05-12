import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/client/Home.vue'
import Video from '../views/client/Video.vue'
import Market from '../views/client/Market.vue'
import Login from '../views/client/Login.vue'
import Game from '../views/client/Game.vue'
import Group from '../views/client/Group.vue'
import Profile from '../views/client/Profile.vue'

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
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { layout: 'Empty' }
    }
  ]
})

export default router
