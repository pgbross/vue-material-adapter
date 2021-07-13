import { h } from 'vue';

export default {
  name: 'mcw-material-icon',
  props: {
    icon: String,
    tag: { type: String, default: 'i' },
  },
  setup(props, { attrs }) {
    return () => {
      return h(props.tag, { ...attrs, class: 'material-icons' }, props.icon);
    };
  },
};
