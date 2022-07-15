import { BasePlugin } from '../base/index.js';
import mcwSegment from './segment.vue';
import mcwSegmentedButton from './segmented-button.js';

export { default as mcwSegment } from './segment.vue';
export { default as mcwSegmentedButton } from './segmented-button.js';

export default BasePlugin({
  mcwSegmentedButton,
  mcwSegment,
});
