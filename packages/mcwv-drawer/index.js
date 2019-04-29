import { BasePlugin } from '@mcwv/base';
import { mcwDrawer } from './mcw-drawer.js';
import mcwDrawerDivider from './mdc-drawer-divider.js';
import mcwDrawerHeader from './mdc-drawer-header.js';
import mcwDrawerItem from './mdc-drawer-item.js';
import mcwDrawerList from './mdc-drawer-list.js';

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
