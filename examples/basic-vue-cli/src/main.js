import { createApp, h } from 'vue';
import VueMaterialAdapter from 'vue-material-adapter';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
});

// mount app
const app = createApp({
  render: () => h(App),
});

app.use(router);
app.use(VueMaterialAdapter);

app.mount('#app');
