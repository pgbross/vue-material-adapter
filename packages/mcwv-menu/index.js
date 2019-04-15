import { BasePlugin } from '@mcwv/base';
import mdcMenuAnchor from './mdc-menu-anchor.js';
import mdcMenuDivider from './mdc-menu-divider.js';
import mdcMenuItem from './mdc-menu-item.js';
import mdcMenuSurface from './mdc-menu-surface.js';
import mdcMenu from './mdc-menu.vue';

export { mdcMenu, mdcMenuItem, mdcMenuDivider, mdcMenuAnchor, mdcMenuSurface };

export default BasePlugin({
  mdcMenu,
  mdcMenuSurface,
  mdcMenuItem,
  mdcMenuDivider,
  mdcMenuAnchor,
});
