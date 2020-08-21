import Vue from 'vue'
import App from './App.vue'
import VueMaterialAdapter from "vue-material-adapter";

Vue.config.productionTip = false
Vue.use(VueMaterialAdapter);

new Vue({
  render: h => h(App),
}).$mount('#app')
