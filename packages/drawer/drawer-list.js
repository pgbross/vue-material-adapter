import { h } from '@vue/composition-api';

export default {
  name: 'mcw-drawer-list',
  props: {
    dense: Boolean,
  },

  setup(props, { slots }) {
    return () => {
      return h(
        'nav',
        {
          class: {
            'mdc-drawer-list': 1,
            'mdc-list': 1,
            'mdc-list--dense': props.dense,
          },
        },
        slots.default?.(),
      );
    };
  },
};
