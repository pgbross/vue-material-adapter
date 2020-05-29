import { mount, createLocalVue, checkValidMcwAdapter } from './unit-test';
import plugin from '../packages/chips/index.js';
// eslint-disable-next-line no-unused-vars
import { mcwChip, mcwChipSet } from '../packages/chips/index.js';

const Spec = {
  template: `<mcw-chip-set>
<mcw-chip>Item One</mcw-chip>
<mcw-chip>Item Two</mcw-chip>
<mcw-chip>Item Three</mcw-chip>
</mcw-chip-set>`,
};

describe(__dirname, () => {
  const localVue = createLocalVue();
  localVue.use(plugin);
  const spec = mount(Spec, { localVue });

  describe('mcwChipSet', () => {
    const wrapper = spec.findComponent(mcwChipSet);
    checkValidMcwAdapter(wrapper.vm);
  });

  // describe('mcwChip', () => {
  //   const wrapper = spec.find(mcwChip);
  //   checkValidMcwAdapter(wrapper.vm);
  // });
});
