import { BasePlugin } from '@mcwv/base';
import mdcToolbarIcon from './mdc-toolbar-icon.vue';
import mdcToolbarMenuIcon from './mdc-toolbar-menu-icon.vue';
import mdcToolbarRow from './mdc-toolbar-row.vue';
import mdcToolbarSection from './mdc-toolbar-section.vue';
import mdcToolbarTitle from './mdc-toolbar-title.vue';
import mdcToolbar from './mdc-toolbar.vue';

export {
  mdcToolbar,
  mdcToolbarRow,
  mdcToolbarSection,
  mdcToolbarMenuIcon,
  mdcToolbarTitle,
  mdcToolbarIcon,
};

export default BasePlugin({
  mdcToolbar,
  mdcToolbarRow,
  mdcToolbarSection,
  mdcToolbarMenuIcon,
  mdcToolbarTitle,
  mdcToolbarIcon,
});
