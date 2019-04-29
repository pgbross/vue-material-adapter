export default {
  name: 'mcw-drawer-divider',
  functional: true,
  render(createElement) {
    return createElement('hr', {
      class: {
        'mdc-list-divider': 1,
      },
    });
  },
};
