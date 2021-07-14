import { MDCTextFieldIconFoundation } from '@material/textfield/icon/foundation.js';
import { inject, onBeforeUnmount, onMounted, reactive, toRefs } from 'vue';
import { emitCustomEvent } from '../base/index.js';

const { strings } = MDCTextFieldIconFoundation;

export default {
  name: 'textfield-icon',
  props: {
    disabled: Boolean,
    trailing: Boolean,
    trailingIcon: Boolean,
  },
  setup(props, { emit }) {
    const uiState = reactive({
      classes: {
        'mdc-text-field__icon': 1,
        [`mdc-text-field__icon--${
          props.trailing || props.trailingIcon ? 'trailing' : 'leading'
        }`]: 1,
      },
      rootAttrs: {
        tabindex: props.disabled ? '-1' : '0',
        role: props.disabled ? void 0 : 'button',
      },
      root: undefined,
      foundation: {},
    });

    const addIconFoundation = inject('addIconFoundation');

    const adapter = {
      getAttr: attribute => uiState.rootAttrs[attribute],
      setAttr: (attribute, value) =>
        (uiState.rootAttrs = { ...uiState.rootAttrs, [attribute]: value }),
      removeAttr: attribute => {
        // eslint-disable-next-line no-unused-vars
        const { [attribute]: removed, ...rest } = uiState.rootAttrs;
        uiState.rootAttrs = rest;
      },
      setContent: (/* content */) => {
        // set content is done through vue in templates
        // so we dont expose a method to set content
        // thus this is a no-op
      },
      registerInteractionHandler: (eventType, handler) =>
        uiState.root.addEventListener(eventType, handler),
      deregisterInteractionHandler: (eventType, handler) =>
        uiState.root.removeEventListener(eventType, handler),
      notifyIconAction: () => {
        emitCustomEvent(
          uiState.root,
          strings.ICON_EVENT,
          {},
          true /* shouldBubble  */,
        );
        emit('click');
      },
    };

    onMounted(() => {
      uiState.foundation = new MDCTextFieldIconFoundation(adapter);
      uiState.foundation.init();

      addIconFoundation({
        foundation: uiState.foundation,
        trailing: props.trailing || props.trailingIcon,
      });
    });

    onBeforeUnmount(() => {
      uiState.foundation.destroy();
    });

    return { ...toRefs(uiState) };
  },
};
