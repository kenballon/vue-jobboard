import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobDetailed from '../views/JobDetailed.vue'
import JobAll from '../views/JobAll.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/jobs/:id',
      name: 'jobPostDetail',
      component: JobDetailed,
      props: true
    },

    {
      path: '/jobs/',
      name: 'allJobs',
      component: JobAll
    }

  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
