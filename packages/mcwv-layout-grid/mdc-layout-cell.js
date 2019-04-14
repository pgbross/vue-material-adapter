const spanOptions = {
  type: [String, Number],
  default: null,
  validator: function(value) {
    const num = Number(value);
    return isFinite(num) && num <= 12 && num > 0;
  },
};

export default {
  name: 'mdc-layout-cell',
  functional: true,
  props: {
    span: spanOptions,
    order: spanOptions,
    phone: spanOptions,
    tablet: spanOptions,
    desktop: spanOptions,
    align: {
      type: String,
      validator: function(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) !== -1;
      },
    },
  },

  render(
    createElement,
    {
      props: { span, order, phone, tablet, desktop, align },
      slots,
      data: { staticClass = '' },
    },
  ) {
    const classes = {
      'mdc-layout-cell': 1,
      'mdc-layout-grid__cell': 1,
    };
    staticClass.split(' ').forEach(c => (classes[c] = 1));

    if (span) {
      classes[`mdc-layout-grid__cell--span-${span}`] = 1;
    }

    if (order) {
      classes[`mdc-layout-grid__cell--order-${order}`] = 1;
    }

    if (phone) {
      classes[`mdc-layout-grid__cell--span-${phone}-phone`] = 1;
    }

    if (tablet) {
      classes[`mdc-layout-grid__cell--span-${tablet}-tablet`] = 1;
    }

    if (desktop) {
      classes[`mdc-layout-grid__cell--span-${desktop}-desktop`] = 1;
    }

    if (align) {
      classes[`mdc-layout-grid__cell--align-${align}`] = 1;
    }

    return createElement(
      'div',
      {
        class: classes,
      },
      slots().default,
    );
  },
};
