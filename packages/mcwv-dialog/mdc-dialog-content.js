import { cssClasses } from './constants';

export default {
  name: 'mdc-dialog-content',
  functional: true,
  props: {
    tag: {
      type: String,
      default() {
        return 'div';
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
    if (slots.content) {
      const content = createElement(
        tag,
        { class: classes, attrs },
        slots.default(),
      );
      return slots.content({ id, content });
    }

    // if no scope, parent will create it
    // note, can't use same element type as that would be an infinite loop
    return createElement(
      'template',
      {
        props: { tag: 'mdc-dialog-content' },
        attrs,
        class: [staticClass, cssClasses.CONTENT],
      },
      slots.default && slots.default(),
    );
  },
};
