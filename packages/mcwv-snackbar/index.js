import { BasePlugin } from '@mcwv/base';
import mcwSnackbarQueue from './mcw-snackbar-queue.js';
import { mcwSnackbar } from './mcw-snackbar.js';

export { mcwSnackbar, mcwSnackbarQueue };

export default BasePlugin({
  mcwSnackbar,
  mcwSnackbarQueue,
});
