import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobDetailed from '../views/JobDetailed.vue'
import JobAll from '../views/JobAll.vue'
import NotFound from '../views/NotFound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/job/:id',
      name: 'jobPostDetail',
      component: JobDetailed,
      props: true
    },

    {
      path: '/jobs/',
      name: 'allJobs',
      component: JobAll
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFound
    },
    {
      path: '/addjobs',
      name: 'addjob',
      component: () => import('../views/AddJobView.vue')
    },
    {
      path: '/jobs/edit/:id',
      name: 'EditJob',
      component: () => import('../views/EditJob.vue'),
      props: true
    }

  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
