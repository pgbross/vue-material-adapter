export default {
  name: 'mdc-list-item-text',
  props: {
    tabbableOnListItemFocus: Boolean,
    tabIndex: {
      type: Number,
      default() {
        return -1;
      },
    },
    primaryText: String,
    secondaryText: String,
  },
  functional: true,
  render(
    createElement,
    {
      data: { staticClass, attrs },
      props: { tabbableOnListItemFocus, tabIndex, primaryText, secondaryText },
    },
  ) {
    const renderText = (text, className) => {
      if (text === undefined) {
        return null;
      }
      if (typeof text === 'string' || typeof text === 'number') {
        return createElement(
          'span',
          {
            class: className,
            attrs: { tabIndex: tabbableOnListItemFocus ? tabIndex : -1 },
          },
          text,
        );
      }

      return null;
    };

    if (!secondaryText) {
      return renderText(primaryText, ['mdc-list-item__text', staticClass]);
    }

    return createElement(
      'span',
      {
        class: ['mdc-list-item-text', staticClass],
        attrs: { ...attrs, tabIndex: tabbableOnListItemFocus ? tabIndex : -1 },
      },
      [
        renderText(primaryText, 'mdc-list-item__primary-text'),
        renderText(secondaryText, 'mdc-list-item__secondary-text'),
      ],
    );
  },
};
