import { BasePlugin } from '../base/index.js';
import mcwListItem from './list-item.vue';
import mcwList from './list.js';

export { default as mcwListItem } from './list-item.vue';
export { default as mcwList } from './list.js';

export default BasePlugin({
  mcwList,
  mcwListItem,
});
