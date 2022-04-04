import { BasePlugin } from '../base/index.js';
import { mcwList } from '../list/index.js';
import mcwMenuAnchor from './menu-anchor.js';
import mcwMenuItem from './menu-item.js';
import mcwMenuSurface from './menu-surface.js';
import mcwMenu from './menu.vue';

export { default as mcwMenuAnchor } from './menu-anchor.js';
export { default as mcwMenuItem } from './menu-item.js';
export { default as mcwMenuSurface } from './menu-surface.js';
export { default as mcwMenu } from './menu.vue';

export default BasePlugin({
  mcwMenu,
  mcwMenuSurface,
  mcwMenuItem,
  mcwMenuAnchor,
  mcwList,
});
