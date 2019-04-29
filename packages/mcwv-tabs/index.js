import { BasePlugin } from '@mcwv/base';
import mcwTabBar from './mdc-tab-bar.js';
import mcwTabIndicator from './mdc-tab-indicator.js';
import mcwTabRipple from './mdc-tab-ripple.js';
import mcwTabScroller from './mdc-tab-scroller.js';
import mcwTab from './mdc-tab.js';
export { mcwTab, mcwTabBar, mcwTabScroller, mcwTabIndicator, mcwTabRipple };

export default BasePlugin({
  mcwTab,
  mcwTabBar,
  mcwTabScroller,
  mcwTabIndicator,
  mcwTabRipple,
});
