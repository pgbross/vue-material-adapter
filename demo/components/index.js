//
// vue PlugIn
//
import VueMDCButton from './button';
import VueMDCCard from './card';
import VueMDCCheckbox from './checkbox';
import VueMDCChips from './chips';
import VueMDCDialog from './dialog';
import VueMDCDrawer from './drawer';
import VueMDCFab from './fab';
import VueMDCGridList from './grid-list';
import VueMDCIconButton from './icon-button';
import VueMDCLayoutGrid from './layout-grid';
import VueMDCLinearProgress from './linear-progress';
import VueMDCList from './list';
import VueMDCMaterialIcon from './material-icon';
import VueMDCMenu from './menu';
import VueMDCRadio from './radio';
import VueMDCSelect from './select';
import VueMDCSlider from './slider';
import VueMDCSnackbar from './snackbar';
import VueMDCSwitch from './switch';
import VueMDCTabs from './tabs';
import VueMDCTextfield from './textfield';
import VueMDCTopAppBar from './top-app-bar';
import VueMDCTypography from './typography';

export default {
  version: '__VERSION__',
  install(vm) {
    vm.use(VueMDCButton);
    vm.use(VueMDCCard);
    vm.use(VueMDCCheckbox);
    vm.use(VueMDCChips);
    vm.use(VueMDCDialog);
    vm.use(VueMDCDrawer);
    vm.use(VueMDCFab);
    vm.use(VueMDCGridList);
    vm.use(VueMDCIconButton);
    vm.use(VueMDCLayoutGrid);
    vm.use(VueMDCLinearProgress);
    vm.use(VueMDCList);
    vm.use(VueMDCMenu);
    vm.use(VueMDCMaterialIcon);
    vm.use(VueMDCRadio);
    vm.use(VueMDCSelect);
    vm.use(VueMDCSlider);
    vm.use(VueMDCSnackbar);
    vm.use(VueMDCSwitch);
    vm.use(VueMDCTabs);
    vm.use(VueMDCTextfield);
    vm.use(VueMDCTopAppBar);
    vm.use(VueMDCTypography);
  },
};
