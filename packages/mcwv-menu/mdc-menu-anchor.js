export default {
  name: 'mdc-menu-anchor',
  functional: true,
  render(createElement, { slots }) {
    return createElement(
      'div',
      {
        class: {
          'mdc-menu-anchor': 1,
          'mdc-menu-surface--anchor': 1,
        },
      },
      slots().default,
    );
  },
};
