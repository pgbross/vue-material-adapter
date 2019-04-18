export default {
  name: 'mdc-card-media',
  functional: true,
  props: {
    src: String,
    square: {
      type: Boolean,
      default() {
        return false;
      },
    },
    wide: {
      type: Boolean,
      default() {
        return false;
      },
    },
    contentClass: String,
  },
  render(
    createElement,
    {
      props: { src, square, wide, contentClass },
      data: { staticStyle },
      slots,
    },
  ) {
    const nodes = [];

    if (slots().default) {
      nodes.push(
        createElement(
          'div',
          { class: ['mdc-card__media-content', contentClass] },
          slots().default,
        ),
      );
    }

    return createElement(
      'section',
      {
        class: {
          'mdc-card__media': 1,
          'mdc-card__media--square': square,
          'mdc-card__media--16-9': wide && !square,
        },
        style: {
          backgroundImage: `url(${src})`,
          ...staticStyle,
        },
      },
      nodes,
    );
  },
};
