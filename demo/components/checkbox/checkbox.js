import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const uiState = reactive({
      checked: false,
      indeterminate: false,
      disabled: false,
      checkedSolo: false,
      ids: [],
    });

    const onIndeterminate = () => {
      uiState.indeterminate = true;
    };

    const onIds = nv => {
      console.log(nv);
      uiState.ids = nv;
    };

    return { ...toRefs(uiState), onIds, onIndeterminate };
  },
};
