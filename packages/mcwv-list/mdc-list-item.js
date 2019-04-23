export default {
  name: 'mdc-list-item',
  props: {
    classNamesFromList: {
      type: Array,
    },
    attributesFromList: Object,
    shouldFocus: Boolean,
    shouldFollowHref: Boolean,
    shouldToggleCheckbox: Boolean,
    childrenTabIndex: Number | String,
    counter: { type: Number, default: 0 },
    tag: {
      type: String,
      default() {
        return 'li';
      },
    },
  },

  render(createElement) {
    const {
      tag,
      $scopedSlots: slots,
      classNamesFromList,
      attributesFromList,
      childrenTabIndex,
    } = this;
    const classes = ['mdc-list-item'].concat(classNamesFromList);

    const mdt = (slots.default && slots.default()) || [];

    mdt.forEach(vn => {
      if (vn.tag) {
        const data = vn.data || (vn.data = {});
        const props = data.props || (data.props = {});
        props.tabIndex = childrenTabIndex;
      }
    });

    if (slots.listItem) {
      return slots.listItem({
        tag,
        classNamesFromList,
        children: slots.default && slots.default(),
      });
    }
    return createElement(
      tag,
      { class: classes, attrs: attributesFromList, on: this.$listeners },
      slots.default && slots.default(),
    );
  },
};
