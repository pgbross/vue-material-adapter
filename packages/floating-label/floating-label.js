import { MDCFloatingLabelFoundation } from '@material/floating-label/foundation';
import {
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRefs,
} from '@vue/composition-api';

export default {
  name: 'mcw-floating-label',

  props: { required: { type: Boolean } },
  setup(props) {
    const root = ref(null);

    const uiState = reactive({
      labelClasses: {
        'mdc-floating-label': true,
        'mdc-floating-label--required': props.required,
      },
    });

    let foundation;

    const adapter = {
      addClass: className =>
        (uiState.labelClasses = {
          ...uiState.labelClasses,
          [className]: true,
        }),

      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.labelClasses;
        uiState.labelClasses = rest;
      },

      getWidth: () => root.value.scrollWidth,
      registerInteractionHandler: (evtType, handler) => {
        root.value.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: (evtType, handler) => {
        root.value.removeEventListener(evtType, handler);
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
      root,
      getWidth,
      float,
      shake,
      setRequired,
    };
  },
};
