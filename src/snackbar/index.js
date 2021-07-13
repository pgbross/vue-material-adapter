import { BasePlugin } from '../base/index.js';
import mcwSnackbarQueue from './snackbar-queue.vue';
import mcwSnackbar from './snackbar.vue';

export { mcwSnackbar, mcwSnackbarQueue };

export default BasePlugin({
  mcwSnackbar,
  mcwSnackbarQueue,
});
