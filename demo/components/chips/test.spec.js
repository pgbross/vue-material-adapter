import { mount, createLocalVue, checkValidMdcAdapter } from '../unit-test';
import plugin from '../../packages/mcwv-chips/index.js';
import Spec from './test.spec.vue';
import { mdcChip, mdcChipSet } from '../../packages/mcwv-chips/index.js';

describe(__dirname, () => {
  const localVue = createLocalVue();
  localVue.use(plugin);
  const spec = mount(Spec, { localVue });

  describe('mdcChipSet', () => {
    const wrapper = spec.find(mdcChipSet);
    checkValidMdcAdapter(wrapper.vm);
  });

  describe('mdcChip', () => {
    const wrapper = spec.find(mdcChip);
    checkValidMdcAdapter(wrapper.vm);
  });
});
