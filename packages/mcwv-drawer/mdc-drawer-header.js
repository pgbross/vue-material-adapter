export default {
  name: 'mdc-drawer-header',
  functional: true,
  render(createElement, { slots }) {
    return createElement(
      'div',
      {
        class: {
          'mdc-drawer-header': 1,
          'mdc-drawer__header': 1,
        },
      },
      slots().default,
    );
  },
};
