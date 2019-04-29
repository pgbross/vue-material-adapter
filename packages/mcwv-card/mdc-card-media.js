export default {
  name: 'mcw-card-media',
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
      scopedSlots,
    },
  ) {
    const nodes = [];

    const content = scopedSlots.default && scopedSlots.default();
    if (content) {
      nodes.push(
        createElement(
          'div',
          { class: ['mdc-card__media-content', contentClass] },
          content,
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
