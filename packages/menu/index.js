import { BasePlugin } from '~/base/index.js';
import mcwMenuAnchor from './menu-anchor.js';
import mcwMenuItem from './menu-item.js';
import mcwMenuSurface from './menu-surface.vue';
import mcwMenu from './menu.vue';
export { mcwMenu, mcwMenuItem, mcwMenuAnchor, mcwMenuSurface };

export default BasePlugin({
  mcwMenu,
  mcwMenuSurface,
  mcwMenuItem,
  mcwMenuAnchor,
});
