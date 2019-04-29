import { BasePlugin } from '@mcwv/base';
import { mcwDrawer } from './drawer.js';
import mcwDrawerDivider from './drawer-divider.js';
import mcwDrawerHeader from './drawer-header.js';
import mcwDrawerItem from './drawer-item.js';
import mcwDrawerList from './drawer-list.js';

export {
  mcwDrawer,
  mcwDrawerHeader,
  mcwDrawerList,
  mcwDrawerItem,
  mcwDrawerDivider,
};

export default BasePlugin({
  mcwDrawer,
  mcwDrawerHeader,
  mcwDrawerList,
  mcwDrawerItem,
  mcwDrawerDivider,
});
