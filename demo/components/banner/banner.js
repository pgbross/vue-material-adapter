import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const uiState = reactive({
      showBanner: false,
      reason: '',
      action: '',
    });

    const onClosing = ({ reason }) => (uiState.reason = reason);
    const onAction = ({ action }) => (uiState.action = action);
    return { ...toRefs(uiState), onClosing, onAction };
  },
};
