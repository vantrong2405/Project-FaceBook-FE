import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/client/Home.vue'
import Video from '../views/client/Video.vue'
import Market from '../views/client/Market.vue'
import Login from '../views/client/Login.vue'
import Game from '../views/client/Game.vue'
import Group from '../views/client/Group.vue'
import Profile from '../views/client/Profile.vue'
import PostVue from '../views/admin/Post.vue'
import ManagerUserVue from '@/views/admin/ManagerUser.vue'
// import checkLogin from './checkLogin'
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
      // , beforeEnter: checkLogin
    },
    {
      path: '/video',
      name: 'video',
      component: Video
      // , beforeEnter: checkLogin
    },
    {
      path: '/market',
      name: 'market',
      component: Market
      // , beforeEnter: checkLogin
    },
    {
      path: '/group',
      name: 'group',
      component: Group
      // , beforeEnter: checkLogin
    },
    {
      path: '/game',
      name: 'game',
      component: Game
      // , beforeEnter: checkLogin
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { layout: 'Empty' }
      // , beforeEnter: checkLogin
    },

    // admin 

    {
      path: '/admin/post',
      name: 'post',
      component: PostVue,
      meta: { layout: 'admin' }
      // , beforeEnter: checkLogin
    },
    {
      path: '/admin/user',
      name: 'user',
      component: ManagerUserVue,
      meta: { layout: 'admin' }
    }
  ]
})

export default router
