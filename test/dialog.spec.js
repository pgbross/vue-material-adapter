import { pluginSanityCheck } from './unit-test';
import plugin from '../packages/mcwv-dialog/index.js';
import { mcwButton } from '../packages/mcwv-button/index.js';

pluginSanityCheck(__dirname, plugin, {
  mcwDialogContent: {
    stubs: { mcwButton: mcwButton },
  },
  mcwDialogButton: {
    stubs: { mcwButton: mcwButton },
  },
});
