export default {
  name: 'mcw-list-item-graphic',
  props: {
    tabbableOnListItemFocus: Boolean,
    tabIndex: {
      type: String,
      default() {
        return '-1';
      },
    },
    childrenTabIndex: Number,
    graphic: {},
  },
  render(createElement) {
    const {
      $attrs: attrs,
      tabbableOnListItemFocus,
      tabIndex,
      $scopedSlots: slots,
    } = this;
    const slot = (slots.default && slots.default()) || [];
    const nodes = slot.filter(({ tag }) => tag);
    if (nodes.length !== 1) {
      throw new Error('List item graphic expects exactly one child element');
    }

    const [v0] = nodes;
    const data = v0.data || (v0.data = {});
    const props = data.props || (data.props = {});
    props.staticClass = `mdc-list-item__graphic ${props.staticClass}`;
    props.tabIndex = tabbableOnListItemFocus ? tabIndex : -1;

    data.attrs = { ...data.attrs, ...attrs };

    return slot;
  },
};
