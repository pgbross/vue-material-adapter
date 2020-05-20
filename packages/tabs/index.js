import { BasePlugin } from '~/base/index.js';
import mcwTabBar from './tab-bar.js';
import mcwTabIndicator from './tab-indicator.js';
import mcwTabRipple from './tab-ripple.js';
import mcwTabScroller from './tab-scroller.js';
import mcwTab from './tab.js';
export { mcwTab, mcwTabBar, mcwTabScroller, mcwTabIndicator, mcwTabRipple };

export default BasePlugin({
  mcwTab,
  mcwTabBar,
  mcwTabScroller,
  mcwTabIndicator,
  mcwTabRipple,
});
