import { BasePlugin } from '~/base/index.js';
import mcwList from './list.js';
import mcwListDivider from './list-divider.js';
import mcwListGroupSubHeader from './list-group-sub-header.js';
import mcwListGroup from './list-group.js';

export { mcwList, mcwListDivider, mcwListGroup, mcwListGroupSubHeader };

export default BasePlugin({
  mcwList,
  mcwListDivider,
  mcwListGroup,
  mcwListGroupSubHeader,
});
