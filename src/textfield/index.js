import { BasePlugin } from '../base/index.js';
import { mcwFloatingLabel } from '../floating-label/index.js';
import { mcwLineRipple } from '../line-ripple/index.js';
import { mcwNotchedOutline } from '../notched-outline/index.js';
import mcwCharacterCounter from './character-counter.vue';
import mcwTextfieldHelperText from './textfield-helper-text.vue';
import mcwTextfieldIcon from './textfield-icon.vue';
import mcwTextfield from './textfield.vue';

export { default as mcwCharacterCounter } from './character-counter.vue';
export { default as mcwTextfieldHelperText } from './textfield-helper-text.vue';
export { default as mcwTextfieldIcon } from './textfield-icon.vue';
export { default as mcwTextfield } from './textfield.vue';

export default BasePlugin({
  mcwTextfield,
  mcwTextfieldIcon,
  mcwCharacterCounter,
  mcwTextfieldHelperText,
  mcwLineRipple,
  mcwNotchedOutline,
  mcwFloatingLabel,
});
