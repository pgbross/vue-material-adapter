import { BasePlugin } from '@mcwv/base';
import mdcFixedAdjust from './mdc-fixed-adjust.js';
import mdcTopAppBarAction from './mdc-top-app-bar-action.js';
import mdcTopAppBar from './mdc-top-app-bar.js';

export { mdcTopAppBar, mdcTopAppBarAction, mdcFixedAdjust };

export default BasePlugin({
  mdcTopAppBar,
  mdcTopAppBarAction,
  mdcFixedAdjust,
});
