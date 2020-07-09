import { BasePlugin } from '~/base/index.js';
import mcwTextfield from './textfield.vue';
import mcwTextfieldIcon from './textfield-icon.vue';
import mcwCharacterCounter from './character-counter.vue';
import mcwTextfieldHelperText from './textfield-helper-text.vue';

export {
  mcwTextfield,
  mcwTextfieldIcon,
  mcwCharacterCounter,
  mcwTextfieldHelperText,
};

export default BasePlugin({
  mcwTextfield,
  mcwTextfieldIcon,
  mcwCharacterCounter,
  mcwTextfieldHelperText,
});
