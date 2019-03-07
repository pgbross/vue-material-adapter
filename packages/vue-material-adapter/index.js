import * as base from '@vma/base/index';
import * as ripple from '@vma/ripple/index';
import * as button from '@vma/button/index';
import * as card from '@vma/card/index';
import * as checkbox from '@vma/checkbox/index';
import * as chips from '@vma/chips/index';
import * as dialog from '@vma/dialog/index';
import * as drawer from '@vma/drawer/index';
import * as elevation from '@vma/elevation/index';
import * as fab from '@vma/fab/index';
import * as floatingLabel from '@vma/floating-label/index';
import * as gridList from '@vma/grid-list/index';
import * as icon from '@vma/icon/index';
import * as iconButton from '@vma/icon-button/index';
import * as layoutGrid from '@vma/layout-grid/index';
import * as lineRipple from '@vma/line-ripple/index';
import * as linearProgress from '@vma/linear-progress/index';
import * as list from '@vma/list/index';
import * as materialIcon from '@vma/material-icon/index';
import * as menu from '@vma/menu/index';
import * as notchedOutline from '@vma/notched-outline/index';
import * as radio from '@vma/radio/index';
import * as select from '@vma/select/index';
import * as slider from '@vma/slider/index';
import * as snackbar from '@vma/snackbar/index';
import * as switchControl from '@vma/switch/index';
import * as tabs from '@vma/tabs/index';
import * as textfield from '@vma/textfield/index';
import * as theme from '@vma/theme/index';
// import * as toolbar from '@vma/toolbar/index';
import * as topAppBar from '@vma/top-app-bar/index';
import * as typography from '@vma/typography/index';

export default {
  install(vm) {
    vm.use(button['default']);
    vm.use(card['default']);
    vm.use(checkbox['default']);
    vm.use(chips['default']);
    vm.use(dialog['default']);
    vm.use(drawer['default']);
    vm.use(elevation['default']);
    vm.use(fab['default']);
    vm.use(floatingLabel['default']);
    vm.use(gridList['default']);
    vm.use(icon['default']);
    vm.use(iconButton['default']);
    vm.use(layoutGrid['default']);
    vm.use(lineRipple['default']);
    vm.use(linearProgress['default']);
    vm.use(list['default']);
    vm.use(materialIcon['default']);
    vm.use(menu['default']);
    vm.use(notchedOutline['default']);
    vm.use(radio['default']);
    vm.use(select['default']);
    vm.use(slider['default']);
    vm.use(snackbar['default']);
    vm.use(switchControl['default']);
    vm.use(tabs['default']);
    vm.use(textfield['default']);
    vm.use(topAppBar['default']);
    vm.use(typography['default']);
  },
};

export {
  base,
  button,
  ripple,
  card,
  checkbox,
  chips,
  dialog,
  drawer,
  elevation,
  fab,
  floatingLabel,
  gridList,
  icon,
  iconButton,
  layoutGrid,
  lineRipple,
  linearProgress,
  list,
  materialIcon,
  menu,
  notchedOutline,
  radio,
  select,
  slider,
  snackbar,
  switchControl,
  tabs,
  textfield,
  theme,
  // toolbar,
  topAppBar,
  typography,
};
