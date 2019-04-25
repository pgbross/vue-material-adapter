import { pluginSanityCheck } from './unit-test';
import plugin from '../packages/mcwv-top-app-bar/index.js';

pluginSanityCheck(__dirname, plugin, {
  mdcTopAppBarIcon: {
    slots: { default: ['<i/>'] },
  },
});
