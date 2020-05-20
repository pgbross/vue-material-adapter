export default {
  name: 'mcw-list-group',
  functional: true,
  props: {
    tag: {
      type: String,
      default() {
        return 'div';
      },
    },
  },
  render(
    createElement,
    {
      props: { tag },
      scopedSlots,
      staticClass,
      attrs,
    },
  ) {
    return createElement(
      tag,
      {
        class: ['mdc-list-group', staticClass],
        attrs,
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};
