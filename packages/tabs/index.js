import { BasePlugin } from '~/base/index.js';
import mcwTabBar from './tab-bar.vue';
import mcwTabIndicator from './tab-indicator.vue';
import mcwTabScroller from './tab-scroller.vue';
import mcwTab from './tab.vue';
export { mcwTab, mcwTabBar, mcwTabScroller, mcwTabIndicator };

export default BasePlugin({
  mcwTab,
  mcwTabBar,
  mcwTabScroller,
  mcwTabIndicator,
});
