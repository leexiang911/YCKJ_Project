import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/main.css'
import './style/index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
