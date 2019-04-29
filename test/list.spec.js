import { mount, createLocalVue, checkValidMcwAdapter } from './unit-test';
import plugin from '../packages/mcwv-list/index.js';
import { mcwList } from '../packages/mcwv-list/index.js';

const Spec = {
  template: `  <div>
<mcw-list-group>
  <mcw-list-group-sub-header>Group 1</mcw-list-group-sub-header>
  <mcw-list>
    <mcw-list-item>Item1</mcw-list-item>
    <mcw-list-item>Item2</mcw-list-item>
    <mcw-list-divider />
    <mcw-list-item>Item3</mcw-list-item>
  </mcw-list>
  <mcw-list-divider />
  <mcw-list-group-sub-header>Group 2</mcw-list-group-sub-header>
  <mcw-list>
    <mcw-list-item>Item4</mcw-list-item>
    <mcw-list-item>Item5</mcw-list-item>
    <mcw-list-divider />
    <mcw-list-item>Item6</mcw-list-item>
  </mcw-list>
</mcw-list-group>
</div>`,
};
describe(__dirname, () => {
  const localVue = createLocalVue();
  localVue.use(plugin);
  const spec = mount(Spec, { localVue });

  describe('mcwList', () => {
    const wrapper = spec.find(mcwList);
    checkValidMcwAdapter(wrapper.vm);
  });
});
