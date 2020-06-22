export default {
  name: 'mcw-menu-anchor',
  functional: true,
  render(createElement, { scopedSlots }) {
    return createElement(
      'div',
      {
        class: {
          'mdc-menu-anchor': 1,
          'mdc-menu-surface--anchor': 1,
        },
      },
      scopedSlots.default?.(),
    );
  },
};
