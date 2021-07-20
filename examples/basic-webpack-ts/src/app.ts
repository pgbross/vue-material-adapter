import { reactive, toRefs } from 'vue';
import template from './app.html';

const humanizeURL = url => {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
};

export default {
  template,

  setup() {
    const uiState = reactive({
      title: 'Vue Material Adapter',
      subtitle: 'Welcome to your Vue app!',
      links: [
        {
          desc: 'To learn more about Vue, visit',
          url: 'https://v3.vuejs.org/guide',
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
      snackbar: undefined,
    });

    const onShowSnack = () => {
      const snackbar = uiState.snackbar;
      const snack = {
        message: 'A message from the application.',
        actionText: 'Hello',
        dismissAction: true,
        leading: false,
      };
      if (snackbar) {
        snackbar.handleSnack(snack);
      }
    };

    return { ...toRefs(uiState), humanizeURL, onShowSnack };
  },
};
