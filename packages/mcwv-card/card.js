export default {
  name: 'mcw-card',
  props: {
    outlined: Boolean,
  },
  functional: true,
  render(
    createElement,
    {
      props: { outlined },
      data: { attrs, staticClass },
      scopedSlots,
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
      scopedSlots.default && scopedSlots.default(),
    );
  },
};
