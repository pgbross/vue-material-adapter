import { pluginSanityCheck } from './unit-test';
import plugin, { mdcSnackbar } from '../packages/mcwv-snackbar/index.js';

pluginSanityCheck(__dirname, plugin, {
  mdcSnackbarQueue: {
    stubs: { mdcSnackbar: mdcSnackbar },
  },
});
