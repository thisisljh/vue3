import { createApp } from 'vue'
import './style.css'
import App from './App.vue';

import store from './store/index'
import router from './router/index'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')