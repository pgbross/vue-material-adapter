export default {
  name: 'mdc-card-media',
  functional: true,
  props: {
    src: String,
    square: Boolean,
  },
  render(
    createElement,
    {
      props: { src, square },
      slots,
    },
  ) {
    const nodes = slots().default
      ? [
          createElement(
            'div',
            { class: { 'mdc-card__media-content': 1 } },
            slots().default,
          ),
        ]
      : void 0;

    return createElement(
      'section',
      {
        class: {
          'mdc-card-media': 1,
          'mdc-card__media': 1,
          'mdc-card__media--square': square,
          'mdc-card__media--16-9': !square,
        },
        style: {
          backgroundImage: `url(${src})`,
        },
      },
      nodes,
    );
  },
};
