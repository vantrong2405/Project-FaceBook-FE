/* eslint-disable no-undef */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/input.css'
import Default from './layouts/Default.vue'
import Empty from './layouts/Empty.vue'
import AdminVue from './layouts/Admin.vue'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.use(router)
app.use(ToastPlugin)
app.use(VueAxios, axios)
app.component('default-layout', Default)
app.component('empty-layout', Empty)
app.component('admin-layout', AdminVue)
app.mount('#app')
