import { MDCNotchedOutlineFoundation } from '@material/notched-outline/foundation.js';
import { h, onBeforeUnmount, onMounted, reactive, toRef } from 'vue';
import { mcwFloatingLabel } from '../floating-label/index.js';

const { cssClasses } = MDCNotchedOutlineFoundation;

export default {
  name: 'mcw-notched-outline',
  components: { mcwFloatingLabel },

  setup(props, { slots, expose }) {
    const uiState = reactive({
      outlinedClasses: { 'mdc-notched-outline': true },
      notchStyles: {},
      labelEl: undefined,
    });

    let foundation;

    const adapter = {
      addClass: className =>
        (uiState.outlinedClasses = {
          ...uiState.outlinedClasses,
          [className]: true,
        }),

      removeClass: className => {
        const { [className]: removed, ...rest } = uiState.outlinedClasses;
        uiState.outlinedClasses = rest;
      },

      setNotchWidthProperty: width =>
        (uiState.notchStyles = { ...uiState.notchStyles, width: `${width}px` }),

      removeNotchWidthProperty: () => {
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

    expose({ getWidth, shake, float, closeNotch, notch });
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

    const labelReference = toRef(uiState, 'labelEl');

    return () => {
      const floatingLabel =
        slots.default &&
        h(mcwFloatingLabel, { ref: labelReference }, () => [slots.default()]);

      return h('span', { class: uiState.outlinedClasses }, [
        h('span', { class: 'mdc-notched-outline__leading' }),
        h(
          'span',
          { class: 'mdc-notched-outline__notch', style: uiState.notchStyles },
          [floatingLabel],
        ),
        h('span', { class: 'mdc-notched-outline__trailing' }),
      ]);
    };
  },
};
