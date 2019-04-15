import { createLocalVue, mount, checkValidMdcAdapter } from './unit-test';
import plugin, {
  mdcMenu,
  mdcMenuSurface,
} from '../packages/mcwv-menu/index.js';
import pluginList from '../packages/mcwv-list/index.js';

const Spec = {
  template: `<mdc-menu></mdc-menu>`,
};

describe(__dirname, () => {
  const localVue = createLocalVue();
  localVue.use(plugin);
  localVue.use(pluginList);
  const spec = mount(Spec, { localVue });

  describe('mdcMenu', () => {
    const wrapper = spec.find(mdcMenu);
    checkValidMdcAdapter(wrapper.vm);
  });

  describe('mdcMenuSurface', () => {
    const wrapper = spec.find(mdcMenuSurface);
    checkValidMdcAdapter(wrapper.vm);
  });
});
