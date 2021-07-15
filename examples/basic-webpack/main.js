import { createApp, h } from 'vue';
import App from './app.js';
import VueMaterialAdapter from './vma.js';

export default async function main() {
  const appObject = {
    setup() {},
    render: () => h(App),
  };

  const app = createApp(appObject);

  app.use(VueMaterialAdapter);

  app.mount('#app');
}

main();
