export default {
  name: 'mdc-list-group-header',
  functional: true,
  render(createElement, { slots }) {
    return createElement(
      'li',
      {
        class: {
          'mdc-list-group-header': 1,
          'mdc-list-group__subheader': 1,
        },
      },
      slots().default,
    );
  },
};
