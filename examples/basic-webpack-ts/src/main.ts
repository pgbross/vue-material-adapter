import { createApp, h } from 'vue';
import App from './app';
import VueMaterialAdapter from './vma';

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
