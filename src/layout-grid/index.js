import { BasePlugin } from '../base/index.js';
import mcwLayoutCell from './layout-cell.js';
import mcwLayoutGrid from './layout-grid.js';
import mcwLayoutInnerGrid from './layout-inner-grid.js';

export { default as mcwLayoutCell } from './layout-cell.js';
export { default as mcwLayoutGrid } from './layout-grid.js';
export { default as mcwLayoutInnerGrid } from './layout-inner-grid.js';

export default BasePlugin({
  mcwLayoutGrid,
  mcwLayoutCell,
  mcwLayoutInnerGrid,
});
