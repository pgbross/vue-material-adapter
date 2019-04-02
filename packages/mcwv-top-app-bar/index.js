import { BasePlugin } from '@mcwv/base';
import mdcFixedAdjust from './mdc-fixed-adjust.vue';
import mdcTopAppBarAction from './mdc-top-app-bar-action.vue';
import mdcTopAppBar from './mdc-top-app-bar.vue';

export { mdcTopAppBar, mdcTopAppBarAction, mdcFixedAdjust };

export default BasePlugin({
  mdcTopAppBar,
  mdcTopAppBarAction,
  mdcFixedAdjust,
});
