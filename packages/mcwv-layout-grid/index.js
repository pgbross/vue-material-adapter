import { BasePlugin } from '@mcwv/base';
import mcwLayoutCell from './mdc-layout-cell.js';
import mcwLayoutGrid from './mdc-layout-grid.js';
import mcwLayoutInnerGrid from './mdc-layout-inner-grid.js';

export { mcwLayoutGrid, mcwLayoutCell, mcwLayoutInnerGrid };

export default BasePlugin({
  mcwLayoutGrid,
  mcwLayoutCell,
  mcwLayoutInnerGrid,
});
