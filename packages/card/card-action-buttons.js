import { createElement } from '@vue/composition-api';

export default {
  name: 'mcw-card-action-buttons',

  setup(props, { slots }) {
    return () => {
      return createElement(
        'div',
        {
          class: ['mdc-card__action-buttons'],
        },
        [slots.default?.()],
      );
    };
  },
};
