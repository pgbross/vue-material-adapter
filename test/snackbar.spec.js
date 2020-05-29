import { pluginSanityCheck } from './unit-test';
import plugin, { mcwSnackbar } from '../packages/snackbar/index.js';

pluginSanityCheck(__dirname, plugin, {
  mcwSnackbarQueue: {
    stubs: { mcwSnackbar: mcwSnackbar },
  },
});
