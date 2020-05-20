import { RippleBase } from '~/ripple/index.js';

export default {
  name: 'mcw-material-icon',
  props: {
    hasRipple: Boolean,
    icon: String,
    tag: { type: String, default: 'i' },
  },
  data() {
    return {
      classes: {
        'material-icons': true,
        'material-icons--ripple-surface': this.hasRipple,
      },
      styles: {}, // for ripple support
    };
  },

  mounted() {
    if (this.hasRipple) {
      this.ripple = new RippleBase(this, {
        isUnbounded: () => true,
      });
      this.ripple.init();
    }
  },

  beforeDestroy() {
    if (this.ripple) {
      this.ripple.destroy();
    }
  },
  render(createElement) {
    const { tag } = this;
    return createElement(
      tag,
      {
        class: this.classes,
        on: this.$listeners,
        style: this.styles,
      },
      this.icon,
    );
  },
};
