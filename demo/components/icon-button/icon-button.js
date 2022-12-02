import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const uiState = reactive({ isOn: false, disabled: false });

    return { ...toRefs(uiState) };
  },
};
