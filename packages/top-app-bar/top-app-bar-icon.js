export default {
  name: 'mcw-top-app-bar-icon',
  props: { actionItem: Boolean },

  render(createElement) {
    const {
      $attrs: attrs,
      $scopedSlots: scopedSlots,
      actionItem,
      $listeners: listeners,
    } = this;

    return createElement(
      'button',
      {
        class: {
          'mdc-icon-button': 1,
          'material-icons': 1,
          'mdc-top-app-bar__action-item': actionItem,
          'mdc-top-app-bar__navigation-icon': !actionItem,
        },

        attrs,
        on: { ...listeners },
      },
      scopedSlots.default?.(),
    );
  },
};
