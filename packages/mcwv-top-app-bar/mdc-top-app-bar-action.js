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
      this.$slots.default || [this.icon],
    );
  },
};
