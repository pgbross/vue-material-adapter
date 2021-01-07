import { MDCTextFieldCharacterCounterFoundation } from '@material/textfield/character-counter/foundation';
import { onBeforeUnmount, onMounted, reactive, toRefs } from 'vue';

export default {
  name: 'mcw-character-counter',
  setup() {
    const uiState = reactive({ textContent: '', foundation: {} });

    const adapter = {
      setContent: content => {
        uiState.textContent = content;
      },
    };

    onMounted(() => {
      uiState.foundation = new MDCTextFieldCharacterCounterFoundation(adapter);
      uiState.foundation.init();
    });

    onBeforeUnmount(() => {
      uiState.foundation.destroy();
    });

    return { ...toRefs(uiState) };
  },
};
