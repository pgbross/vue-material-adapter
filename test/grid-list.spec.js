import { mount, createLocalVue, checkValidMdcAdapter } from './unit-test';
import plugin from '../packages/mcwv-grid-list/index.js';
import { mdcGridList, mdcGridTile } from '../packages/mcwv-grid-list/index.js';

const Spec = {
  template: `  <div>
<mdc-grid-list with-support-text interactive>
  <mdc-grid-tile
    ratio="16x9"
    src="img.png"
    title="Title"
    support-text="Text"
  >
  </mdc-grid-tile>
</mdc-grid-list>
</div>`,
};
describe(__dirname, () => {
  const localVue = createLocalVue();
  localVue.use(plugin);
  const spec = mount(Spec, { localVue });

  describe('mdcGridList', () => {
    const wrapper = spec.find(mdcGridList);
    checkValidMdcAdapter(wrapper.vm);
  });

  describe('mdcGridTile', () => {
    const wrapper = spec.find(mdcGridTile);
    checkValidMdcAdapter(wrapper.vm);
  });
});
