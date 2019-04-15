import {
  pluginSanityCheck,
  createLocalVue,
  mount,
  checkValidMdcAdapter,
} from './unit-test';
import plugin, { mdcTabBar, mdcTab } from '../packages/mcwv-tabs/index.js';

// pluginSanityCheck(__dirname, plugin);

const Spec = {
  template: `<mdc-tab-bar ref="tabbar" indicator-accent>
  <mdc-tab >One</mdc-tab>
</mdc-tab-bar>`,
};

describe(__dirname, () => {
  const localVue = createLocalVue();
  localVue.use(plugin);
  const spec = mount(Spec, { localVue });

  describe('mdcTabBar', () => {
    const wrapper = spec.find(mdcTabBar);
    checkValidMdcAdapter(wrapper.vm);
  });

  describe('mdcTab', () => {
    const wrapper = spec.find(mdcTab);
    checkValidMdcAdapter(wrapper.vm);
  });

  // eslint-disable-next-line no-unused-vars
  const { mdcTab: mt, mdcTabBar: mtb, ...rest } = plugin.components;
  plugin.components = rest;

  pluginSanityCheck(__dirname, plugin);
});
