import { h } from 'vue';

export default {
  name: 'mcw-card-action-icons',

  setup(props, { slots }) {
    return () => {
      return h(
        'div',
        {
          class: ['mdc-card__action-icons'],
        },
        [slots.default?.()],
      );
    };
  },
};
