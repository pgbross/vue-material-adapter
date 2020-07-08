import { MDCTextFieldCharacterCounterFoundation } from '@material/textfield/character-counter/foundation';
import {
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  ref,
} from '@vue/composition-api';

export default {
  name: 'mcw-character-counter',
  setup() {
    const uiState = reactive({ textContent: '' });

    const foundation = ref({});

    const adapter = {
      setContent: content => {
        uiState.textContent = content;
      },
    };

    onMounted(() => {
      foundation.value = new MDCTextFieldCharacterCounterFoundation(adapter);

      foundation.value.init();
    });

    onBeforeUnmount(() => {
      foundation.value.destroy();
    });

    return { ...toRefs(uiState), foundation };
  },
};
