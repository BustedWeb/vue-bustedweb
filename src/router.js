import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Analyzer from './views/Analyzer.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/analyzer', component: Analyzer }
  // Puedes agregar rutas adicionales aquí según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;