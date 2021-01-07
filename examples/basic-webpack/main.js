import { createApp } from 'vue';
import VueMaterialAdapter from './vma.js';

export default async function main() {
  const app = createApp({
    data() {
      return {
        title: 'Vue Material Adapter',
        subtitle: 'Welcome to your Vue app!',
        links: [
          {
            desc: 'To learn more about Vue, visit',
            url: 'https://v3.vuejs.org/guide',
          },
          {
            desc: 'To learn more about Vue Material Adapter, visit',
            url: 'https://github.com/pgbross/vue-material-adapter/tree/alpha',
          },
          {
            desc: 'To have a preview of Vue Material Adapter components, visit',
            url: 'https://pgbross.github.io/vue-material-adapter',
          },
        ],
      };
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
  });
  app.use(VueMaterialAdapter);

  app.mount('#app');
}

main();
