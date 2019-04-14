import { CustomElement } from '@mcwv/base';

const THEME_COLORS = [
  'primary',
  'secondary',
  'background',
  'primary-light',
  'secondary-light',
  'secondary-dark',
  'primary-dark',
];

const THEME_STYLES = [
  'text-primary',
  'text-secondary',
  'text-hint',
  'text-icon',
  'text-disabled',
];

export default {
  name: 'mdc-theme',
  components: {
    CustomElement,
  },
  props: {
    tag: { type: String, default: 'div' },
    color: String,
    background: String,
  },
  render(createElement) {
    return createElement(
      'custom-element',
      {
        class: this.classes,
        props: { tag: this.tag },
      },
      this.$slots.default,
    );
  },
  computed: {
    classes() {
      const classes = { 'mdc-theme': 1 };

      if (this.color && THEME_COLORS.indexOf(this.color) !== -1) {
        classes[`mdc-theme--${this.color}`] = true;
      }

      if (this.background && THEME_COLORS.indexOf(this.background) !== -1) {
        classes[`mdc-theme--${this.background}-bg`] = true;

        if (this.color && THEME_STYLES.indexOf(this.color) !== -1) {
          classes[`mdc-theme--${this.color}-on-${this.background}`] = true;
        }
      }
      return classes;
    },
  },
};
