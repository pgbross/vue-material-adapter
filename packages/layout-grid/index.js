import { BasePlugin } from '~/base/index.js';
import mcwLayoutCell from './layout-cell.vue';
import mcwLayoutGrid from './layout-grid.vue';
import mcwLayoutInnerGrid from './layout-inner-grid.vue';

export { mcwLayoutGrid, mcwLayoutCell, mcwLayoutInnerGrid };

export default BasePlugin({
  mcwLayoutGrid,
  mcwLayoutCell,
  mcwLayoutInnerGrid,
});
