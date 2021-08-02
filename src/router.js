import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches'},
    { path: '/couches', components: null },
    {
      path: '/couches/:id',
      components: null,
      children: [{ path: './contact', components: null }],
    },

    { path: '/register', components: null },
    { path: '/requests', components: null },
    { path: '/:notFound(.*)', components: null },
  ],
});

export default router;
