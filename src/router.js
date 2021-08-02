import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetails.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/couches', components: CoachesList },
    {
      path: '/couches/:id',
      components: CoachDetail,
      children: [{ path: './contact', components: ContactCoach }],
    },

    { path: '/register', components: CoachRegistration },
    { path: '/requests', components: RequestsReceived },
    { path: '/:notFound(.*)', components: NotFound },
  ],
});

export default router;
