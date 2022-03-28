import { BasePlugin } from '../base/index.js';
import mcwIconButton from './icon-button.vue';
import mcwIconToggle from './icon-toggle.js';

export { default as mcwIconButton } from './icon-button.vue';
export { default as mcwIconToggle } from './icon-toggle.js';

export default BasePlugin({
  mcwIconButton,
  mcwIconToggle,
});
