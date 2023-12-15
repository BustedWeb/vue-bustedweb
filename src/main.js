import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './plugins/i18n';

import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app');

 