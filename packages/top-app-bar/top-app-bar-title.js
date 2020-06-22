export default {
  name: 'mcw-top-app-bar-title',
  props: {
    tag: {
      type: String,
      default() {
        return 'span';
      },
    },
  },
  functional: true,

  render(
    createElement,
    { props: { tag }, scopedSlots, data: { attrs, staticClass } },
  ) {
    return createElement(
      tag,
      { class: ['mdc-top-app-bar__title', staticClass], attrs },
      scopedSlots.default?.(),
    );
  },
};
