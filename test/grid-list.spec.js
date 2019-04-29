import { mount, createLocalVue, checkValidMcwAdapter } from './unit-test';
import plugin from '../packages/mcwv-grid-list/index.js';
import { mcwGridList, mcwGridTile } from '../packages/mcwv-grid-list/index.js';

const Spec = {
  template: `  <div>
<mcw-grid-list with-support-text interactive>
  <mcw-grid-tile
    ratio="16x9"
    src="img.png"
    title="Title"
    support-text="Text"
  >
  </mcw-grid-tile>
</mcw-grid-list>
</div>`,
};
describe(__dirname, () => {
  const localVue = createLocalVue();
  localVue.use(plugin);
  const spec = mount(Spec, { localVue });

  describe('mcwGridList', () => {
    const wrapper = spec.find(mcwGridList);
    checkValidMcwAdapter(wrapper.vm);
  });

  describe('mcwGridTile', () => {
    const wrapper = spec.find(mcwGridTile);
    checkValidMcwAdapter(wrapper.vm);
  });
});
