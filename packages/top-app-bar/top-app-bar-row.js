export default {
  name: 'mcw-top-app-bar-row',
  props: {
    tag: {
      type: String,
      default() {
        return 'div';
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
      { class: ['mdc-top-app-bar__row', staticClass], attrs },
      scopedSlots.default?.(),
    );
  },
};
