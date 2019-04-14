import { DispatchEventMixin, CustomButtonMixin } from '@mcwv/base';
import { RippleMixin } from '@mcwv/ripple';

export default {
  name: 'mdc-button-base',
  mixins: [DispatchEventMixin, CustomButtonMixin, RippleMixin],
  data() {
    return {
      classes: {},
      styles: {},
    };
  },
  render(createElement) {
    return createElement(
      'custom-button',
      {
        class: this.classes,
        style: this.styles,
        attrs: { disabled: this.disabled },
        props: {
          href: this.href,
          link: this.link,
        },
        on: this.listeners,
        ref: 'root',
      },
      [
        createElement(
          'span',
          { class: { 'mdc-button__label': 1 } },
          this.$slots.default,
        ),
      ],
    );
  },
};
