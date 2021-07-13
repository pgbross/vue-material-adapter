import { BasePlugin } from '../base/index.js';
import mcwListItem from './list-item.vue';
import mcwList from './list.vue';

export { mcwList, mcwListItem };

export default BasePlugin({
  mcwList,
  mcwListItem,
});
