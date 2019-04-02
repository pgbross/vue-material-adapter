import { BasePlugin } from '@mcwv/base';
import mdcListDivider from './mdc-list-divider.vue';
import mdcListGroupDivider from './mdc-list-group-divider.vue';
import mdcListGroupHeader from './mdc-list-group-header.vue';
import mdcListGroup from './mdc-list-group.vue';
import mdcListItem from './mdc-list-item.vue';
import mdcList from './mdc-list.vue';

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
