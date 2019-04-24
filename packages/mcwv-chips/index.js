import { BasePlugin } from '@mcwv/base';
import mdcChipCheckmark from './mdc-chip-checkmark.js';
import mdcChipSet from './mdc-chip-set.js';
import mdcChip from './mdc-chip.js';

export { mdcChip, mdcChipSet, mdcChipCheckmark };

export default BasePlugin({
  mdcChip,
  mdcChipSet,
  mdcChipCheckmark,
});
