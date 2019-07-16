export default {
  name: 'mcw-data-table',
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;

    return createElement(
      'div',
      {
        class: ['mdc-data-table'],
        attrs: {},
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};
