// import just the components needed

import button from '@mcwv/button/index.js';
// import checkbox from '@mcwv/checkbox/index.js';
// import dataTable from '@mcwv/data-table/index.js';
// import dialog from '@mcwv/dialog/index.js';
// import drawer from '@mcwv/drawer/index.js';
// import fab from '@mcwv/fab/index.js';
// import floatingLabel from '@mcwv/floating-label/index.js';
// import iconButton from '@mcwv/icon-button/index.js';
// import layoutGrid from '@mcwv/layout-grid/index.js';
// import lineRipple from '@mcwv/line-ripple/index.js';
// import list from '@mcwv/list/index.js';
// import materialIcon from '@mcwv/material-icon/index.js';
// import menu from '@mcwv/menu/index.js';
// import select from '@mcwv/select/index.js';
import snackbar from '@mcwv/snackbar/index.js';
// import tabs from '@mcwv/tabs/index.js';
// import textfield from '@mcwv/textfield/index.js';
// import topAppBar from '@mcwv/top-app-bar/index.js';

export default {
  install(vm) {
    vm.use(button);
    // vm.use(checkbox);
    // vm.use(dataTable);
    // vm.use(dialog);
    // vm.use(drawer);
    // vm.use(fab);
    // vm.use(floatingLabel);
    // vm.use(iconButton);
    // vm.use(layoutGrid);
    // vm.use(lineRipple);
    // vm.use(list);
    // vm.use(materialIcon);
    // vm.use(menu);
    // vm.use(select);
    vm.use(snackbar);
    // vm.use(tabs);
    // vm.use(textfield);
    // vm.use(topAppBar);
  },
};
