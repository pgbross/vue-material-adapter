import { createElement } from '@vue/composition-api';

export default {
  name: 'mcw-card-action-icons',

  setup(props, { slots }) {
    return () => {
      return createElement(
        'div',
        {
          class: ['mdc-card__action-icons'],
        },
        [slots.default?.()],
      );
    };
  },
};
