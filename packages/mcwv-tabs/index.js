import { BasePlugin } from '@mcwv/base';
import mdcTabBar from './mdc-tab-bar.js';
import mdcTabIndicator from './mdc-tab-indicator.js';
import mdcTabRipple from './mdc-tab-ripple.js';
import mdcTabScroller from './mdc-tab-scroller.js';
import mdcTab from './mdc-tab.js';
export { mdcTab, mdcTabBar, mdcTabScroller, mdcTabIndicator, mdcTabRipple };

export default BasePlugin({
  mdcTab,
  mdcTabBar,
  mdcTabScroller,
  mdcTabIndicator,
  mdcTabRipple,
});
