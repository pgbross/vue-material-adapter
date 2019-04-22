import { cssClasses } from './constants';

export default {
  name: 'mdc-dialog-footer',
  functional: true,
  props: {
    tag: {
      type: String,
      default() {
        return 'footer';
      },
    },
  },

  render(createElement, context) {
    const {
      scopedSlots: slots,
      props: { id, tag },
      data: { class: classes, staticClass, attrs },
    } = context;

    // if we have the scope, just defer to it
    if (slots.footer) {
      const content = createElement(
        tag,
        { class: classes, attrs },
        slots.default(),
      );
      return slots.footer({ id, content });
    }

    // if no scope, parent will create it
    // note, can't use same element type as that would be an infinite loop
    return createElement(
      'template',
      {
        props: { tag: 'mdc-dialog-footer' },
        attrs,
        class: [staticClass, cssClasses.ACTIONS],
      },
      slots.default && slots.default(),
    );
  },
};
