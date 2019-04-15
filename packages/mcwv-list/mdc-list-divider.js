export default {
  name: 'mdc-list-divider',
  props: {
    inset: Boolean,
    padded: Boolean,
  },
  functional: true,
  render(
    createElement,
    {
      props: { inset, padded },
    },
  ) {
    return createElement('li', {
      class: {
        'mdc-list-divider': 1,
        'mdc-list-divider--inset': inset,
        'mdc-list-divider--padded': padded,
      },
      attrs: { role: 'separator' },
    });
  },
};
