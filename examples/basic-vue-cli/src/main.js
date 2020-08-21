import Vue from 'vue'
import VueMaterialAdapter from "vue-material-adapter";
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueMaterialAdapter);

new Vue({
  render: h => h(App),
}).$mount('#app')
