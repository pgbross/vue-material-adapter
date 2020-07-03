import { h } from '@vue/composition-api';

export default {
  name: 'mcw-dialog-footer',
  props: {
    tag: {
      type: String,
      default() {
        return 'div';
      },
    },
  },

  setup(props, { slots }) {
    return () => {
      return h(
        props.tag,
        {
          class: ['mdc-dialog__actions'],
        },
        slots.default?.(),
      );
    };
  },
};
