export default {
  name: 'mcw-list-group-sub-header',
  functional: true,
  props: {
    tag: {
      type: String,
      default() {
        return 'h3';
      },
    },
  },
  render(
    createElement,
    {
      scopedSlots,
      props: { tag },
      staticClass,
      attrs,
    },
  ) {
    return createElement(
      tag,
      {
        class: ['mdc-list-group__subheader', staticClass],
        attrs,
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};
