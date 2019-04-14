import { CustomElementMixin } from '@mcwv/base';
import { RippleMixin } from './mdc-ripple-base';

export default {
  name: 'mdc-ripple',
  mixins: [CustomElementMixin, RippleMixin],
  props: {
    tag: String,
  },
  render(createElement) {
    return createElement(
      'custom-element',
      {
        class: { ...this.classes, 'mdc-ripple': 1 },
        style: this.styles,
        props: { tag: this.tag },
      },
      this.$slots.default,
    );
  },
};
