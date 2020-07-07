import { BasePlugin } from '~/base/index.js';
import mcwList from './list.vue';
import mcwListItem from './list-item.vue';

export { mcwList, mcwListItem };

export default BasePlugin({
  mcwList,
  mcwListItem,
});
