export default {
  name: 'mcw-layout-inner-grid',
  functional: true,
  render(createElement, { scopedSlots }) {
    return createElement(
      'div',
      {
        class: {
          'mdc-layout-inner-grid': 1,
          'mdc-layout-grid__inner': 1,
        },
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};
