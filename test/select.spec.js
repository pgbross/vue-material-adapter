import { mount, createLocalVue, checkValidMcwAdapter } from './unit-test';
import { mcwSelect } from '../packages/mcwv-select/index.js';
import { mcwMenu, mcwMenuSurface } from '../packages/mcwv-menu/index.js';
import { mcwList } from '../packages/mcwv-list/index.js';
import { mcwFloatingLabel } from '../packages/mcwv-floating-label/index.js';
import { mcwLineRipple } from '../packages/mcwv-line-ripple/index.js';

const Spec = {
  name: 'spec',
  template: `
  <div>
    <mcw-select v-model="selectValue" label="select label">
    <mcw-menu class="mdc-select__menu">
      <li data-value="type" key="type">type</li>
    </mcw-menu>

    </mcw-select>
  </div>`,
  data() {
    return {
      selectValue: undefined,
    };
  },
  components: { mcwSelect, mcwMenu },
};

describe(__dirname, () => {
  const localVue = createLocalVue();
  describe('mcwSelect', () => {
    const spec = mount(Spec, {
      localVue,
      stubs: {
        'mcw-floating-label': mcwFloatingLabel,
        'mcw-line-ripple': mcwLineRipple,
        'mcw-list': mcwList,
        'mcw-menu-surface': mcwMenuSurface,
      },
    });
    test('is a Vue instance', () => {
      expect(spec.isVueInstance()).toBeTruthy();
    });
    describe('mcwSelect', () => {
      checkValidMcwAdapter(spec.find(mcwSelect).vm);
    });
  });
});
