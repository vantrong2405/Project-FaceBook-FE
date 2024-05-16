import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/input.css'
import client from './layouts/Client.vue'
import empty_client from './layouts/Empty_Client.vue'
import empty_admin from './layouts/Empty_Admin.vue'
import AdminVue from './layouts/Admin.vue'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.use(ToastPlugin)
app.use(VueAxios, axios)
app.component('default-layout', client)
app.component('empty_client-layout', empty_client)
app.component('admin-layout', AdminVue)
app.component('empty_admin-layout', empty_admin)
app.use(router)
app.mount('#app')
