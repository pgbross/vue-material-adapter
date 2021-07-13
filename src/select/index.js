import { BasePlugin } from '../base/index.js';
import { mcwFloatingLabel } from '../floating-label/index.js';
import { mcwLineRipple } from '../line-ripple/index.js';
import { mcwNotchedOutline } from '../notched-outline/index.js';
import mcwSelect from './select.vue';

export { mcwSelect };

export default BasePlugin({
  mcwSelect,
  mcwNotchedOutline,
  mcwLineRipple,
  mcwFloatingLabel,
});
