export default {
  name: 'mcw-card-action-buttons',
  functional: true,
  render(
    createElement,
    {
      scopedSlots,
      data: { attrs, staticClass, staticStyle },
    },
  ) {
    const vNodes = (scopedSlots.default && scopedSlots.default()) || [];

    if (vNodes) {
      // add icon class to children
      vNodes.forEach(vNode => {
        if (vNode.tag && vNode.data) {
          vNode.data.staticClass = `mdc-card__action mdc-card__action--button ${vNode
            .data.staticClass || ''}`;
        }
      });
    }

    return createElement(
      'div',
      {
        class: ['mdc-card__action-buttons', staticClass],
        style: staticStyle,
        attrs,
      },
      vNodes,
    );
  },
};
