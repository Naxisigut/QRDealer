import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import SearchPage from '@/views/search-page/index.vue';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/search',
  },
  {
    path: '/search',
    component: SearchPage,
  }
]

// ()=>import('@/views/search-page/index.vue')

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router