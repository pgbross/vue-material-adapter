import { createApp, h } from 'vue';
import { button, dialog, snackbar } from 'vue-material-adapter';
import App from './App.vue';


const app = createApp({
    render: () => h(App),
  });
  
  app.use(button);
  app.use(snackbar);
  app.use(dialog);
  
  app.mount('#app');