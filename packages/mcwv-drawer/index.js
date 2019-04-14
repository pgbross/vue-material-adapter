import { BasePlugin } from '@mcwv/base';
import mdcDrawerDivider from './mdc-drawer-divider.js';
import mdcDrawerHeader from './mdc-drawer-header.js';
import mdcDrawerItem from './mdc-drawer-item.js';
import mdcDrawerList from './mdc-drawer-list.js';
import mdcDrawer from './mdc-drawer.js';

export {
  mdcDrawer,
  mdcDrawerHeader,
  mdcDrawerList,
  mdcDrawerItem,
  mdcDrawerDivider,
};

export default BasePlugin({
  mdcDrawer,
  mdcDrawerHeader,
  mdcDrawerList,
  mdcDrawerItem,
  mdcDrawerDivider,
});
