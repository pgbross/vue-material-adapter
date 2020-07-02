import { h } from '@vue/composition-api';

export default {
  name: 'mcw-card',
  props: {
    outlined: Boolean,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { outlined } = props;

      return h(
        'div',
        {
          class: [
            {
              'mdc-card': 1,
              'mdc-card--outlined': outlined,
            },
            // staticClass,
          ],
          attrs,
        },
        slots.default?.(),
      );
    };
  },
};
