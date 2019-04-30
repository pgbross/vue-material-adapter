export default {
  name: 'mcw-list-item-meta',
  props: {
    tabbableOnListItemFocus: Boolean,
    tabIndex: String,
    childrenTabIndex: Number,
  },
  render(createElement) {
    const {
      $attrs: attrs,
      tabbableOnListItemFocus,
      tabIndex,
      $scopedSlots: slots,
    } = this;
    const slot = (slots.default && slots.default()) || [];
    const nodes = slot;
    if (nodes.length !== 1) {
      throw new Error('List item meta expects exactly one child element');
    }

    const [v0] = nodes;
    if (!v0.tag) {
      return createElement(
        'span',
        {
          class: ['mdc-list-item__meta'],
          attrs: {
            ...attrs,
            tabIndex: tabbableOnListItemFocus ? tabIndex : -1,
          },
        },
        v0.text,
      );
    }
    const data = v0.data || (v0.data = {});
    const props = data.props || (data.props = {});
    data.staticClass = `mdc-list-item__meta`;
    props.tabIndex = tabbableOnListItemFocus ? tabIndex : -1;

    data.attrs = {
      ...data.attrs,
      ...attrs,
      tabIndex: tabbableOnListItemFocus ? tabIndex : -1,
    };

    return slot;
  },
};
