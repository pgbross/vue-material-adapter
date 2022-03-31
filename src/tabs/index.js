import { BasePlugin } from '../base/index.js';
import mcwTabBar from './tab-bar.js';
import mcwTabIndicator from './tab-indicator.js';
import mcwTabScroller from './tab-scroller.js';
import mcwTab from './tab.vue';
export { default as mcwTabBar } from './tab-bar.js';
export { default as mcwTabIndicator } from './tab-indicator.js';
export { default as mcwTabScroller } from './tab-scroller.js';
export { default as mcwTab } from './tab.vue';

export default BasePlugin({
  mcwTab,
  mcwTabBar,
  mcwTabScroller,
  mcwTabIndicator,
});
