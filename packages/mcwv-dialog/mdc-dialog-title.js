import { cssClasses } from './constants';

export default {
  name: 'mdc-dialog-title',
  functional: true,
  props: {
    tag: {
      type: String,
      default() {
        return 'h2';
      },
    },
    id: {},
  },

  render(createElement, context) {
    const {
      scopedSlots: slots,
      props: { id, tag },
      data: { class: classes, staticClass, attrs },
    } = context;

    // if we have the scope, just defer to it
    if (slots.title) {
      const content = createElement(
        tag,
        { class: classes, attrs },
        slots.default(),
      );
      return slots.title({ id, content });
    }

    // if no scope, parent will create it
    // note, can't use same element type as that would be an infinite loop
    return createElement(
      'template',
      {
        props: { tag: 'mdc-dialog-title' },
        attrs,
        class: [staticClass, cssClasses.TITLE],
      },
      slots.default && slots.default(),
    );
  },
};
