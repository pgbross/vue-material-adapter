import { h } from '@vue/composition-api';

export default {
  name: 'mcw-top-app-bar-icon',
  props: { actionItem: Boolean },
  setup(props, { listeners, slots }) {
    return () => {
      return h(
        'button',
        {
          class: {
            'mdc-icon-button': 1,
            'material-icons': 1,
            'mdc-top-app-bar__action-item': props.actionItem,
            'mdc-top-app-bar__navigation-icon': !props.actionItem,
          },
          on: listeners,
        },
        slots.default?.(),
      );
    };
  },
};
