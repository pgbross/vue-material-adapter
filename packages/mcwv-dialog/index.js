import { BasePlugin } from '@mcwv/base';
import { mcwDialog } from './mcw-dialog.js';
import mcwDialogButton from './mdc-dialog-button.js';
import mcwDialogContent from './mdc-dialog-content.js';
import mcwDialogFooter from './mdc-dialog-footer.js';
import mcwDialogTitle from './mdc-dialog-title.js';

export {
  mcwDialog,
  mcwDialogTitle,
  mcwDialogFooter,
  mcwDialogButton,
  mcwDialogContent,
};

export default BasePlugin({
  mcwDialog,
  mcwDialogTitle,
  mcwDialogFooter,
  mcwDialogButton,
  mcwDialogContent,
});
