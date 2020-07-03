import { BasePlugin } from '~/base/index.js';
import mcwChipCheckmark from './chip-checkmark.vue';
import mcwChipSet from './chip-set.vue';
import mcwChip from './chip.vue';
import mcwChipTrailingAction from './trailing-action.vue';

export { mcwChip, mcwChipSet, mcwChipCheckmark, mcwChipTrailingAction };

export default BasePlugin({
  mcwChip,
  mcwChipSet,
  mcwChipCheckmark,
  mcwChipTrailingAction,
});
