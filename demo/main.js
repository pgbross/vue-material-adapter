import { createApp, h } from 'vue';
import VueMaterialAdapter from 'vue-material-adapter';
import { createRouter, createWebHistory } from 'vue-router';
import index from './index.vue';
import './polyfill.js';
import routes from './routes.js';
import './styles';

// Vue.config.productionTip = true;
// Vue.use(VueRouter);
// Vue.use(VueMaterialAdapter);
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// new VueRouter({
//   routes,
//   scrollBehavior() {
//     return { x: 0, y: 0 };
//   },
// });

// mount app
const app = createApp({
  render: () => h(index),
});

app.use(router);
app.use(VueMaterialAdapter);

app.mount('#app');
// new App({ router }).$mount('#app');
