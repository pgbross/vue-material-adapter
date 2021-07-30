import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const uiState = reactive({ checked: false });

    return { ...toRefs(uiState) };
  },
};
