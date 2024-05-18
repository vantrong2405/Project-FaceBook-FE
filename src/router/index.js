import { createRouter, createWebHistory } from 'vue-router'
// client
import Home from '../views/client/Home.vue'
import Video from '../views/client/Video.vue'
import Market from '../views/client/Market.vue'
import Login from '../views/client/Login.vue'
import Game from '../views/client/Game.vue'
import Group from '../views/client/Group.vue'
import Profile from '../views/client/Profile.vue'
import ResetPassWord from '../views/client/ResetPassword.vue'
import checkLogin from './checkLoginClient'
// admin
import PostVue from '../views/admin/Post.vue'
import ManagerUserVue from '@/views/admin/ManagerUser.vue'
import Admin_Login from '@/views/admin/Admin_Login.vue'
import checkLoginAdmin from './checkLoginAdmin'

// verify
import VerifyEmail from '../views/client/VerifyEmail.vue'
import ForgotPassword from '../views/client/ForgotPassword.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: { layout: 'Empty' }
    },
    {
      path: '/home',
      name: 'main',
      component: Home
      , beforeEnter: checkLogin
    },
    {
      path: '/video',
      name: 'video',
      component: Video
      , beforeEnter: checkLogin
    },
    {
      path: '/market',
      name: 'market',
      component: Market
      , beforeEnter: checkLogin
    },
    {
      path: '/group',
      name: 'group',
      component: Group
      , beforeEnter: checkLogin
    },
    {
      path: '/game',
      name: 'game',
      component: Game
      , beforeEnter: checkLogin
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { layout: 'Empty' }
      , beforeEnter: checkLogin
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetPassWord,
      meta: { layout: 'Empty' }
      , beforeEnter: checkLogin
    },

    // admin
    {
      path: '/admin/login',
      name: 'admin_Login',
      component: Admin_Login,
      meta: { layout: 'empty_admin' },
    },
    {
      path: '/admin/post',
      name: 'post',
      component: PostVue,
      meta: { layout: 'admin' },
      beforeEnter: checkLoginAdmin
    },
    {
      path: '/admin/user',
      name: 'user',
      component: ManagerUserVue,
      meta: { layout: 'admin' },
      beforeEnter: checkLoginAdmin
    },
    {
      path: '/verify-email',
      name: 'VerifyEmail',
      component: VerifyEmail,
      meta: { layout: 'Empty' }
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword?',
      component: ForgotPassword,
      meta: { layout: 'Empty' }
    },
  ]
})

export default router
