export default {
  name: 'mdc-drawer-divider',
  functional: true,
  render(createElement) {
    return createElement('hr', {
      class: {
        'mdc-list-divider': 1,
      },
    });
  },
};
