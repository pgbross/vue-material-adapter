import { h } from '@vue/composition-api';

export default {
  name: 'mcw-drawer-divider',

  setup(props, { slots }) {
    return () => {
      return h('hr', {
        class: {
          'mdc-list-divider': 1,
        },
      });
    };
  },
};
