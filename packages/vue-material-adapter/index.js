import * as base from '~/base/index.js';
import button from '~/button/index.js';
import card from '~/card/index.js';
import circularProgress from '~/circular-progress/index.js';
import checkbox from '~/checkbox/index.js';
import chips from '~/chips/index.js';
import dataTable from '~/data-table/index.js';
import dialog from '~/dialog/index.js';
import drawer from '~/drawer/index.js';
import fab from '~/fab/index.js';
import floatingLabel from '~/floating-label/index.js';
import iconButton from '~/icon-button/index.js';
import layoutGrid from '~/layout-grid/index.js';
import lineRipple from '~/line-ripple/index.js';
import linearProgress from '~/linear-progress/index.js';
import list from '~/list/index.js';
import materialIcon from '~/material-icon/index.js';
import menu from '~/menu/index.js';
import notchedOutline from '~/notched-outline/index.js';
import radio from '~/radio/index.js';
import select from '~/select/index.js';
import slider from '~/slider/index.js';
import snackbar from '~/snackbar/index.js';
import switchControl from '~/switch/index.js';
import tabs from '~/tabs/index.js';
import textfield from '~/textfield/index.js';
import topAppBar from '~/top-app-bar/index.js';
import typography from '~/typography/index.js';

export default {
  install(vm) {
    vm.use(button);
    vm.use(card);
    vm.use(circularProgress);
    vm.use(checkbox);
    vm.use(chips);
    vm.use(dataTable);
    vm.use(dialog);
    vm.use(drawer);
    vm.use(fab);
    vm.use(floatingLabel);
    vm.use(iconButton);
    vm.use(layoutGrid);
    vm.use(lineRipple);
    vm.use(linearProgress);
    vm.use(list);
    vm.use(materialIcon);
    vm.use(menu);
    vm.use(notchedOutline);
    vm.use(radio);
    vm.use(select);
    vm.use(slider);
    vm.use(snackbar);
    vm.use(switchControl);
    vm.use(tabs);
    vm.use(textfield);
    vm.use(topAppBar);
    vm.use(typography);
  },
};

export {
  base,
  button,
  card,
  circularProgress,
  checkbox,
  chips,
  dataTable,
  dialog,
  drawer,
  fab,
  floatingLabel,
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
  topAppBar,
  typography,
};
