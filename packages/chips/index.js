import { BasePlugin } from '~/base/index.js';
import mcwChipCheckmark from './chip-checkmark.js';
import mcwChipSet from './chip-set.js';
import mcwChip from './chip.js';

export { mcwChip, mcwChipSet, mcwChipCheckmark };

export default BasePlugin({
  mcwChip,
  mcwChipSet,
  mcwChipCheckmark,
});
