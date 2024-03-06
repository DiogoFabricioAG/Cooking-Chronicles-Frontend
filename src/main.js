import './assets/main.css'

import '@fontsource/open-sans/400.css'
import '@fontsource/esteban/400.css'
import '@fontsource/merriweather/400.css'
import '@fontsource/merriweather/700.css'

import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
