export default {
  name: 'mcw-dialog-content',
  props: {
    tag: {
      type: String,
      default() {
        return 'div';
      },
    },
  },

  render(createElement, context) {
    const { $scopedSlots: slots, tag } = this;

    return createElement(
      tag,
      {
        class: ['mdc-dialog__content'],
      },
      slots.default?.(),
    );
  },
};
