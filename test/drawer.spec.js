import {
  mount,
  createLocalVue,
  checkValidMcwAdapter,
  checkValidFunctionalComponent,
} from './unit-test';
import plugin, {
  mcwDrawer,
  mcwDrawerHeader,
  mcwDrawerList,
  mcwDrawerItem,
  mcwDrawerDivider,
} from '../packages/mcwv-drawer/index.js';
const Spec = {
  template: `<mcw-drawer>
  <mcw-drawer-header slot="header">
  </mcw-drawer-header>
  <mcw-drawer-list dense>
  <mcw-drawer-item to="/">Home</mcw-drawer-item>
  <mcw-drawer-divider/>
  </mcw-drawer-list>
  </mcw-drawer>`,
  name: 'spec',
};

describe(__dirname, () => {
  const localVue = createLocalVue();
  localVue.use(plugin);
  const spec = mount(Spec, { localVue, stubs: { 'mcw-drawer': mcwDrawer } });

  describe('mcwDrawer', () => {
    const drawer = spec.find(mcwDrawer);

    checkValidMcwAdapter(drawer.vm);

    describe('mcwDrawerHeader', () => {
      const { isFunctionalComponent } = drawer.find(mcwDrawerHeader);
      isFunctionalComponent && checkValidFunctionalComponent(mcwDrawerHeader);
    });

    describe('mcwDrawerList', () => {
      const { isFunctionalComponent } = drawer.find(mcwDrawerList);
      isFunctionalComponent && checkValidFunctionalComponent(mcwDrawerList);
    });

    describe('mcwDrawerItem', () => {
      const { isFunctionalComponent } = drawer.find(mcwDrawerItem);
      isFunctionalComponent && checkValidFunctionalComponent(mcwDrawerItem);
    });

    describe('mcwDrawerDivider', () => {
      const { isFunctionalComponent } = drawer.find(mcwDrawerDivider);
      isFunctionalComponent && checkValidFunctionalComponent(mcwDrawerDivider);
    });
  });
});
