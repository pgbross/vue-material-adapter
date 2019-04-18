import { DispatchEventMixin, CustomButtonMixin } from '@mcwv/base';
import { RippleMixin } from '@mcwv/ripple';

export default {
  name: 'mdc-button-base',
  mixins: [DispatchEventMixin, CustomButtonMixin, RippleMixin],
  // note RippleMixin defines data(){ return {classes:{}, styles: {} }; }
  render(createElement) {
    const nodes = [
      createElement(
        'span',
        { class: { 'mdc-button__label': 1 } },
        this.$slots.default,
      ),
    ];
    if (this.$slots.icon || this.icon) {
      nodes.unshift(
        this.$slots.icon ||
          createElement(
            'i',
            {
              class: {
                'material-icons': 1,
                'mdc-button__icon': 1,
              },
              attrs: { 'aria-hidden': true },
            },
            this.icon,
          ),
      );
    }

    if (this.$slots.trailingIcon || this.trailingIcon) {
      nodes.push(
        this.$slots.trailingIcon ||
          createElement(
            'i',
            {
              class: {
                'material-icons': 1,
                'mdc-button__icon': 1,
              },
              attrs: { 'aria-hidden': true },
            },
            this.trailingIcon,
          ),
      );
    }

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
      nodes,
    );
  },
};
