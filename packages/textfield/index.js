import { BasePlugin } from '~/base/index.js';
import mcwTextfield from './textfield.vue';
import mcwTextfieldIcon from './textfield-icon.vue';
import mcwCharacterCounter from './character-counter.vue';

export { mcwTextfield, mcwTextfieldIcon, mcwCharacterCounter };

export default BasePlugin({
  mcwTextfield,
  mcwTextfieldIcon,
  mcwCharacterCounter,
});
