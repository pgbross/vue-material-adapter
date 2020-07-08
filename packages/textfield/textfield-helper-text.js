import { MDCTextFieldHelperTextFoundation } from '@material/textfield/helper-text/foundation';
import {
  h,
  onBeforeUnmount,
  onMounted,
  reactive,
  watch,
} from '@vue/composition-api';

export default {
  name: 'textfield-helper-text',
  props: {
    persistent: Boolean,
    validation: Boolean,
    helptext: String,
  },
  setup(props, { emit, slots }) {
    const uiState = reactive({
      classes: {
        'mdc-text-field-helper-text': true,
        'mdc-text-field-helper-text--persistent': props.persistent,
        'mdc-text-field-helper-text--validation-msg': props.validation,
      },
      rootAttrs: {},
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
        (uiState.rootAttrs = { ...uiState.rootAttrs, [attr]: value }),

      removeAttr: attr => {
        // eslint-disable-next-line no-unused-vars
        const { [attr]: removed, ...rest } = uiState.rootAttrs;
        uiState.rootAttrs = rest;
      },

      setContent: (/* content */) => {
        // help text get's updated from {{helptext}}
        // cf. this.$el.textContent = content
      },
    };

    watch(
      () => props.persistent,
      nv => foundation.setPersistent(nv),
    );

    watch(
      () => props.validation,
      nv => foundation.setValidation(nv),
    );

    onMounted(() => {
      foundation = new MDCTextFieldHelperTextFoundation(adapter);

      foundation.init();
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return () => {
      if (slots.default) {
        return slots.default();
      }
      return h('div', { class: 'mdc-text-field-helper-line' }, [
        h(
          'div',
          { class: uiState.classes, attrs: uiState.rootAttrs },
          props.helptext,
        ),
      ]);
    };
  },
};
