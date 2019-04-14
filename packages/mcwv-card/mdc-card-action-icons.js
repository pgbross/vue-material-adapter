export default {
  name: 'mdc-card-action-icons',
  functional: true,
  render(createElement, { slots }) {
    return createElement(
      'div',
      {
        class: { 'mdc-card-action-icons': 1, 'mdc-card__action-icons': 1 },
      },
      slots().default,
    );
  },
};
