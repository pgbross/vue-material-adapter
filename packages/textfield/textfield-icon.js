import { MDCTextFieldIconFoundation } from '@material/textfield/icon/foundation.js';
import { emitCustomEvent } from '~/base/index.js';

export default {
  name: 'textfield-icon',
  functional: true,
  props: {
    disabled: Boolean,
    leading: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },

  mounted() {
    this.foundation = new MDCTextFieldIconFoundation(
      Object.assign({
        getAttr: attr => this.$el.getAttribute(attr),
        setAttr: (attr, value) => this.$el.setAttribute(attr, value),
        removeAttr: attr => this.$el.removeAttribute(attr),
        setContent: content => {
          this.$el.textContent = content;
        },
        registerInteractionHandler: (evtType, handler) =>
          this.$el.addEventListener(evtType, handler),
        deregisterInteractionHandler: (evtType, handler) =>
          this.$el.removeEventListener(evtType, handler),
        notifyIconAction: () => {
          this.$emit('click');
          emitCustomEvent(
            this.$el,
            MDCTextFieldIconFoundation.strings.ICON_EVENT,
            {},
            true /* shouldBubble  */,
          );
        },
      }),
    );

    this.foundation.init();
  },

  beforeDestroy() {
    this.foundation.destroy();
  },
  render(createElement, context) {
    const node = context.children[0];
    const {
      props: { leading },
    } = context;
    node.data.class = `mdc-text-field__icon mdc-text-field__icon--${
      leading ? 'leading' : 'trailing'
    }`;
    return node;
  },
};
