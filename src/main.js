import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/input.css';
import Default from './layouts/Default.vue'

const app = createApp(App)
app.use(router)
app.component("default-layout", Default);
app.mount('#app')
