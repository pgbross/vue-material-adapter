import { pluginSanityCheck } from './unit-test';
import plugin from '../packages/mcwv-dialog/index.js';

pluginSanityCheck(__dirname, plugin, {
  mdcDialog: {
    propsData: {
      title: 'title',
    },
  },
});
