import { createApp } from 'vue'
import App from './App.vue'
import * as routeConfig from './router/router.js'
import store from './store/store.js'

createApp(App)
.use(routeConfig.router)
.use(store)
.mount('#app')
