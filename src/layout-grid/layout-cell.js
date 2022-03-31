import { computed, h } from 'vue';

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
  setup(props, { slots }) {
    const classes = computed(() => {
      const cssClasses = {};

      if (props.span) {
        cssClasses[`mdc-layout-grid__cell--span-${props.span}`] = true;
      }

      if (props.order) {
        cssClasses[`mdc-layout-grid__cell--order-${props.order}`] = true;
      }

      if (props.phone) {
        cssClasses[`mdc-layout-grid__cell--span-${props.phone}-phone`] = true;
      }

      if (props.tablet) {
        cssClasses[`mdc-layout-grid__cell--span-${props.tablet}-tablet`] = true;
      }

      if (props.desktop) {
        cssClasses[
          `mdc-layout-grid__cell--span-${props.desktop}-desktop`
        ] = true;
      }

      if (props.align) {
        cssClasses[`mdc-layout-grid__cell--align-${props.align}`] = true;
      }

      return cssClasses;
    });

    return () => {
      return h(
        'div',
        {
          class: {
            'mdc-layout-cell': true,
            'mdc-layout-grid__cell': true,
            ...classes.value,
          },
        },
        [slots.default?.()],
      );
    };
  },
};
