import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3Transitions from 'vue3-transitions'


const app = createApp(App)
app.use(store)
app.use(router)
app.use(Vue3Transitions)
app.mount('#app')