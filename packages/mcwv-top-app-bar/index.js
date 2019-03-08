import { BasePlugin } from '@mcwv/base';
import mdcTopAppBar from './mdc-top-app-bar.vue';
import mdcTopAppBarAction from './mdc-top-app-bar-action.vue';
import mdcFixedAdjust from './mdc-fixed-adjust.vue';

export { mdcTopAppBar, mdcTopAppBarAction, mdcFixedAdjust };

export default BasePlugin({
  mdcTopAppBar,
  mdcTopAppBarAction,
  mdcFixedAdjust,
});
