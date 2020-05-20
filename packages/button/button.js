import mcwButtonBase from './button-base.js';

export default {
  name: 'mcw-button',
  extends: mcwButtonBase,
  props: {
    raised: Boolean,
    unelevated: Boolean,
    outlined: Boolean,
    icon: String,
    trailingIcon: String,
  },
  data() {
    return {
      classes: {
        'mdc-button': true,
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated && !this.raised,
        'mdc-button--outlined': this.outlined,
      },
    };
  },
  watch: {
    raised() {
      this.$set(this.classes, 'mdc-button--raised', this.raised);
    },
    unelevated() {
      this.$set(this.classes, 'mdc-button--unelevated', this.unelevated);
    },
    outlined() {
      this.$set(this.classes, 'mdc-button--outlined', this.outlined);
    },
  },
};
