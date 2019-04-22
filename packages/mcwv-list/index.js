import { BasePlugin } from '@mcwv/base';
import mdcListDivider from './mdc-list-divider.js';
import mdcListGroupSubHeader from './mdc-list-group-sub-header.js';
import mdcListGroup from './mdc-list-group.js';
import mdcListItem from './mdc-list-item.js';
import mdcListItemText from './mdc-list-item-text.js';
import mdcList from './mdc-list.js';
import mdcListItemGraphic from './mdc-list-item-graphic.js';
import mdcListItemMeta from './mdc-list-item-meta.js';

export {
  mdcList,
  mdcListItem,
  mdcListDivider,
  mdcListGroup,
  mdcListGroupSubHeader,
  mdcListItemText,
  mdcListItemGraphic,
  mdcListItemMeta,
};

export default BasePlugin({
  mdcList,
  mdcListItem,
  mdcListDivider,
  mdcListGroup,
  mdcListGroupSubHeader,
  mdcListItemText,
  mdcListItemGraphic,
  mdcListItemMeta,
});
