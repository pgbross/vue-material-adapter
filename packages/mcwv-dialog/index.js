import { BasePlugin } from '@mcwv/base';
import mdcDialog from './mdc-dialog.js';
import mdcDialogTitle from './mdc-dialog-title.js';
import mdcDialogFooter from './mdc-dialog-footer.js';
import mdcDialogButton from './mdc-dialog-button.js';
import mdcDialogContent from './mdc-dialog-content.js';

export {
  mdcDialog,
  mdcDialogTitle,
  mdcDialogFooter,
  mdcDialogButton,
  mdcDialogContent,
};

export default BasePlugin({
  mdcDialog,
  mdcDialogTitle,
  mdcDialogFooter,
  mdcDialogButton,
  mdcDialogContent,
});
