import { BasePlugin } from '../base'
import mdcDrawer from './mdc-drawer.vue'
import mdcDrawerHeader from './mdc-drawer-header.vue'
import mdcDrawerList from './mdc-drawer-list.vue'
import mdcDrawerItem from './mdc-drawer-item.vue'
import mdcDrawerDivider from './mdc-drawer-divider.vue'

export {
  mdcDrawer,
  mdcDrawerHeader,
  mdcDrawerList,
  mdcDrawerItem,
  mdcDrawerDivider
}

export default BasePlugin({
  mdcDrawer,
  mdcDrawerHeader,
  mdcDrawerList,
  mdcDrawerItem,
  mdcDrawerDivider
})
