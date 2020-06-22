export default {
  name: 'mcw-dialog-title',
  props: {
    tag: {
      type: String,
      default() {
        return 'h2';
      },
    },
  },

  render(createElement) {
    const { $scopedSlots: slots, tag } = this;

    return createElement(
      tag,
      {
        class: ['mdc-dialog__title'],
      },
      slots.default?.(),
    );
  },
};
