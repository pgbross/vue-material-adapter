import mcwButtonBase from './mdc-button-base.js';
export const mcwButton = {
  name: 'mcw-button',
  extends: mcwButtonBase,
  props: {
    raised: Boolean,
    unelevated: Boolean,
    outlined: Boolean,
    dense: Boolean,
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
        'mdc-button--dense': this.dense,
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
    dense() {
      this.$set(this.classes, 'mdc-button--dense', this.dense);
    },
  },
};
