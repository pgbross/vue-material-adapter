export default {
  name: 'mdc-card-actions',
  functional: true,
  props: {
    fullBleed: Boolean,
  },
  render(
    createElement,
    {
      props: { fullBleed },
      slots,
    },
  ) {
    return createElement(
      'section',
      {
        class: {
          'mdc-card-actions': 1,
          'mdc-card__actions': 1,
          'mdc-card__actions--full-bleed': fullBleed,
        },
      },
      slots().default,
    );
  },
};
