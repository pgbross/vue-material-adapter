import { onMounted, reactive, toRefs } from 'vue';

export default {
  setup() {
    const uiState = reactive({ isOpen: true });

    onMounted(() => {
      setInterval(() => {
        uiState.isOpen = !uiState.isOpen;
      }, 5000);
    });
    return { ...toRefs(uiState) };
  },
};
