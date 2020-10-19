import { h } from 'vue';

export default {
  name: 'mcw-menu-item',
  props: {
    disabled: Boolean,
  },
  setup(props, { slots }) {
    return () => {
      return h(
        'li',
        {
          class: {
            'mdc-menu-divider': 1,
            'mdc-list-divider': 1,
          },
          attrs: {
            tabindex: props.disabled ? '-1' : '0',
            'aria-disabled': props.disabled,
            role: 'menuitem',
          },
        },
        slots.default?.(),
      );
    };
  },
};
