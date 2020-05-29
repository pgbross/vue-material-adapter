import { pluginSanityCheck } from './unit-test';
import plugin from '../packages/top-app-bar/index.js';

pluginSanityCheck(__dirname, plugin, {
  mcwTopAppBarIcon: {
    slots: { default: ['<i/>'] },
  },
});
