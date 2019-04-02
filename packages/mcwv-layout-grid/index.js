import { BasePlugin } from '@mcwv/base';
import mdcLayoutCell from './mdc-layout-cell.vue';
import mdcLayoutGrid from './mdc-layout-grid.vue';
import mdcLayoutInnerGrid from './mdc-layout-inner-grid.vue';

export { mdcLayoutGrid, mdcLayoutCell, mdcLayoutInnerGrid };

export default BasePlugin({
  mdcLayoutGrid,
  mdcLayoutCell,
  mdcLayoutInnerGrid,
});
