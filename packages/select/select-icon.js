import { MDCSelectIconFoundation } from '@material/select/icon/foundation.js';
import { emitCustomEvent } from '~/base/index.js';

export default {
  name: 'select-icon',
  props: {
    icon: String,
  },
  data() {
    return {
      classes: {
        'material-icons': true,
        'mdc-select__icon': true,
      },
      styles: {},
    };
  },

  mounted() {
    this.foundation = new MDCSelectIconFoundation(
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
            MDCSelectIconFoundation.strings.ICON_EVENT,
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
  render(createElement) {
    return createElement(
      'i',
      {
        class: this.classes,
        style: this.styles,
        attrs: this.$attrs,
        on: this.$listeners,
      },
      this.icon,
    );
  },
};
