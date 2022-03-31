import { MDCFloatingLabelFoundation } from '@material/floating-label/foundation.js';
import { h, onBeforeUnmount, onMounted, reactive, ref } from 'vue';

export default {
  name: 'mcw-floating-label',

  props: { required: { type: Boolean } },
  setup(props, { slots, expose }) {
    const uiState = reactive({
      labelClasses: {
        'mdc-floating-label': true,
        'mdc-floating-label--required': props.required,
      },
    });

    let foundation;
    const root = ref();

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

      getWidth: () => root.value.scrollWidth,

      registerInteractionHandler: (eventType, handler) => {
        root.value.addEventListener(eventType, handler);
      },

      deregisterInteractionHandler: (eventType, handler) => {
        root.value.removeEventListener(eventType, handler);
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

    expose({ getWidth, float, shake, setRequired });
    return () => {
      return h('span', { ref: root, class: uiState.labelClasses }, [
        slots.default(),
      ]);
    };
  },
};
