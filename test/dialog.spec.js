import { pluginSanityCheck } from './unit-test';
import plugin from '../packages/mcwv-dialog/index.js';
import { mdcButton } from '../packages/mcwv-button/index.js';

pluginSanityCheck(__dirname, plugin, {
  mdcDialogContent: {
    stubs: { mdcButton: mdcButton },
  },
  mdcDialogButton: {
    stubs: { mdcButton: mdcButton },
  },
});
