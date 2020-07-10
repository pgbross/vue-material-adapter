import { MDCFloatingLabelFoundation } from '@material/floating-label/foundation';
import {
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
} from '@vue/composition-api';

export default {
  name: 'mcw-floating-label',

  props: { required: { type: Boolean } },
  setup(props) {
    const uiState = reactive({
      labelClasses: {
        'mdc-floating-label': true,
        'mdc-floating-label--required': props.required,
      },
      root: null,
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

      getWidth: () => uiState.root.scrollWidth,
      registerInteractionHandler: (evtType, handler) => {
        uiState.root.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: (evtType, handler) => {
        uiState.root.removeEventListener(evtType, handler);
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
