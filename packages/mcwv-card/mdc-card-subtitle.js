export default {
  name: 'mdc-card-subtitle',
  functional: true,
  render(createElement, { slots }) {
    return createElement(
      'h2',
      {
        class: {
          'mdc-card-subtitle': 1,
          'mdc-card__subtitle': 1,
        },
      },
      slots().default,
    );
  },
};
