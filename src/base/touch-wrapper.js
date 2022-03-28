import { h } from 'vue';

export default {
  inheritAttrs: false,
  props: { isTouch: Boolean },
  setup(props, { slots }) {
    return () => {
      if (props.isTouch) {
        return h('div', { class: 'mdc-touch-target-wrapper' }, [
          slots.default(),
        ]);
      }

      return slots.default();
    };
  },
};
