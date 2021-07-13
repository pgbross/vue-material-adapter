import { MDCTextFieldHelperTextFoundation } from '@material/textfield/helper-text/foundation.js';
import { onBeforeUnmount, onMounted, reactive, toRefs, watch } from 'vue';

export default {
  name: 'mcw-textfield-helper-text',
  props: {
    persistent: Boolean,
    validation: Boolean,
    helptext: String,
  },
  setup(props) {
    const uiState = reactive({
      classes: {
        'mdc-text-field-helper-text': true,
        'mdc-text-field-helper-text--persistent': props.persistent,
        'mdc-text-field-helper-text--validation-msg': props.validation,
      },
      rootAttrs: { 'aria-hidden': true },
      helpertext: props.helptext,
      foundation: {},
    });

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: className => Boolean(uiState.classes[className]),

      getAttr: attribute => uiState.rootAttrs[attribute],

      setAttr: (attribute, value) =>
        (uiState.rootAttrs = { ...uiState.rootAttrs, [attribute]: value }),

      removeAttr: attribute => {
        // eslint-disable-next-line no-unused-vars
        const { [attribute]: removed, ...rest } = uiState.rootAttrs;
        uiState.rootAttrs = rest;
      },

      setContent: content => (uiState.helpertext = content),
    };

    watch(
      () => props.persistent,
      nv => uiState.foundation.setPersistent(nv),
    );

    watch(
      () => props.validation,
      nv => uiState.foundation.setValidation(nv),
    );

    onMounted(() => {
      uiState.foundation = new MDCTextFieldHelperTextFoundation(adapter);
      uiState.foundation.init();
    });

    onBeforeUnmount(() => {
      uiState.foundation.destroy();
    });

    return { ...toRefs(uiState) };
  },
};
