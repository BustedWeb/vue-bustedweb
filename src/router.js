import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Analyzer from './views/Analyzer.vue';
import Privacy from './views/privacy.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/analyzer', component: Analyzer },
  { path: '/privacy', component: Privacy }
  // Puedes agregar rutas adicionales aquí según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.NODE_ENV === 'production' ? '/vue-bustedweb/' : '/',
  routes
});

export default router;