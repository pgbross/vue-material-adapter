import { BasePlugin } from '../base/index.js';
import mcwChipAction from './chip-action.vue';
import mcwChipCheckmark from './chip-checkmark.vue';
import mcwChipSet from './chip-set.vue';
import mcwChip from './chip.vue';

export { default as mcwChipCheckmark } from './chip-checkmark.vue';
export { default as mcwChipSet } from './chip-set.vue';
export { default as mcwChip } from './chip.vue';

export default BasePlugin({
  mcwChip,
  mcwChipSet,
  mcwChipCheckmark,
  mcwChipAction,
});
