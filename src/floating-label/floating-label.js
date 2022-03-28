import { MDCFloatingLabelFoundation } from '@material/floating-label/foundation.js';
import { onBeforeUnmount, onMounted, reactive, toRefs } from 'vue';

export default {
  name: 'mcw-floating-label',

  props: { required: { type: Boolean } },
  setup(props) {
    const uiState = reactive({
      labelClasses: {
        'mdc-floating-label': true,
        'mdc-floating-label--required': props.required,
      },
      root: undefined,
    });

    let foundation;

    const adapter = {
      addClass: className =>
        (uiState.labelClasses = {
          ...uiState.labelClasses,
          [className]: true,
        }),

      removeClass: className => {
        const { [className]: removed, ...rest } = uiState.labelClasses;
        uiState.labelClasses = rest;
      },

      getWidth: () => uiState.root.scrollWidth,
      registerInteractionHandler: (eventType, handler) => {
        uiState.root.addEventListener(eventType, handler);
      },
      deregisterInteractionHandler: (eventType, handler) => {
        uiState.root.removeEventListener(eventType, handler);
      },
    };

    const getWidth = () => {
      return foundation.getWidth();
    };

    const setRequired = isRequired => {
      return foundation.setRequired(isRequired);
    };

    const float = shouldFloat => {
      foundation.float(shouldFloat);
    };

    const shake = shouldShake => {
      foundation.shake(shouldShake);
    };

    onMounted(() => {
      foundation = new MDCFloatingLabelFoundation(adapter);
      foundation.init();
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return {
      ...toRefs(uiState),
      getWidth,
      float,
      shake,
      setRequired,
    };
  },
};
