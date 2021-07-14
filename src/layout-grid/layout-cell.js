import { computed } from 'vue';

const spanOptions_ = {
  type: [String, Number],
  default: undefined,
  validator: value => {
    const number = Number(value);
    return Number.isFinite(number) && number <= 12 && number > 0;
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
      validator: value => ['top', 'bottom', 'middle'].includes(value),
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
