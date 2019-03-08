import * as base from '@mcwv/base/index';
import * as ripple from '@mcwv/ripple/index';
import * as button from '@mcwv/button/index';
import * as card from '@mcwv/card/index';
import * as checkbox from '@mcwv/checkbox/index';
import * as chips from '@mcwv/chips/index';
import * as dialog from '@mcwv/dialog/index';
import * as drawer from '@mcwv/drawer/index';
import * as elevation from '@mcwv/elevation/index';
import * as fab from '@mcwv/fab/index';
import * as floatingLabel from '@mcwv/floating-label/index';
import * as gridList from '@mcwv/grid-list/index';
import * as icon from '@mcwv/icon/index';
import * as iconButton from '@mcwv/icon-button/index';
import * as layoutGrid from '@mcwv/layout-grid/index';
import * as lineRipple from '@mcwv/line-ripple/index';
import * as linearProgress from '@mcwv/linear-progress/index';
import * as list from '@mcwv/list/index';
import * as materialIcon from '@mcwv/material-icon/index';
import * as menu from '@mcwv/menu/index';
import * as notchedOutline from '@mcwv/notched-outline/index';
import * as radio from '@mcwv/radio/index';
import * as select from '@mcwv/select/index';
import * as slider from '@mcwv/slider/index';
import * as snackbar from '@mcwv/snackbar/index';
import * as switchControl from '@mcwv/switch/index';
import * as tabs from '@mcwv/tabs/index';
import * as textfield from '@mcwv/textfield/index';
import * as theme from '@mcwv/theme/index';
// import * as toolbar from '@mcwv/toolbar/index';
import * as topAppBar from '@mcwv/top-app-bar/index';
import * as typography from '@mcwv/typography/index';

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
