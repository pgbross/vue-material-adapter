import { mount, createLocalVue, checkValidMdcAdapter } from './unit-test';
import { mdcSelect } from '../packages/mcwv-select/index.js';
import { mdcFloatingLabel } from '../packages/mcwv-floating-label/index.js';
import { mdcLineRipple } from '../packages/mcwv-line-ripple/index.js';

const Spec = {
  name: 'spec',
  template: `
  <div>
    <mdc-select v-model="selectValue" label="select label">
      <optgroup label="options">
        <option>option1</option>
        <option value="option2">Option2</option>
      </optgroup>
    </mdc-select>
  </div>`,
  data() {
    return {
      selectValue: undefined,
    };
  },
  components: {
    'mdc-select': mdcSelect,
    'mdc-floating-label': mdcFloatingLabel,
    'mdc-line-ripple': mdcLineRipple,
  },
};

describe(__dirname, () => {
  const localVue = createLocalVue();
  describe('mdcSelect', () => {
    const spec = mount(Spec, localVue);
    test('is a Vue instance', () => {
      expect(spec.isVueInstance()).toBeTruthy();
    });
    describe('mdcSelect', () => {
      checkValidMdcAdapter(spec.find(mdcSelect).vm);
    });
  });
});
