import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Analyzer from './views/Analyzer.vue';
import Privacy from './views/privacy.vue';

const routes = [
  { path: '/:lang?', component: Home },
  { path: '/:lang?/analyzer', component: Analyzer },
  { path: '/:lang?/privacy', component: Privacy },
  //  { path: '/', component: Home },
  //  { path: '/analyzer', component: Analyzer },
  //  { path: '/privacy', component: Privacy }
  // Puedes agregar rutas adicionales aquí según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

