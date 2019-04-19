export default {
  name: 'mdc-icon-toggle',
  functional: true,
  props: {
    isOn: Boolean,
  },

  render(
    createElement,
    {
      props: { isOn },
      slots,
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
      slots().default,
    );
  },
};
