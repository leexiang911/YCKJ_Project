import { createRouter, createWebHistory } from 'vue-router'
import routerArr from './routers'// 配置路由表
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [//把路由规则导入
    ...routerArr    
  ]
})

export default router
