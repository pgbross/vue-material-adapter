export default {
  name: 'mdc-card',
  props: {
    outlined: Boolean,
  },
  functional: true,
  render(
    createElement,
    {
      props: { outlined },
      data: { attrs, staticClass },
      slots,
    },
  ) {
    return createElement(
      'div',
      {
        class: [
          {
            'mdc-card': 1,
            'mdc-card--outlined': outlined,
          },
          staticClass,
        ],
        attrs,
      },
      slots().default,
    );
  },
};
