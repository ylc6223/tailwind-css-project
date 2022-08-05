import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import View1 from '../views/View1.vue'
const routes = [
  {
    path: '/',
    name: Home,
    component: Home,
  },
  {
    path: '/view1',
    name: 'View1',
    component: View1,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
