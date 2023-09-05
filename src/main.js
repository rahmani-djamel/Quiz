import { createApp } from 'vue'
import { createPinia } from "pinia";
import { MotionPlugin } from '@vueuse/motion'


import App from './App.vue'
import './index.css'

const app = createApp(App)


app.use(createPinia())
app.use(MotionPlugin)


app.mount('#app')
