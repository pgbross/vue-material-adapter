import { cssClasses } from './constants';

export default {
  name: 'mcw-dialog-button',
  functional: true,
  props: {
    action: String,
    isDefault: Boolean,
    isInitialFocus: Boolean,
  },

  render(
    createElement,
    {
      props: { action, isDefault, isInitialFocus },
      data: { staticClass, attrs },
      scopedSlots,
    },
  ) {
    return createElement(
      'mcw-button',
      {
        class: [staticClass, cssClasses.BUTTON],
        attrs: {
          ...attrs,
          'data-mdc-dialog-action': action,
          'data-mdc-dialog-button-default': isDefault,
          'data-mdc-dialog-initial-focus': isInitialFocus,
        },
        on: {
          click: evt => this.$emit('click', evt),
        },
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};
