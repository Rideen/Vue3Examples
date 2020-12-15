import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches'
    },
    {
      path: '/coaches',
      component: () => import('./pages/coaches/CoachesList.vue')
    },
    {
      path: '/coaches:id',
      component: () => import('./pages/coaches/CoachDetail.vue'),
      children: [
        {
          path: '/contact', // /coaches/id/contact
          component: () => import('./pages/requests/ContactCoach.vue')
        }
      ]
    },
    {
      path: '/register',
      component: () => import('./pages/coaches/CoachRegistration.vue')
    },
    {
      path: '/requests',
      component: () => import('./pages/requests/RequestsReceived.vue')
    },
    {
      path: '/:notFound(.*)',
      component: () => import('./pages/NotFound.vue')
    },
  ]
});

export default router;