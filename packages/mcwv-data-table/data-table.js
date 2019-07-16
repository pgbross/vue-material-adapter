import MDCDataTableFoundation from '@material/data-table/foundation';

export default {
  name: 'mcw-data-table',
  data() {},
  mounted() {
    const adapter = {};

    this.foundation = new MDCDataTableFoundation(adapter);
    this.foundation.init();
  },
  beforeDestroy() {
    this.foundation.destroy();
  },

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
