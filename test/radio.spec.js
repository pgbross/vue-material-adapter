import { mount, createLocalVue, checkValidMdcAdapter } from './unit-test';
import plugin, {
  mdcRadioInput,
  mdcRadio,
} from '../packages/mcwv-radio/index.js';

const Spec = {
  template: `<mdc-radio>
<mdc-radio-input></mdc-radio-input>
</mdc-radio>`,
};

describe(__dirname, () => {
  const localVue = createLocalVue();
  localVue.use(plugin);
  const spec = mount(Spec, { localVue });

  describe('mdcRadio', () => {
    const wrapper = spec.find(mdcRadio);
    checkValidMdcAdapter(wrapper.vm);
  });

  describe('mdcRadioInput', () => {
    const wrapper = spec.find(mdcRadioInput);
    checkValidMdcAdapter(wrapper.vm);
  });
});
