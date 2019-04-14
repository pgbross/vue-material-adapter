export default {
  name: 'mdc-layout-inner-grid',
  functional: true,
  render(createElement, { slots }) {
    return createElement(
      'div',
      {
        class: {
          'mdc-layout-inner-grid': 1,
          'mdc-layout-grid__inner': 1,
        },
      },
      slots().default,
    );
  },
};
