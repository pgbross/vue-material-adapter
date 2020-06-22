const spanOptions = {
  type: [String, Number],
  default: null,
  validator: function (value) {
    const num = Number(value);
    return isFinite(num) && num <= 12 && num > 0;
  },
};

export default {
  name: 'mcw-layout-cell',
  props: {
    span: spanOptions,
    order: spanOptions,
    phone: spanOptions,
    tablet: spanOptions,
    desktop: spanOptions,
    align: {
      type: String,
      validator: function (value) {
        return ['top', 'bottom', 'middle'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    classes() {
      const cssClasses = [];

      if (this.span) {
        cssClasses.push(`mdc-layout-grid__cell--span-${this.span}`);
      }

      if (this.order) {
        cssClasses.push(`mdc-layout-grid__cell--order-${this.order}`);
      }

      if (this.phone) {
        cssClasses.push(`mdc-layout-grid__cell--span-${this.phone}-phone`);
      }

      if (this.tablet) {
        cssClasses.push(`mdc-layout-grid__cell--span-${this.tablet}-tablet`);
      }

      if (this.desktop) {
        cssClasses.push(`mdc-layout-grid__cell--span-${this.desktop}-desktop`);
      }

      if (this.align) {
        cssClasses.push(`mdc-layout-grid__cell--align-${this.align}`);
      }

      return cssClasses;
    },
  },
};
