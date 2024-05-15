import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'

import '@/style/global.scss'

import App from './App.vue'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css' // 全局引入bootstarp字体图标，可以使用伪元素

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
