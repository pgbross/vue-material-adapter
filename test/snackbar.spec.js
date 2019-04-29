import { pluginSanityCheck } from './unit-test';
import plugin, { mcwSnackbar } from '../packages/mcwv-snackbar/index.js';

pluginSanityCheck(__dirname, plugin, {
  mcwSnackbarQueue: {
    stubs: { mcwSnackbar: mcwSnackbar },
  },
});
