import { pluginSanityCheck } from './unit-test';
import plugin from '../packages/card/index.js';

pluginSanityCheck(__dirname, plugin, {
  mcwCardPrimaryAction: { scopedSlots: { default: '' } },
});
