// import just the components needed

import { button, snackbar } from 'vue-material-adapter';

export default {
  install(vm) {
    vm.use(button);
    vm.use(snackbar);
  },
};
