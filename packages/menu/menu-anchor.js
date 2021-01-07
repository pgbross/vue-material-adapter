import { h } from 'vue';

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
