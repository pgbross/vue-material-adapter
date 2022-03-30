import { BasePlugin } from '../base/index.js';
import mcwSnackbarQueue from './snackbar-queue.js';
import mcwSnackbar from './snackbar.vue';

export { default as mcwSnackbarQueue } from './snackbar-queue.js';
export { default as mcwSnackbar } from './snackbar.vue';

export default BasePlugin({
  mcwSnackbar,
  mcwSnackbarQueue,
});
