import { BasePlugin } from '@mcwv/base';
import mdcTabBar from './mdc-tab-bar.vue';
import mdcTabIndicator from './mdc-tab-indicator.vue';
import mdcTabRipple from './mdc-tab-ripple.vue';
import mdcTabScroller from './mdc-tab-scroller.vue';
import mdcTab from './mdc-tab.vue';
export { mdcTab, mdcTabBar, mdcTabScroller, mdcTabIndicator, mdcTabRipple };

export default BasePlugin({
  mdcTab,
  mdcTabBar,
  mdcTabScroller,
  mdcTabIndicator,
  mdcTabRipple,
});
