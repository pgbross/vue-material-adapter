export default {
  name: 'mdc-layout-grid',
  props: {
    'fixed-column-width': Boolean,
    'align-left': Boolean,
    'align-right': Boolean,
  },
  functional: true,
  render(
    createElement,
    {
      props: { fixedColumnWidth, alignLeft, alignRight },
      slots,
    },
  ) {
    return createElement(
      'div',
      {
        class: {
          'mdc-layout-grid': true,
          'mdc-layout-grid--fixed-column-width': fixedColumnWidth,
          'mdc-layout-grid--align-left': alignLeft,
          'mdc-layout-grid--align-right': alignRight,
        },
      },
      [
        createElement(
          'div',
          { class: { 'mdc-layout-grid__inner': 1 } },
          slots().default,
        ),
      ],
    );
  },
};
