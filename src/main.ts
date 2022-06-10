import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import appAxios from "./utils/appAxios";

const app = createApp(App)
app.provide('appAxios', appAxios)
app.mount('#app')
