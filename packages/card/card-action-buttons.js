import { h } from '@vue/composition-api';

export default {
  name: 'mcw-card-action-buttons',

  setup(props, { slots }) {
    return () => {
      return h(
        'div',
        {
          class: ['mdc-card__action-buttons'],
        },
        [slots.default?.()],
      );
    };
  },
};
