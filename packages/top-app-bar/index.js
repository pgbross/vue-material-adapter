import { BasePlugin } from '~/base/index.js';
import mcwTopAppBar from './top-app-bar.js';
import mcwFixedAdjust from './fixed-adjust.js';
import mcwTopAppBarIcon from './top-app-bar-icon.js';
import mcwTopAppBarRow from './top-app-bar-row.js';
import mcwTopAppBarSection from './top-app-bar-section.js';
import mcwTopAppBarTitle from './top-app-bar-title.js';

export {
  mcwTopAppBar,
  mcwFixedAdjust,
  mcwTopAppBarIcon,
  mcwTopAppBarRow,
  mcwTopAppBarSection,
  mcwTopAppBarTitle,
};

export default BasePlugin({
  mcwTopAppBar,
  mcwFixedAdjust,
  mcwTopAppBarIcon,
  mcwTopAppBarRow,
  mcwTopAppBarSection,
  mcwTopAppBarTitle,
});
