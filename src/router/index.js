import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Django from '@/views/Django/index.vue'
import English from '@/views/English/index.vue'
import GitHub from '@/views/GitHub/index.vue'
import Javascript from '@/views/Javascript/index.vue'
import Master from '@/views/Master/index.vue'
import Plane from '@/views/Plane/index.vue'
import Python from '@/views/Python/index.vue'
import Vue from '@/views/Vue/index.vue'

// createRouter 创建路由实例，===> new VueRouter()
// 1. history模式: createWebHistory()   http://xxx/user
// 2. hash模式: createWebHashHistory()  http://xxx/#/user

// vite 的配置 import.meta.env.BASE_URL 是路由的基准地址，默认是 ’/‘
// https://vitejs.dev/guide/build.html#public-base-path

// 如果将来你部署的域名路径是：http://xxx/my-path/user
// vite.config.ts  添加配置  base: my-path，路由这就会加上 my-path 前缀了

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/layout' },
    { path: '/layout', name: 'layout', component: Layout },
    { path: '/english', name: 'english', component: English },
    { path: '/master', name: 'master', component: Master },
    { path: '/javascript', name: 'javascript', component: Javascript },
    { path: '/Vue', name: 'vue', component: Vue },
    { path: '/python', name: 'python', component: Python },
    { path: '/django', name: 'django', component: Django },
    { path: '/github', name: 'github', component: GitHub },
    { path: '/plane', name: 'plane', component: Plane }
  ]
})

export default router
