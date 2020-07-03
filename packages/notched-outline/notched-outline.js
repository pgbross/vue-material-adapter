import { MDCNotchedOutlineFoundation } from '@material/notched-outline/foundation';
import {
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRefs,
} from '@vue/composition-api';
import { mcwFloatingLabel } from '../floating-label/index.js';

export default {
  name: 'mcw-notched-outline',
  components: { mcwFloatingLabel },

  setup(props, { slots }) {
    const labelEl = ref(null);

    const uiState = reactive({
      outlinedClasses: { 'mdc-notched-outline': true },
      notchStyles: {},
    });

    let foundation;

    const {
      OUTLINE_UPGRADED,
      NO_LABEL,
    } = MDCNotchedOutlineFoundation.cssClasses;

    const adapter = {
      addClass: className =>
        (uiState.outlinedClasses = {
          ...uiState.outlinedClasses,
          [className]: true,
        }),

      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.outlinedClasses;
        uiState.outlinedClasses = rest;
      },

      setNotchWidthProperty: width =>
        (uiState.notchStyles = { ...uiState.notchStyles, width: `${width}px` }),

      removeNotchWidthProperty: () => {
        // eslint-disable-next-line no-unused-vars
        const { width: removed, ...rest } = uiState.notchStyles;
        uiState.notchStyles = rest;
      },
    };

    const notch = notchWidth => {
      foundation.notch(notchWidth);
    };

    const closeNotch = () => {
      foundation.closeNotch();
    };

    const float = shouldFloat => {
      labelEl.value?.float(shouldFloat);
    };

    const shake = shouldShake => {
      labelEl.value?.shake(shouldShake);
    };

    const getWidth = () => {
      return labelEl.value?.getWidth();
    };

    onMounted(() => {
      foundation = new MDCNotchedOutlineFoundation(adapter);
      foundation.init();

      const key = slots.default ? OUTLINE_UPGRADED : NO_LABEL;

      uiState.outlinedClasses = { ...uiState.outlinedClasses, [key]: true };
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      labelEl,
      getWidth,
      shake,
      float,
      closeNotch,
      notch,
    };
  },
};
