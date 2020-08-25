import { MDCNotchedOutlineFoundation } from '@material/notched-outline/foundation';
import {
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
} from '@vue/composition-api';
import { mcwFloatingLabel } from '../floating-label/index.js';

const { cssClasses } = MDCNotchedOutlineFoundation;

export default {
  name: 'mcw-notched-outline',
  components: { mcwFloatingLabel },

  setup(props, { slots }) {
    const uiState = reactive({
      outlinedClasses: { 'mdc-notched-outline': true },
      notchStyles: {},
      labelEl: null,
    });

    let foundation;

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
      uiState.labelEl?.float(shouldFloat);
    };

    const shake = shouldShake => {
      uiState.labelEl?.shake(shouldShake);
    };

    const getWidth = () => {
      return uiState.labelEl?.getWidth();
    };

    onMounted(() => {
      foundation = new MDCNotchedOutlineFoundation(adapter);
      foundation.init();

      const key = slots.default
        ? cssClasses.OUTLINE_UPGRADED
        : cssClasses.NO_LABEL;

      uiState.outlinedClasses = { ...uiState.outlinedClasses, [key]: true };
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      getWidth,
      shake,
      float,
      closeNotch,
      notch,
    };
  },
};
