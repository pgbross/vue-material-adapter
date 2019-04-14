export default {
  name: 'mdc-icon',
  functional: true,
  props: {
    icon: String,
  },

  render(
    createElement,
    {
      props: { icon },
      slots,
    },
  ) {
    return createElement(
      'span',
      {
        class: {
          'mdc-icon': 1,
          'mdc-icon--material': 1,
          'material-icons': !!icon,
        },
      },
      slots().default || icon,
    );
  },
};
