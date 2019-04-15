export default {
  name: 'mdc-list-group-divider',

  functional: true,
  render(createElement) {
    return createElement('hr', {
      class: {
        'mdc-list-divider': 1,
        'mdc-list-group-divider': 1,
      },
    });
  },
};
