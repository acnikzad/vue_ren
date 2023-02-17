import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Testimonials from '../views/Testimonials.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: Testimonials
  },
]

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes
})

export default router
