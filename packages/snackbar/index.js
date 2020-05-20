import { BasePlugin } from '~/base/index.js';
import mcwSnackbarQueue from './snackbar-queue.js';
import mcwSnackbar from './snackbar.js';

export { mcwSnackbar, mcwSnackbarQueue };

export default BasePlugin({
  mcwSnackbar,
  mcwSnackbarQueue,
});
