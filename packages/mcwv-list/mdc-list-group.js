export default {
  name: 'mdc-list-group',
  functional: true,
  render(createElement, { slots }) {
    return createElement(
      'hr',
      {
        class: {
          'mdc-list-group': 1,
        },
      },
      slots().default,
    );
  },
};
