import { createElement } from '@vue/composition-api';

export default {
  name: 'mcw-card-actions',
  props: {
    fullBleed: Boolean,
  },
  setup(props, { slots }) {
    return () => {
      return createElement(
        'section',
        {
          class: [
            {
              'mdc-card__actions': 1,
              'mdc-card__actions--full-bleed': props.fullBleed,
            },
          ],
        },
        slots.default?.(),
      );
    };
  },
};
