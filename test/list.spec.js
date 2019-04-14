import { mount, createLocalVue, checkValidMdcAdapter } from './unit-test';
import plugin from '../packages/mcwv-list/index.js';
import {
  mdcList,
  // mdcListItem,
  // mdcListDivider,
  // mdcListGroup,
  // mdcListGroupHeader,
  // mdcListGroupDivider,
} from '../packages/mcwv-list/index.js';

const Spec = {
  template: `  <div>
<mdc-list-group>
  <mdc-list-group-header>Group 1</mdc-list-group-header>
  <mdc-list>
    <mdc-list-item>Item1</mdc-list-item>
    <mdc-list-item>Item2</mdc-list-item>
    <mdc-list-divider />
    <mdc-list-item>Item3</mdc-list-item>
  </mdc-list>
  <mdc-list-group-divider />
  <mdc-list-group-header>Group 2</mdc-list-group-header>
  <mdc-list>
    <mdc-list-item>Item4</mdc-list-item>
    <mdc-list-item>Item5</mdc-list-item>
    <mdc-list-divider />
    <mdc-list-item>Item6</mdc-list-item>
  </mdc-list>
</mdc-list-group>
</div>`,
};
describe(__dirname, () => {
  const localVue = createLocalVue();
  localVue.use(plugin);
  const spec = mount(Spec, { localVue });

  describe('mdcList', () => {
    const wrapper = spec.find(mdcList);
    checkValidMdcAdapter(wrapper.vm);
  });

  // describe('mdcListIem', () => {
  //   const wrapper = spec.find(mdcList);
  //   checkValidMdcAdapter(wrapper.vm);
  // });

  // describe('mdcListDivider', () => {
  //   const wrapper = spec.find(mdcList);
  //   checkValidMdcAdapter(wrapper.vm);
  // });

  // describe('mdcListGroup', () => {
  //   const wrapper = spec.find(mdcList);
  //   checkValidMdcAdapter(wrapper.vm);
  // });

  // describe('mdcListGroupDivider', () => {
  //   const wrapper = spec.find(mdcList);
  //   checkValidMdcAdapter(wrapper.vm);
  // });

  // describe('mdcListGroupHeader', () => {
  //   const wrapper = spec.find(mdcList);
  //   checkValidMdcAdapter(wrapper.vm);
  // });

  // describe('mdcListDivider', () => {
  //   const wrapper = spec.find(mdcList);
  //   checkValidMdcAdapter(wrapper.vm);
  // });
});
