/* eslint-disable quote-props */
export default {
  name: 'mcw-menu-item',
  props: {
    disabled: Boolean,
  },
  functional: true,
  render(createElement, { props: { disabled }, scopedSlots }) {
    return createElement(
      'li',
      {
        class: {
          'mdc-menu-divider': 1,
          'mdc-list-divider': 1,
        },
        attrs: {
          tabindex: disabled ? '-1' : '0',
          'aria-disabled': disabled,
          role: 'menuitem',
        },
      },
      scopedSlots.default?.(),
    );
  },
};
