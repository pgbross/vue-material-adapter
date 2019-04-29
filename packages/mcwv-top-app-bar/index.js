import { BasePlugin } from '@mcwv/base';
import { mcwTopAppBar } from './mcw-top-app-bar.js';
import mcwFixedAdjust from './mdc-fixed-adjust.js';
import mcwTopAppBarAction from './mdc-top-app-bar-action.js';
import mcwTopAppBarIcon from './mdc-top-app-bar-icon.js';
import mcwTopAppBarRow from './mdc-top-app-bar-row.js';
import mcwTopAppBarSection from './mdc-top-app-bar-section.js';
import mcwTopAppBarTitle from './mdc-top-app-bar-title.js';

export {
  mcwTopAppBar,
  mcwTopAppBarAction,
  mcwFixedAdjust,
  mcwTopAppBarIcon,
  mcwTopAppBarRow,
  mcwTopAppBarSection,
  mcwTopAppBarTitle,
};

export default BasePlugin({
  mcwTopAppBar,
  mcwTopAppBarAction,
  mcwFixedAdjust,
  mcwTopAppBarIcon,
  mcwTopAppBarRow,
  mcwTopAppBarSection,
  mcwTopAppBarTitle,
});
