import { BasePlugin } from '@mcwv/base';
import mdcFixedAdjust from './mdc-fixed-adjust.js';
import mdcTopAppBarAction from './mdc-top-app-bar-action.js';
import mdcTopAppBar from './mdc-top-app-bar.js';
import mdcTopAppBarIcon from './mdc-top-app-bar-icon.js';
import mdcTopAppBarRow from './mdc-top-app-bar-row.js';
import mdcTopAppBarSection from './mdc-top-app-bar-section.js';
import mdcTopAppBarTitle from './mdc-top-app-bar-title.js';

export {
  mdcTopAppBar,
  mdcTopAppBarAction,
  mdcFixedAdjust,
  mdcTopAppBarIcon,
  mdcTopAppBarRow,
  mdcTopAppBarSection,
  mdcTopAppBarTitle,
};

export default BasePlugin({
  mdcTopAppBar,
  mdcTopAppBarAction,
  mdcFixedAdjust,
  mdcTopAppBarIcon,
  mdcTopAppBarRow,
  mdcTopAppBarSection,
  mdcTopAppBarTitle,
});
