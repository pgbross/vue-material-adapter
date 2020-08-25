import { h } from '@vue/composition-api';

export default {
  name: 'mcw-icon-toggle',
  props: {
    isOn: Boolean,
  },

  setup(props, { slots }) {
    return () => {
      return h(
        'i',
        {
          class: {
            'material-icons': 1,
            'mdc-icon-button__icon': true,
            'mdc-icon-button__icon--on': props.isOn,
          },
        },
        slots.default?.(),
      );
    };
  },
};
