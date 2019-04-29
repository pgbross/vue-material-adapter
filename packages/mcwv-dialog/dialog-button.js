import { cssClasses } from './constants';

export default {
  name: 'mcw-dialog-button',
  functional: true,
  props: {
    action: String,
    isDefault: Boolean,
  },

  render(
    createElement,
    {
      props: { action, isDefault },
      data: { staticClass, attrs },
      scopedSlots,
    },
  ) {
    return createElement(
      'mcw-button',
      {
        class: [
          staticClass,
          cssClasses.BUTTON,
          { [cssClasses.DEFAULT_BUTTON]: isDefault },
        ],
        attrs: { ...attrs, 'data-mdc-dialog-action': action },
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};
2;
