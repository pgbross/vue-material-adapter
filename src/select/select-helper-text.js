import { MDCSelectHelperTextFoundation } from '@material/select/helper-text/foundation.js';
import { h, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';

export default {
  name: 'select-helper-text',
  props: {
    helptextPersistent: Boolean,
    helptextValidation: Boolean,
    helptext: String,
  },
  setup(props, { expose, attrs }) {
    const uiState = reactive({
      classes: {
        'mdc-select-helper-text': true,
        'mdc-select-helper-text--validation-msg-persistent':
          props.helptextPersistent,
        'mdc-select-helper-text--validation-msg': props.helptextValidation,
      },
      attrs: {},
      myHelptext: props.helptext,
    });

    const foundation = ref();

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),

      removeClass: className => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      hasClass: className => Boolean(uiState.classes[className]),

      getAttr: attribute => uiState.attrs[attribute] ?? attrs[attribute],

      setAttr: (attribute, value) =>
        (uiState.attrs = { ...uiState.attrs, [attribute]: value }),

      removeAttr: attribute => {
        const { [attribute]: removed, ...rest } = uiState.attrs;
        uiState.attrs = rest;
      },

      setContent: content => {
        uiState.myHelptext = content;
      },
    };

    watch(
      () => props.helptextPersistent,
      nv => foundation.value.setPersistent(nv),
    );

    watch(
      () => props.helptextValidation,
      nv => foundation.value.setValidation(nv),
    );

    watch(
      () => props.helptext,
      nv => (uiState.myHelptext = nv),
    );

    onMounted(() => {
      foundation.value = new MDCSelectHelperTextFoundation(adapter);
      foundation.value.init();
    });

    onBeforeUnmount(() => {
      foundation.value.destroy();
    });

    expose({ foundation });

    return () => {
      return h('p', { class: uiState.classes, ...uiState.attrs }, [
        uiState.myHelptext,
      ]);
    };
  },
};
