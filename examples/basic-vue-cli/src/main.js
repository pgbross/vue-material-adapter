import { createApp, h } from "vue";
import VueMaterialAdapter from "vue-material-adapter";
import App from "./app.vue";

// mount app
const app = createApp({
  render: () => h(App)
});

app.use(VueMaterialAdapter);

app.mount("#app");
