import { h } from '@vue/composition-api';

export default {
  name: 'mcw-top-app-bar-row',
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
        { class: ['mdc-top-app-bar__row'] },
        slots.default?.(),
      );
    };
  },
};
