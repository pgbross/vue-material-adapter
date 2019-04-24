import { CustomLinkMixin, DispatchEventMixin } from '@mcwv/base';
import { RippleMixin } from '@mcwv/ripple';

export default {
  name: 'mdc-card-primary-action',
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
        props: { link: this.link },
        on: this.listeners,
      },
      slots.default && slots.default(),
    );
  },
};
