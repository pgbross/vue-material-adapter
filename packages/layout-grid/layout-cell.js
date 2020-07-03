import { computed } from '@vue/composition-api';

const spanOptions_ = {
  type: [String, Number],
  default: null,
  validator: value => {
    const num = Number(value);
    return isFinite(num) && num <= 12 && num > 0;
  },
};

export default {
  name: 'mcw-layout-cell',
  props: {
    span: spanOptions_,
    order: spanOptions_,
    phone: spanOptions_,
    tablet: spanOptions_,
    desktop: spanOptions_,
    align: {
      type: String,
      validator: value => ['top', 'bottom', 'middle'].indexOf(value) !== -1,
    },
  },
  setup(props) {
    const classes = computed(() => {
      const cssClasses = [];

      if (props.span) {
        cssClasses.push(`mdc-layout-grid__cell--span-${props.span}`);
      }

      if (props.order) {
        cssClasses.push(`mdc-layout-grid__cell--order-${props.order}`);
      }

      if (props.phone) {
        cssClasses.push(`mdc-layout-grid__cell--span-${props.phone}-phone`);
      }

      if (props.tablet) {
        cssClasses.push(`mdc-layout-grid__cell--span-${props.tablet}-tablet`);
      }

      if (props.desktop) {
        cssClasses.push(`mdc-layout-grid__cell--span-${props.desktop}-desktop`);
      }

      if (props.align) {
        cssClasses.push(`mdc-layout-grid__cell--align-${props.align}`);
      }

      return cssClasses;
    });
    return { classes };
  },
};
