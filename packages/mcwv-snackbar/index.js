import { BasePlugin } from '@mcwv/base';
import mcwSnackbarQueue from './snackbar-queue.js';
import { mcwSnackbar } from './snackbar.js';

export { mcwSnackbar, mcwSnackbarQueue };

export default BasePlugin({
  mcwSnackbar,
  mcwSnackbarQueue,
});
