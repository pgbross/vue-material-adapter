export default {
  name: 'mcw-dialog-footer',
  props: {
    tag: {
      type: String,
      default() {
        return 'div';
      },
    },
  },

  render(createElement) {
    return createElement(
      this.tag,
      {
        class: ['mdc-dialog__actions'],
      },
      this.$scopedSlots.default?.(),
    );
  },
};
