import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { Quasar } from 'quasar'

createApp(App).use(router).use(Quasar).mount('#app')