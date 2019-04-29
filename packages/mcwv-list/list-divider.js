export default {
  name: 'mcw-list-divider',
  props: {
    inset: Boolean,
    padded: Boolean,
    role: {
      type: String,
      default() {
        return 'separator';
      },
    },
    tag: {
      type: String,
      default() {
        return 'li';
      },
    },
  },
  functional: true,
  render(
    createElement,
    {
      props: { tag, inset, padded, role, staticClass, attrs },
    },
  ) {
    return createElement(tag, {
      class: [
        'mdc-list-divider',
        staticClass,
        {
          'mdc-list-divider--inset': inset,
          'mdc-list-divider--padded': padded,
        },
      ],
      attrs: { ...attrs, role },
    });
  },
};
