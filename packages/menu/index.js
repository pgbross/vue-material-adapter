import { BasePlugin } from '~/base/index.js';
import mcwMenu from './menu.js';
import mcwMenuAnchor from './menu-anchor.js';
import mcwMenuItem from './menu-item.js';
import mcwMenuSurface from './menu-surface.js';
export { mcwMenu, mcwMenuItem, mcwMenuAnchor, mcwMenuSurface };

export default BasePlugin({
  mcwMenu,
  mcwMenuSurface,
  mcwMenuItem,
  mcwMenuAnchor,
});
