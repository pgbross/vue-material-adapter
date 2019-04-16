import { DispatchEventMixin, CustomButtonMixin } from '@mcwv/base';
import { RippleMixin } from '@mcwv/ripple';

export default {
  name: 'mdc-fab',
  mixins: [DispatchEventMixin, CustomButtonMixin, RippleMixin],
  props: {
    icon: String,
    mini: Boolean,
    exited: Boolean,
    label: String,
  },
  data() {
    return {
      iconClasses: {
        'mdc-fab__icon': 1,
        'material-icons': this.icon,
      },
      classes: {
        'mdc-fab': 1,
        'mdc-fab--mini': this.mini,
        'mdc-fab--extended': this.label,
        'mdc-fab--exited': this.exited,
      },
      styles: {},
    };
  },
  watch: {
    icon() {
      this.$set(this.classes, 'material-icons', this.icon);
    },
    mini() {
      this.$set(this.classes, 'mdc-fab--mini', this.mini);
    },
    exited() {
      this.$set(this.classes, 'mdc-fab--exited', this.exited);
    },
  },
  render(createElement) {
    const nodes = [
      createElement(
        'span',
        { class: this.iconClasses },
        this.$slots.default || this.icon,
      ),
    ];
    if (this.label) {
      nodes.push(
        createElement('span', { class: { 'mdc-fab__label': 1 } }, this.label),
      );
    }

    return createElement(
      'custom-button',
      {
        class: this.classes,
        styles: this.styles,
        attrs: { href: this.href, link: this.link },
        on: this.listeners,
      },
      nodes,
    );
  },
};
