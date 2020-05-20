export default {
  name: 'mcw-card-actions',
  functional: true,
  props: {
    fullBleed: Boolean,
  },
  render(
    createElement,
    {
      props: { fullBleed },
      data: { staticClass, attrs },
      scopedSlots,
    },
  ) {
    return createElement(
      'section',
      {
        class: [
          {
            'mdc-card__actions': 1,
            'mdc-card__actions--full-bleed': fullBleed,
          },
          staticClass,
        ],
        attrs,
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};
