export default {
  name: 'mcw-icon-toggle',
  functional: true,
  props: {
    isOn: Boolean,
  },

  render(
    createElement,
    {
      props: { isOn },
      scopedSlots,
    },
  ) {
    return createElement(
      'div',
      {
        class: {
          'mdc-icon-button__icon': true,
          'mdc-icon-button__icon--on': isOn,
        },
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};
