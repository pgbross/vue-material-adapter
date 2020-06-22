export default {
  name: 'mcw-drawer-header',
  functional: true,
  render(createElement, { scopedSlots }) {
    return createElement(
      'div',
      {
        class: 'mdc-drawer__header',
      },
      scopedSlots.default?.(),
    );
  },
};
