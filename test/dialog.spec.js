import { pluginSanityCheck } from './unit-test';
import plugin from '../packages/dialog/index.js';
import { mcwButton } from '../packages/button/index.js';

pluginSanityCheck(__dirname, plugin, {
  mcwDialogContent: {
    stubs: { mcwButton: mcwButton },
  },
  mcwDialogButton: {
    stubs: { mcwButton: mcwButton },
  },
});
