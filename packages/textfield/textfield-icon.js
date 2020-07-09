import { MDCTextFieldIconFoundation } from '@material/textfield/icon/foundation.js';
import {
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
} from '@vue/composition-api';
import { emitCustomEvent } from '~/base/index.js';

export default {
  name: 'textfield-icon',
  props: {
    disabled: Boolean,
    leading: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  setup(props, { emit }) {
    const uiState = reactive({
      classes: {
        'mdc-text-field__icon': 1,
        [`mdc-text-field__icon--${props.leading ? 'leading' : 'trailing'}`]: 1,
      },
      rootAttrs: {},
      textContent: null,
      root: null,
      foundation: {},
    });

    const adapter = {
      getAttr: attr => uiState.rootAttrs[attr],
      setAttr: (attr, value) =>
        (uiState.rootAttrs = { ...uiState.rootAttrs, [attr]: value }),
      removeAttr: attr => {
        // eslint-disable-next-line no-unused-vars
        const { [attr]: removed, ...rest } = uiState.rootAttrs;
        uiState.rootAttrs = rest;
      },
      setContent: content => {
        uiState.root.textContent = content;
      },
      registerInteractionHandler: (evtType, handler) =>
        uiState.root.addEventListener(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) =>
        uiState.root.removeEventListener(evtType, handler),
      notifyIconAction: () => {
        emitCustomEvent(
          uiState.root,
          MDCTextFieldIconFoundation.strings.ICON_EVENT,
          {},
          true /* shouldBubble  */,
        );
      },
    };

    onMounted(() => {
      uiState.foundation = new MDCTextFieldIconFoundation(adapter);

      uiState.foundation.init();
    });

    onBeforeUnmount(() => {
      uiState.foundation.destroy();
    });

    return { ...toRefs(uiState) };
  },
};
