import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './plugins/i18n';
import Botton from '@obedvega/vuejs-components-library'

import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import '@obedvega/vuejs-components-library';

createApp(App)
  .use(router)
  .use(i18n)
  .use(Botton)
  .mount('#app');

 