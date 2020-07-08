import { h } from '@vue/composition-api';

export default {
  name: 'mcw-menu-anchor',
  setup(props, { slots }) {
    return () => {
      return h(
        'div',
        {
          class: {
            'mdc-menu-surface--anchor': 1,
          },
        },
        slots.default?.(),
      );
    };
  },
};
