import { BasePlugin } from '@mcwv/base';
import mdcMenuAnchor from './mdc-menu-anchor.js';
import mdcMenuItem from './mdc-menu-item.js';
import mdcMenuSurface from './mdc-menu-surface.js';
import mdcMenu from './mdc-menu.js';

export { mdcMenu, mdcMenuItem, mdcMenuAnchor, mdcMenuSurface };

export default BasePlugin({
  mdcMenu,
  mdcMenuSurface,
  mdcMenuItem,
  mdcMenuAnchor,
});
