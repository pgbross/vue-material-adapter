import { pluginSanityCheck } from '../unit-test';
import plugin from '../../packages/mcwv-radio/index.js';

pluginSanityCheck(__dirname, plugin, {
  mdcRadio: {
    propsData: {
      name: 'test',
    },
  },
});
