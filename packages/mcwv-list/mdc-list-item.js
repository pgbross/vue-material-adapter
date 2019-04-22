export default {
  name: 'mdc-list-item',
  props: {
    classNamesFromList: Array,
    attributesFromList: Array,
    shouldFocus: Boolean,
    shouldFollowHref: Boolean,
    shouldToggleCheckbox: Boolean,
    childrenTabIndex: Number,
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
      classNamesFromList = [],
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

    return createElement(
      tag,
      { class: classes, attrs: attributesFromList },
      slots.default && slots.default(),
    );
    // const textNodes = [];
    // if (this.hasSecondary) {
    //   textNodes.push(
    //     createElement(
    //       'span',
    //       { class: { 'mdc-list-item__primary-text': 1 } },
    //       this.$slots.default,
    //     ),
    //   );
    //   textNodes.push(
    //     createElement(
    //       'span',
    //       { class: { 'mdc-list-item__secondary-text': 1 } },
    //       this.$slots.secondary,
    //     ),
    //   );
    // } else {
    //   textNodes.push(this.$slots.default);
    // }
    // const itemTextElement = createElement(
    //   'span',
    //   {
    //     class: { 'mdc-list-item__text': 1 },
    //   },
    //   textNodes,
    // );
    // const nodes = [
    //   this.$slots['start-detail'],
    //   itemTextElement,
    //   this.$slots['end-detail'],
    // ];
    // return createElement(
    //   'li',
    //   {
    //     class: { ...this.classes, ...this.itemClasses },
    //     style: this.styles,
    //     attrs: { tabindex: this.isInteractive ? '0' : void 0 },
    //     on: this.isInteractive ? this.$listeners : {},
    //   },
    //   nodes,
    // );
  },
};
