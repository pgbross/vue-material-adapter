import { BasePlugin } from '~/base/index.js';
import mcwLayoutCell from './layout-cell.js';
import mcwLayoutGrid from './layout-grid.js';
import mcwLayoutInnerGrid from './layout-inner-grid.js';

export { mcwLayoutGrid, mcwLayoutCell, mcwLayoutInnerGrid };

export default BasePlugin({
  mcwLayoutGrid,
  mcwLayoutCell,
  mcwLayoutInnerGrid,
});
