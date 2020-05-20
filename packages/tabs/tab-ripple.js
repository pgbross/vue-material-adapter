import { RippleBase } from '~/ripple/index.js';

export default {
  name: 'mcw-tab-ripple',

  data() {
    return {
      classes: {
        'mdc-tab__ripple': 1,
        'mdc-tab-ripple': 1,
      },
      styles: {},
    };
  },

  mounted() {
    this.ripple = new RippleBase(this);
    this.ripple.init();
  },

  beforeDestroy() {
    this.ripple.destroy();
  },
  render(createElement) {
    return createElement('span', { class: this.classes, style: this.styles });
  },
};
