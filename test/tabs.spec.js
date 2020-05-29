import {
  pluginSanityCheck,
  createLocalVue,
  mount,
  checkValidMcwAdapter,
} from './unit-test';
import plugin, { mcwTabBar, mcwTab } from '../packages/tabs/index.js';

// pluginSanityCheck(__dirname, plugin);

const Spec = {
  template: `<mcw-tab-bar ref="tabbar" indicator-accent>
  <mcw-tab >One</mcw-tab>
</mcw-tab-bar>`,
};

describe(__dirname, () => {
  const localVue = createLocalVue();
  localVue.use(plugin);
  const spec = mount(Spec, { localVue });

  describe('mcwTabBar', () => {
    const wrapper = spec.findComponent(mcwTabBar);
    checkValidMcwAdapter(wrapper.vm);
  });

  describe('mcwTab', () => {
    const wrapper = spec.findComponent(mcwTab);
    checkValidMcwAdapter(wrapper.vm);
  });

  // eslint-disable-next-line no-unused-vars
  const { mcwTab: mt, mcwTabBar: mtb, ...rest } = plugin.components;
  plugin.components = rest;

  pluginSanityCheck(__dirname, plugin);
});
