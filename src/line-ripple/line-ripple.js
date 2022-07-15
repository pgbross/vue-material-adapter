import { MDCLineRippleFoundation } from '@material/line-ripple/foundation.js';
import { h, onBeforeUnmount, onMounted, reactive } from 'vue';

export default {
  name: 'mcw-line-ripple',
  setup(props, { expose }) {
    const uiState = reactive({
      lineClasses: { 'mdc-line-ripple': 1 },
      lineStyles: {},
    });

    // note: do not call the property 'foundation' as the tests will then
    // expect all methods to be implemented, and we handle transitionend locally.
    let foundation_;

    const adapter = {
      addClass: className =>
        (uiState.lineClasses = {
          ...uiState.lineClasses,
          [className]: true,
        }),

      removeClass: className => {
        const { [className]: removed, ...rest } = uiState.lineClasses;
        uiState.lineClasses = rest;
      },

      hasClass: className => {
        return Boolean(uiState.lineClasses[className]);
      },
      setStyle: (name, value) =>
        (uiState.lineStyles = {
          ...uiState.lineStyles,
          [name]: value,
        }),
    };

    expose({
      activate: () => foundation_.activate(),
      deactivate: () => foundation_.deactivate(),
      setRippleCenter: xCoordinate => foundation_.setRippleCenter(xCoordinate),
    });

    onMounted(() => {
      foundation_ = new MDCLineRippleFoundation(adapter);
      foundation_.init();
    });

    onBeforeUnmount(() => {
      foundation_.destroy();
    });

    return () => {
      return h('span', {
        class: uiState.lineClasses,
        style: uiState.lineStyles,
        ontransitionend: event_ => foundation_.handleTransitionEnd(event_),
      });
    };
  },
};
