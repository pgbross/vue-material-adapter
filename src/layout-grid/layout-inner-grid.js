import { h } from 'vue';

export default {
  name: 'mcw-layout-inner-grid',
  setup(props, { slots }) {
    return () => {
      return h(
        'div',
        { class: 'mdc-layout-inner-grid mdc-layout-grid__inner' },
        [slots.default()],
      );
    };
  },
};
