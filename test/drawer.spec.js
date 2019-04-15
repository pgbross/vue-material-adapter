import {
  mount,
  createLocalVue,
  checkValidMdcAdapter,
  checkValidFunctionalComponent,
} from './unit-test';
import plugin, {
  mdcDrawer,
  mdcDrawerHeader,
  mdcDrawerList,
  mdcDrawerItem,
  mdcDrawerDivider,
} from '../packages/mcwv-drawer/index.js';
const Spec = {
  template: `<mdc-drawer>
  <mdc-drawer-header slot="header">
  </mdc-drawer-header>
  <mdc-drawer-list dense>
  <mdc-drawer-item to="/">Home</mdc-drawer-item>
  <mdc-drawer-divider/>
  </mdc-drawer-list>
  </mdc-drawer>`,
  name: 'spec',
};

describe(__dirname, () => {
  const localVue = createLocalVue();
  localVue.use(plugin);
  const spec = mount(Spec, { localVue, stubs: { 'mdc-drawer': mdcDrawer } });

  describe('mdcDrawer', () => {
    const drawer = spec.find(mdcDrawer);

    checkValidMdcAdapter(drawer.vm);

    describe('mdcDrawerHeader', () => {
      const { isFunctionalComponent } = drawer.find(mdcDrawerHeader);
      isFunctionalComponent && checkValidFunctionalComponent(mdcDrawerHeader);
    });

    describe('mdcDrawerList', () => {
      const { isFunctionalComponent } = drawer.find(mdcDrawerList);
      isFunctionalComponent && checkValidFunctionalComponent(mdcDrawerList);
    });

    describe('mdcDrawerItem', () => {
      const { isFunctionalComponent } = drawer.find(mdcDrawerItem);
      isFunctionalComponent && checkValidFunctionalComponent(mdcDrawerItem);
    });

    describe('mdcDrawerDivider', () => {
      const { isFunctionalComponent } = drawer.find(mdcDrawerDivider);
      isFunctionalComponent && checkValidFunctionalComponent(mdcDrawerDivider);
    });
  });
});
