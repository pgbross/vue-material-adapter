import { pluginSanityCheck, mount, checkValidFoundation } from './unit-test';
import plugin, { mdcTextField } from '../packages/mcwv-textfield/index.js';
import { mdcLineRipple } from '../packages/mcwv-line-ripple/index.js';
import { mdcFloatingLabel } from '../packages/mcwv-floating-label/index.js';

pluginSanityCheck(__dirname, plugin, {
  mdcTextField: {
    stubs: { mdcLineRipple: mdcLineRipple },
    propsData: { value: 'test' },
  },
});

describe('mdcTextField', () => {
  const wrapper = mount(mdcTextField, {
    stubs: { mdcLineRipple: mdcLineRipple, mdcFloatingLabel: mdcFloatingLabel },
    propsData: { value: 'test', label: 'label', helptext: 'helptext' },
  });

  describe('labelFoundation', () => {
    const component = wrapper.find(mdcFloatingLabel);
    checkValidFoundation(component.vm.foundation);
  });

  describe('lineRippleFoundation', () => {
    const component = wrapper.find(mdcLineRipple);
    expect(component).toBeInstanceOf(Object);
  });

  describe('helperTextFoundation', () => {
    const component = wrapper.find('.mdc-text-field-helper-line');
    checkValidFoundation(component.vm.foundation);
  });
});
