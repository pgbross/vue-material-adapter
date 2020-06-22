export default {
  name: 'mcw-top-app-bar-section',
  props: {
    align: {
      type: String,
      default() {
        return 'start';
      },
    },
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
    { props: { tag, align }, scopedSlots, data: { attrs, staticClass } },
  ) {
    const classes = ['mdc-top-app-bar__section', staticClass];

    align == 'start' && classes.push('mdc-top-app-bar__section--align-start');
    align == 'end' && classes.push('mdc-top-app-bar__section--align-end');

    return createElement(
      tag,
      { class: classes, attrs },
      scopedSlots.default?.(),
    );
  },
};
