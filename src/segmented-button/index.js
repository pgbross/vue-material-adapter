import { BasePlugin } from '../base/index.js';
import mcwSegment from './segment.vue';
import mcwSegmentedButton from './segmented-button.vue';

export { mcwSegmentedButton, mcwSegment };

export default BasePlugin({
  mcwSegmentedButton,
  mcwSegment,
});
