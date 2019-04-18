export default {
  name: 'mdc-card-action-buttons',
  functional: true,
  render(
    createElement,
    {
      slots,
      data: { attrs, staticClass, staticStyle },
    },
  ) {
    const vNodes = slots().default;

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
