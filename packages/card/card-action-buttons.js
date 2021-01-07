import { h } from 'vue';

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
