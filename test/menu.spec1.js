import { createLocalVue, mount, checkValidMcwAdapter } from './unit-test';
import plugin, { mcwMenu, mcwMenuSurface } from '../packages/menu/index.js';
import pluginList from '../packages/list/index.js';

const Spec = {
  template: `<mcw-menu></mcw-menu>`,
};

describe(__dirname, () => {
  const localVue = createLocalVue();
  localVue.use(plugin);
  localVue.use(pluginList);
  const spec = mount(Spec, { localVue });

  describe('mcwMenu', () => {
    const wrapper = spec.findComponent(mcwMenu);
    checkValidMcwAdapter(wrapper.vm);
  });

  describe('mcwMenuSurface', () => {
    const wrapper = spec.findComponent(mcwMenuSurface);
    checkValidMcwAdapter(wrapper.vm);
  });
});
