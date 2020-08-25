import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import VueMaterialAdapter from 'vue-material-adapter';
import VueRouter from 'vue-router';
import index from './index.vue';
import './polyfill.js';
import routes from './routes.js';
import './styles';

Vue.use(VueCompositionApi);

Vue.config.productionTip = true;
Vue.use(VueRouter);
Vue.use(VueMaterialAdapter);
const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

// mount app
const App = Vue.extend({
  render: h => h(index),
});
new App({ router }).$mount('#app');
