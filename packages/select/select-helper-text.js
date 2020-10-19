import { MDCSelectHelperTextFoundation } from '@material/select/helper-text/foundation.js';
import { h, onBeforeUnmount, onMounted, reactive, watch } from 'vue';

export default {
  name: 'select-helper-text',
  props: {
    helptextPersistent: Boolean,
    helptextValidation: Boolean,
    helptext: String,
  },
  setup(props, { slots }) {
    const uiState = reactive({
      classes: {
        'mdc-select-helper-text': true,
        'mdc-select-helper-text--persistent': props.helptextPersistent,
        'mdc-select-helper-text--validation-msg': props.helptextValidation,
      },
      attrs: { 'aria-hidden': 'true' },
      myHelptext: props.helptext,
    });

    let foundation;

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      hasClass: className => Boolean(uiState.classes[className]),

      setAttr: (attr, value) =>
        (uiState.attrs = { ...uiState.attrs, [attr]: value }),

      removeAttr: attr => {
        // eslint-disable-next-line no-unused-vars
        const { [attr]: removed, ...rest } = uiState.attrs;
        uiState.attrs = rest;
      },

      setContent: content => {
        uiState.myHelptext = content;
      },
    };

    watch(
      () => props.helptextPersistent,
      nv => foundation.setPersistent(nv),
    );

    watch(
      () => props.helptextValidation,
      nv => foundation.setValidation(nv),
    );

    watch(
      () => props.helptext,
      nv => (uiState.myHelptext = nv),
    );

    onMounted(() => {
      foundation = new MDCSelectHelperTextFoundation(adapter);
      foundation.init();
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return () => {
      return h(
        'p',
        {
          class: uiState.classes,
          attrs: uiState.attrs,
        },
        [uiState.myHelptext],
      );
    };
  },
};
