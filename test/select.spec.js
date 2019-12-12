import { mount, createLocalVue, checkValidMcwAdapter } from './unit-test';
import { mcwSelect } from '../packages/mcwv-select/index.js';
import { mcwMenu, mcwMenuSurface } from '../packages/mcwv-menu/index.js';
import {
  mcwListItem,
  mcwList,
  mcwListItemText,
} from '../packages/mcwv-list/index.js';
import { mcwFloatingLabel } from '../packages/mcwv-floating-label/index.js';
import { mcwLineRipple } from '../packages/mcwv-line-ripple/index.js';

const Spec = {
  name: 'spec',
  template: `
  <div>
    <mcw-select v-model="selectValue" label="select label">
    <mcw-menu class="mdc-select__menu">
      <mcw-list-item data-value="type" key="type">type</mcw-list-item>
    </mcw-menu>

    </mcw-select>
  </div>`,
  data() {
    return {
      selectValue: undefined,
    };
  },
  components: { mcwSelect, mcwMenu, mcwListItem },
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
        'mcw-list-item': mcwListItem,
        'mcw-menu-surface': mcwMenuSurface,
        'mcw-list-item-text': mcwListItemText,
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
