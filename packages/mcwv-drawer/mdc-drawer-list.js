export default {
  name: 'mdc-drawer-list',
  functional: true,
  props: {
    dense: Boolean,
  },
  render(
    createElement,
    {
      props: { dense },
      scopedSlots,
    },
  ) {
    return createElement(
      'nav',
      {
        class: {
          'mdc-drawer-list': 1,
          'mdc-list': 1,
          'mdc-list--dense': dense,
        },
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};
