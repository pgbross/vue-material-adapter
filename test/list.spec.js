import { mount, createLocalVue, checkValidMcwAdapter } from './unit-test';
import plugin from '../packages/mcwv-list/index.js';
import { mcwList } from '../packages/mcwv-list/index.js';

const Spec = {
  template: `  <div>
<mcw-list-group>
  <mcw-list-group-sub-header>Group 1</mcw-list-group-sub-header>
  <mcw-list>
  <li class="mdc-list-item" tabindex="0">
  <span class="mdc-list-item__text">Single-line item</span>
</li>
<li class="mdc-list-item">
  <span class="mdc-list-item__text">Single-line item</span>
</li>
<li class="mdc-list-item">
  <span class="mdc-list-item__text">Single-line item</span>
</li>
  </mcw-list>
  <mcw-list-divider />
  <mcw-list-group-sub-header>Group 2</mcw-list-group-sub-header>
  <mcw-list>
  <li class="mdc-list-item" tabindex="0">
  <span class="mdc-list-item__text">line item</span>
</li>
<li class="mdc-list-item">
  <span class="mdc-list-item__text">line item</span>
</li>
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
