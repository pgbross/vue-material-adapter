export default {
  name: 'mcw-layout-grid',
  props: {
    'fixed-column-width': Boolean,
    'align-left': Boolean,
    'align-right': Boolean,
  },
  functional: true,
  render(
    createElement,
    {
      props: { fixedColumnWidth, alignLeft, alignRight },
      data: { attrs, staticClass, staticStyle },
      scopedSlots,
    },
  ) {
    return createElement(
      'div',
      {
        class: [
          staticClass,
          {
            'mdc-layout-grid': true,
            'mdc-layout-grid--fixed-column-width': fixedColumnWidth,
            'mdc-layout-grid--align-left': alignLeft,
            'mdc-layout-grid--align-right': alignRight,
          },
        ],
        style: staticStyle,
        attrs,
      },
      [
        createElement(
          'div',
          {
            class: ['mdc-layout-grid__inner'],
          },
          scopedSlots.default && scopedSlots.default(),
        ),
      ],
    );
  },
};
