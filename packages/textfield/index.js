import { BasePlugin } from '~/base/index.js';
import mcwCharacterCounter from './character-counter.vue';
import mcwTextfieldHelperText from './textfield-helper-text.vue';
import mcwTextfieldIcon from './textfield-icon.vue';
import mcwTextfield from './textfield.vue';

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
