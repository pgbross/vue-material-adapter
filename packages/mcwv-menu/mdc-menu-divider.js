export default {
  name: 'mdc-menu-divider',
  functional: true,
  render(createElement, { slots }) {
    return createElement('li', {
      class: {
        'mdc-menu-divider': 1,
        'mdc-list-divider': 1,
      },
      attrs: { role: 'separator' },
    });
  },
};
