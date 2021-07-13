import { BasePlugin } from '../base/index.js';
import mcwDialogButton from './dialog-button.js';
import mcwDialogContent from './dialog-content.js';
import mcwDialogFooter from './dialog-footer.js';
import mcwDialogTitle from './dialog-title.js';
import mcwDialog from './dialog.vue';

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
