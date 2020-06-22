import { CustomLinkMixin, DispatchEventMixin } from '~/base/index.js';
import { RippleMixin } from '~/ripple/index.js';

export default {
  name: 'mcw-card-primary-action',
  mixins: [DispatchEventMixin, CustomLinkMixin, RippleMixin],
  data() {
    return {
      classes: { 'mdc-card__primary-action': 1 },
    };
  },
  render(createElement) {
    const { $scopedSlots: slots } = this;
    return createElement(
      'custom-link',
      {
        class: this.classes,
        style: this.styles, // from RippleMixin
        attrs: {
          tabIndex: 0,
          ...this.$attrs,
        },
        props: { link: this.link },
        on: this.listeners,
      },
      slots.default?.(),
    );
  },
};
