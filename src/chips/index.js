import { BasePlugin } from '../base/index.js';
import mcwChipAction from './chip-action.vue';
import mcwChipCheckmark from './chip-checkmark.vue';
import mcwChipSet from './chip-set.vue';
import mcwChip from './chip.vue';

export { mcwChip, mcwChipSet, mcwChipCheckmark };

export default BasePlugin({
  mcwChip,
  mcwChipSet,
  mcwChipCheckmark,
  mcwChipAction,
});
