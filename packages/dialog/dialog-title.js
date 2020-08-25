import { h } from '@vue/composition-api';

export default {
  name: 'mcw-dialog-title',
  props: {
    tag: {
      type: String,
      default() {
        return 'h2';
      },
    },
  },

  setup(props, { slots }) {
    return () => {
      return h(
        props.tag,
        {
          class: ['mdc-dialog__title'],
        },
        slots.default?.(),
      );
    };
  },
};
