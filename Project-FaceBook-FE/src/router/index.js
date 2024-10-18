import { createRouter, createWebHistory } from "vue-router"
// client
import Home from "../views/client/Home/index.vue"
import Video from "../views/client/Video.vue"
import Market from "../views/client/Market.vue"
import Login from "../views/client/Login.vue"
import Game from "../views/client/Game.vue"
import Group from "../views/client/Group.vue"
import Profile from "../views/client/Profile.vue"
import Search from "../views/client/Search.vue"
import ResetPassWord from "../views/client/ResetPassword.vue"
import checkLogin from "./checkLoginClient"
// admin
import PostVue from "../views/admin/Post.vue"
import ManagerUserVue from "@/views/admin/ManagerUser.vue"
import Admin_Login from "@/views/admin/Admin_Login.vue"
import checkLoginAdmin from "./checkLoginAdmin"

// verify
import VerifyEmail from "../views/client/VerifyEmail.vue"
import ForgotPassword from "../views/client/ForgotPassword.vue"
import pathConstant from "@/views/client/constant/path.constant"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: pathConstant.default,
      name: "login",
      component: Login,
      meta: { layout: "Empty" }
    },
    {
      path: pathConstant.home,
      name: "main",
      component: Home,
      beforeEnter: checkLogin
    },
    {
      path: pathConstant.video,
      name: "video",
      component: Video,
      beforeEnter: checkLogin
    },
    {
      path: pathConstant.market,
      name: "market",
      component: Market,
      beforeEnter: checkLogin
    },
    {
      path: pathConstant.group,
      name: "group",
      component: Group,
      beforeEnter: checkLogin
    },
    {
      path: pathConstant.game,
      name: "game",
      component: Game,
      beforeEnter: checkLogin
    },
    {
      path: pathConstant.profileDetail,
      name: "profile",
      component: Profile,

      beforeEnter: checkLogin
    },
    {
      path: pathConstant.searchDetail,
      name: "search",
      component: Search,

      beforeEnter: checkLogin
    },
    {
      path: pathConstant.resetPassword,
      name: "reset-password",
      component: ResetPassWord,
      meta: { layout: "Empty" },
      beforeEnter: checkLogin
    },

    // admin
    {
      path: pathConstant.adminLogin,
      name: "admin_Login",
      component: Admin_Login,
      meta: { layout: "empty_admin" }
    },
    {
      path: pathConstant.adminPost,
      name: "post",
      component: PostVue,
      meta: { layout: "admin" },
      beforeEnter: checkLoginAdmin
    },
    {
      path: pathConstant.adminUser,
      name: "user",
      component: ManagerUserVue,
      meta: { layout: "admin" },
      beforeEnter: checkLoginAdmin
    },
    {
      path: pathConstant.verifyEmail,
      name: "VerifyEmail",
      component: VerifyEmail,
      meta: { layout: "Empty" }
    },
    {
      path: pathConstant.forgotPassword,
      name: "ForgotPassword?",
      component: ForgotPassword,
      meta: { layout: "Empty" }
    }
  ]
})

export default router
