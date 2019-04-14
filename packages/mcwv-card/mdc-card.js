export default {
  name: 'mdc-card',
  props: {
    outlined: Boolean,
  },
  functional: true,
  render(
    createElement,
    {
      props: { outlined },
      slots,
    },
  ) {
    return createElement(
      'div',
      { class: { 'mdc-card': 1, 'mdc-card--outlined': outlined } },
      slots().default,
    );
  },
};
