export default {
  name: 'mdc-fixed-adjust',
  functional: true,
  props: {
    tag: { type: String, default: 'main' },
    dense: Boolean,
    short: Boolean,
    prominent: Boolean,
  },

  render(
    h,
    {
      props: { short, dense, prominent, tag },
      slots,
      data: { attrs },
    },
  ) {
    const base = 'mdc-top-app-bar';
    const suffix = '-fixed-adjust';
    return h(
      tag,
      {
        class: {
          'mdc-fixed-adjust': true,
          [base + '--short' + suffix]: short,
          [base + '--dense' + suffix]: dense && !prominent,
          [base + '--dense-prominent' + suffix]: dense && prominent,
          [base + '--prominent' + suffix]: !dense && prominent,
          [base + '-' + suffix]: !short && !dense && !prominent,
        },
        attrs,
      },
      slots().default,
    );
  },
};
