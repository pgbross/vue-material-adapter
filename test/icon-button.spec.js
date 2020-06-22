import { pluginSanityCheck } from './unit-test';
import plugin from '../packages/icon-button/index.js';

pluginSanityCheck(__dirname, plugin, {
  mcwIconButton: { scopedSlots: { default: '' } },
  mcwIconToggle: { scopedSlots: { default: '' } },
});
