import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
// import ShowDetailView from '../views/ShowDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/show/:id',
    //   name: 'detailView',
    //   component: ShowDetailView
    // }
    {
      path: '/show/:id',
      name: 'show',
      component: () => import('../views/ShowDetailView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})

export default router
