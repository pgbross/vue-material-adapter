import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const uiState = reactive({
      picked: 'dog',
    });

    return { ...toRefs(uiState) };
  },
};
