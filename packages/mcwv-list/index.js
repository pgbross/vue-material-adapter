import { BasePlugin } from '@mcwv/base';
import mcwList from './list.js';
import mcwListDivider from './list-divider.js';
import mcwListGroupSubHeader from './list-group-sub-header.js';
import mcwListGroup from './list-group.js';
import mcwListItemGraphic from './list-item-graphic.js';
import mcwListItemMeta from './list-item-meta.js';
import mcwListItemText from './list-item-text.js';
import mcwListItem from './list-item.js';

export {
  mcwList,
  mcwListItem,
  mcwListDivider,
  mcwListGroup,
  mcwListGroupSubHeader,
  mcwListItemText,
  mcwListItemGraphic,
  mcwListItemMeta,
};

export default BasePlugin({
  mcwList,
  mcwListItem,
  mcwListDivider,
  mcwListGroup,
  mcwListGroupSubHeader,
  mcwListItemText,
  mcwListItemGraphic,
  mcwListItemMeta,
});
