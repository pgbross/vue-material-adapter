import { mount, createLocalVue, checkValidMcwAdapter } from './unit-test';
import { mcwSelect } from '../packages/mcwv-select/index.js';
import { mcwFloatingLabel } from '../packages/mcwv-floating-label/index.js';
import { mcwLineRipple } from '../packages/mcwv-line-ripple/index.js';

const Spec = {
  name: 'spec',
  template: `
  <div>
    <mcw-select v-model="selectValue" label="select label">
      <optgroup label="options">
        <option>option1</option>
        <option value="option2">Option2</option>
      </optgroup>
    </mcw-select>
  </div>`,
  data() {
    return {
      selectValue: undefined,
    };
  },
  components: { mcwSelect },
};

describe(__dirname, () => {
  const localVue = createLocalVue();
  describe('mcwSelect', () => {
    const spec = mount(Spec, {
      localVue,
      stubs: {
        'mcw-floating-label': mcwFloatingLabel,
        'mcw-line-ripple': mcwLineRipple,
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
