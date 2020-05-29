import plugin from '../packages/radio/index.js';
import { pluginSanityCheck } from './unit-test';

pluginSanityCheck(__dirname, plugin, {
  mcwRadio: {
    propsData: { name: 'test', id: 'test-1' },
  },
});
