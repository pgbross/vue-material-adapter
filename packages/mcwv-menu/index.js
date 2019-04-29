import { BasePlugin } from '@mcwv/base';
import { mcwMenu } from './mcw-menu.js';
import mcwMenuAnchor from './mdc-menu-anchor.js';
import mcwMenuItem from './mdc-menu-item.js';
import mcwMenuSurface from './mdc-menu-surface.js';
export { mcwMenu, mcwMenuItem, mcwMenuAnchor, mcwMenuSurface };

export default BasePlugin({
  mcwMenu,
  mcwMenuSurface,
  mcwMenuItem,
  mcwMenuAnchor,
});
