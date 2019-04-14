import { DispatchEventMixin, CustomLinkMixin } from '@mcwv/base';
import { RippleMixin } from '@mcwv/ripple';

export default {
  name: 'mdc-card-primary-action',
  mixins: [DispatchEventMixin, CustomLinkMixin, RippleMixin],
  data() {
    return {
      classes: {},
      styles: {},
    };
  },
  render(createElement) {
    return createElement(
      'custom-link',
      {
        class: {
          ...this.classes,
          'mdc-card-primary-action': 1,
          'mdc-card__primary-action': 1,
        },
        style: this.styles,
        props: { link: this.link },
        on: this.listeners,
      },
      this.$slots.default,
    );
  },
};
