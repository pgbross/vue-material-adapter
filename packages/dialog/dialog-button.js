import { h } from '@vue/composition-api';

export default {
  name: 'mcw-dialog-button',
  props: {
    action: String,
    isDefault: Boolean,
    isInitialFocus: Boolean,
  },

  setup(props, { listeners, slots }) {
    const onClick = listeners['click'] || (() => {});

    return () => {
      return h(
        'mcw-button',
        {
          class: ['mdc-dialog__button'],
          attrs: {
            'data-mdc-dialog-action': props.action,
            'data-mdc-dialog-button-default': props.isDefault,
            'data-mdc-dialog-initial-focus': props.isInitialFocus,
          },
          on: {
            click: onClick,
          },
        },
        slots.default?.(),
      );
    };
  },
};
