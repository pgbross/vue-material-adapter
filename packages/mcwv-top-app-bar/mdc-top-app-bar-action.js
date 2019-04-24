import { DispatchEventMixin } from '@mcwv/base';
import { RippleMixin } from '@mcwv/ripple';

export default {
  name: 'mdc-top-app-bar-action',
  mixins: [DispatchEventMixin, RippleMixin],
  props: {
    tag: { type: String, default: 'a' },
    icon: String,
    iconClasses: Object,
  },

  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    return createElement(
      this.tag,
      {
        class: {
          'mdc-top-app-bar-action': true,
          'mdc-top-app-bar--action': true,
          'mdc-top-app-bar__action-item': true,
          'material-icons': !!this.icon && !this.$slots.default,
        },
        attrs: this.$attrs,
        on: this.$listeners,
      },
      (scopedSlots.default && scopedSlots.default()) || [this.icon],
    );
  },
};
