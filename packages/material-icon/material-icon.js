import { h } from '@vue/composition-api';

export default {
  name: 'mcw-material-icon',
  props: {
    icon: String,
    tag: { type: String, default: 'i' },
  },
  setup(props, { listeners }) {
    return () => {
      return h(
        props.tag,
        {
          class: 'material-icons',
          on: listeners,
        },
        props.icon,
      );
    };
  },
};
