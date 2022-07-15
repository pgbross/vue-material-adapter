import { BasePlugin } from '../base/index.js';
import mcwDialogButton from './dialog-button.js';
import mcwDialogContent from './dialog-content.js';
import mcwDialogFooter from './dialog-footer.js';
import mcwDialogTitle from './dialog-title.js';
import mcwDialog from './dialog.vue';

export { default as mcwDialogButton } from './dialog-button.js';
export { default as mcwDialogContent } from './dialog-content.js';
export { default as mcwDialogFooter } from './dialog-footer.js';
export { default as mcwDialogTitle } from './dialog-title.js';
export { default as mcwDialog } from './dialog.vue';

export default BasePlugin({
  mcwDialog,
  mcwDialogTitle,
  mcwDialogFooter,
  mcwDialogButton,
  mcwDialogContent,
});
