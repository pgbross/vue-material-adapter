import { pluginSanityCheck, mount, checkValidFoundation } from './unit-test';
import plugin, { mcwTextfield } from '../packages/mcwv-textfield/index.js';
import { mcwLineRipple } from '../packages/mcwv-line-ripple/index.js';
import { mcwFloatingLabel } from '../packages/mcwv-floating-label/index.js';
import { mcwNotchedOutline } from '../packages/mcwv-notched-outline/index.js';

pluginSanityCheck(__dirname, plugin, {
  mcwTextfield: {
    propsData: { value: 'test' },
  },
});

describe('mcwTextfield', () => {
  const wrapper = mount(mcwTextfield, {
    propsData: { value: 'test', label: 'label', helptext: 'helptext' },
  });

  describe('labelFoundation', () => {
    const component = wrapper.find(mcwFloatingLabel);
    checkValidFoundation(component.vm.foundation);
  });

  describe('lineRippleFoundation', () => {
    const component = wrapper.find(mcwLineRipple);
    expect(component).toBeInstanceOf(Object);
  });

  describe('helperTextFoundation', () => {
    const component = wrapper.find('.mdc-text-field-helper-line');
    checkValidFoundation(component.vm.foundation);
  });
});

describe('mcwTextfield', () => {
  const wrapper = mount(mcwTextfield, {
    propsData: { value: 'test', label: 'label', outline: true },
  });

  describe('labelFoundation', () => {
    const component = wrapper.find(mcwFloatingLabel);
    checkValidFoundation(component.vm.foundation);
  });

  describe('lineRippleFoundation', () => {
    const component = wrapper.find(mcwLineRipple);
    expect(component).toBeInstanceOf(Object);
  });

  describe('mcwNotchedOutline', () => {
    const component = wrapper.find('.mdc-notched-outline');
    checkValidFoundation(component.vm.foundation);
  });
});
