import { BasePlugin } from '@mcwv/base';
import mcwGridList from './grid-list.js';
import mcwGridTile from './grid-tile.js';

export { mcwGridList, mcwGridTile };

export default BasePlugin({
  mcwGridList,
  mcwGridTile,
});
