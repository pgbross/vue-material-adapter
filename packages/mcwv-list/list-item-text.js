export default {
  name: 'mcw-list-item-text',
  props: {
    tabbableOnListItemFocus: Boolean,
    tabIndex: {
      type: String,
      default() {
        return '-1';
      },
    },
    primaryText: String,
    secondaryText: String,
  },
  // functional: true,
  render(createElement) {
    const {
      $attrs: attrs,
      tabbableOnListItemFocus,
      tabIndex,
      primaryText,
      secondaryText,
    } = this;

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
      return renderText(primaryText, ['mdc-list-item__text']);
    }

    return createElement(
      'span',
      {
        class: ['mdc-list-item-text'],
        attrs: { ...attrs, tabIndex: tabbableOnListItemFocus ? tabIndex : -1 },
      },
      [
        renderText(primaryText, 'mdc-list-item__primary-text'),
        renderText(secondaryText, 'mdc-list-item__secondary-text'),
      ],
    );
  },
};
