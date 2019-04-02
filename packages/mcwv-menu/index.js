import { BasePlugin } from '@mcwv/base';
import mdcMenuAnchor from './mdc-menu-anchor.vue';
import mdcMenuDivider from './mdc-menu-divider.vue';
import mdcMenuItem from './mdc-menu-item.vue';
import mdcMenuSurface from './mdc-menu-surface.vue';
import mdcMenu from './mdc-menu.vue';

export { mdcMenu, mdcMenuItem, mdcMenuDivider, mdcMenuAnchor };

export default BasePlugin({
  mdcMenu,
  mdcMenuSurface,
  mdcMenuItem,
  mdcMenuDivider,
  mdcMenuAnchor,
});
