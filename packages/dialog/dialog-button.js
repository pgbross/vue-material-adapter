import { h } from 'vue';

export default {
  name: 'mcw-dialog-button',
  props: {
    action: String,
    isDefault: Boolean,
    isInitialFocus: Boolean,
  },

  setup(props, { attrs, slots }) {
    const onClick = attrs.onClick || (() => {});

    return () => {
      return h(
        'mcw-button',
        {
          class: ['mdc-button', 'mdc-dialog__button'],
          'data-mdc-dialog-action': props.action,
          'data-mdc-dialog-button-default': props.isDefault,
          'data-mdc-dialog-initial-focus': props.isInitialFocus,
          onClick,
        },
        slots.default?.(),
      );
    };
  },
};
