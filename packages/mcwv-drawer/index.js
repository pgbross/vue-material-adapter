import { BasePlugin } from '@mcwv/base';
import mdcDrawerDivider from './mdc-drawer-divider.vue';
import mdcDrawerHeader from './mdc-drawer-header.vue';
import mdcDrawerItem from './mdc-drawer-item.vue';
import mdcDrawerList from './mdc-drawer-list.vue';
import mdcDrawer from './mdc-drawer.vue';

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
