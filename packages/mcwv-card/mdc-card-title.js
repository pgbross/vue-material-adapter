export default {
  name: 'mdc-card-title',
  props: {
    large: Boolean,
  },
  functional: true,
  render(
    createElement,
    {
      props: { large },
      slots,
    },
  ) {
    return createElement(
      'h1',
      {
        class: {
          'mdc-card-title': 1,
          'mdc-card__title': 1,
          'mdc-card__title--large': large,
        },
      },
      slots().default,
    );
  },
};
