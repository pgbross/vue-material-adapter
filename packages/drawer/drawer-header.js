import { h } from '@vue/composition-api';

export default {
  name: 'mcw-drawer-header',
  setup(props, { slots }) {
    return () => {
      return h(
        'div',
        {
          class: 'mdc-drawer__header',
        },
        slots.default?.(),
      );
    };
  },
};
