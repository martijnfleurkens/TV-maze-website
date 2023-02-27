//Import
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

//Styling
import './assets/style/main.sass'
import './assets/style/icons.css'

//Create app
const app = createApp(App)

//Store
app.use(createPinia())

//Router
app.use(router)

//Mount
app.mount('#app')
