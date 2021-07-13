import { createApp, h } from 'vue';
import VueMaterialAdapter from 'vue-material-adapter';
import { createRouter, createWebHashHistory } from 'vue-router';
import index from './index.vue';
import routes from './routes.js';
import './styles/index.js';

// Vue.config.productionTip = true;
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// mount app
const app = createApp({
  render: () => h(index),
});

app.use(router);
app.use(VueMaterialAdapter);

app.mount('#app');
