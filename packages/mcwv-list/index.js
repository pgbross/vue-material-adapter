import { BasePlugin } from '@mcwv/base';
import { mcwList } from './mcw-list.js';
import mcwListDivider from './mdc-list-divider.js';
import mcwListGroupSubHeader from './mdc-list-group-sub-header.js';
import mcwListGroup from './mdc-list-group.js';
import mcwListItemGraphic from './mdc-list-item-graphic.js';
import mcwListItemMeta from './mdc-list-item-meta.js';
import mcwListItemText from './mdc-list-item-text.js';
import mcwListItem from './mdc-list-item.js';

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
