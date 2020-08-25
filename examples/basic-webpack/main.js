import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';

// uncomment the next line to import all vue-material-adapter as a single chunk
// import VueMaterialAdapter from 'vue-material-adapter';

// comment out the following lines if not importing as modules
import VueMaterialAdapter from './vma.js';

export default async function main() {
  Vue.use(VueCompositionAPI);
  Vue.use(VueMaterialAdapter);
  return new Vue({
    data: {
      title: 'Vue Material Adapter',
      subtitle: 'Welcome to your Vue app!',
      links: [
        {
          desc: 'To learn more about Vue, visit',
          url: 'http://vuejs.org/guide/',
        },
        {
          desc: 'To learn more about Vue Material Adapter, visit',
          url: 'https://github.com/pgbross/vue-material-adapter',
        },
        {
          desc: 'To have a preview of Vue Material Adapter components, visit',
          url: 'https://pgbross.github.io/vue-material-adapter',
        },
      ],
    },
    methods: {
      humanizeURL: function (url) {
        return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
      },
      onShowSnack() {
        const snackbar = this.$refs.snackbar;
        const snack = {
          message: 'A message from the application.',
          actionText: 'Hello',
          dismissAction: true,
          leading: false,
        };
        if (snackbar) {
          snackbar.handleSnack(snack);
        }
      },
    },
  }).$mount('#app');
}

main();
