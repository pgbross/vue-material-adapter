export default {
  name: 'mcw-dialog-button',
  props: {
    action: String,
    isDefault: Boolean,
    isInitialFocus: Boolean,
  },

  render(createElement) {
    const { action, isDefault, isInitialFocus } = this;

    const onClick = this.$listeners['click'] || (() => {});

    return createElement(
      'mcw-button',
      {
        class: ['mdc-dialog__button'],
        attrs: {
          'data-mdc-dialog-action': action,
          'data-mdc-dialog-button-default': isDefault,
          'data-mdc-dialog-initial-focus': isInitialFocus,
        },
        on: {
          click: onClick,
        },
      },
      this.$scopedSlots.default?.(),
    );
  },
};
