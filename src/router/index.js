import { createRouter, createWebHashHistory } from 'vue-router'
import Django from '@/views/Django/index.vue'
import English from '@/views/English/index.vue'
import GitHub from '@/views/GitHub/index.vue'
import Javascript from '@/views/Javascript/index.vue'
import Master from '@/views/Master/index.vue'
import Plane from '@/views/Plane/index.vue'
import Python from '@/views/Python/index.vue'
import Vue from '@/views/Vue/index.vue'
import Home from '@/views/Home/index.vue'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
// import { isLeaf } from 'element-plus/es/utils'
import { isLoggedIn } from '@/utils/auth'

// createRouter 创建路由实例，===> new VueRouter()
// 1. history模式: createWebHistory()   http://xxx/user
// 2. hash模式: createWebHashHistory()  http://xxx/#/user

// vite 的配置 import.meta.env.BASE_URL 是路由的基准地址，默认是 ’/‘
// https://vitejs.dev/guide/build.html#public-base-path

// 如果将来你部署的域名路径是：http://xxx/my-path/user
// vite.config.ts  添加配置  base: my-path，路由这就会加上 my-path 前缀了
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/english',
          name: 'english',
          component: English,
          meta: { requiresAuth: true }
        },
        {
          path: '/master',
          name: 'master',
          component: Master,
          meta: { requiresAuth: true }
        },
        {
          path: '/javascript',
          name: 'javascript',
          component: Javascript,
          meta: { requiresAuth: true }
        },
        {
          path: '/Vue',
          name: 'vue',
          component: Vue,
          meta: { requiresAuth: true }
        },
        {
          path: '/python',
          name: 'python',
          component: Python,
          meta: { requiresAuth: true }
        },
        {
          path: '/django',
          name: 'django',
          component: Django,
          meta: { requiresAuth: true }
        },
        {
          path: '/github',
          name: 'github',
          component: GitHub,
          meta: { requiresAuth: true }
        },
        {
          path: '/plane',
          name: 'plane',
          component: Plane,
          meta: { requiresAuth: true }
        },
        {
          path: '/home',
          name: 'home',
          component: Home,
          meta: { requiresAuth: true }
        }
      ]
    },
    { path: '/login', name: 'login', component: Login }
  ]
})

// 全局导航守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
