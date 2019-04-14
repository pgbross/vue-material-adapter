export default {
  name: 'mdc-card-text',
  functional: true,
  render(createElement, { slots }) {
    return createElement(
      'section',
      {
        class: {
          'mdc-card-text': 1,
          'mdc-card__supporting-text': 1,
        },
      },
      slots().default,
    );
  },
};
