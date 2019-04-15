import { BasePlugin } from '@mcwv/base';
import mdcLayoutCell from './mdc-layout-cell.js';
import mdcLayoutGrid from './mdc-layout-grid.js';
import mdcLayoutInnerGrid from './mdc-layout-inner-grid.js';

export { mdcLayoutGrid, mdcLayoutCell, mdcLayoutInnerGrid };

export default BasePlugin({
  mdcLayoutGrid,
  mdcLayoutCell,
  mdcLayoutInnerGrid,
});
