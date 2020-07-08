import { h } from '@vue/composition-api';

export default {
  name: 'mcw-top-app-bar-title',
  props: {
    tag: {
      type: String,
      default() {
        return 'span';
      },
    },
  },
  setup(props, { listeners, slots }) {
    return () => {
      return h(
        props.tag,
        { class: ['mdc-top-app-bar__title'] },
        slots.default?.(),
      );
    };
  },
};
