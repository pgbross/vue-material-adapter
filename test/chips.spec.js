import { mount, createLocalVue, checkValidMdcAdapter } from './unit-test';
import plugin from '../packages/mcwv-chips/index.js';
import { mdcChip, mdcChipSet } from '../packages/mcwv-chips/index.js';

const Spec = {
  template: `<mdc-chip-set>
<mdc-chip>Item One</mdc-chip>
<mdc-chip>Item Two</mdc-chip>
<mdc-chip>Item Three</mdc-chip>
</mdc-chip-set>`,
};

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
