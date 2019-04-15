import { BasePlugin } from '@mcwv/base';
import mdcListDivider from './mdc-list-divider.js';
import mdcListGroupDivider from './mdc-list-group-divider.js';
import mdcListGroupHeader from './mdc-list-group-header.js';
import mdcListGroup from './mdc-list-group.js';
import mdcListItem from './mdc-list-item.js';
import mdcList from './mdc-list.js';

export {
  mdcList,
  mdcListItem,
  mdcListDivider,
  mdcListGroup,
  mdcListGroupHeader,
  mdcListGroupDivider,
};

export default BasePlugin({
  mdcList,
  mdcListItem,
  mdcListDivider,
  mdcListGroup,
  mdcListGroupHeader,
  mdcListGroupDivider,
});
