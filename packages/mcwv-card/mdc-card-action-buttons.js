export default {
  name: 'mdc-card-action-buttons',
  functional: true,
  render(createElement, { slots }) {
    return createElement(
      'div',
      {
        class: { 'mdc-card-action-buttons': 1, 'mdc-card__action-buttons': 1 },
      },
      slots().default,
    );
  },
};
