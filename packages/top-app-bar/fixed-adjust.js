export default {
  name: 'mcw-fixed-adjust',
  functional: true,
  props: {
    tag: { type: String, default: 'main' },
    dense: Boolean,
    short: Boolean,
    prominent: Boolean,
  },

  render(
    createElement,
    {
      props: { short, dense, prominent, tag },
      scopedSlots,
      data: { attrs, staticStyle, staticClass },
    },
  ) {
    const base = 'mdc-top-app-bar';
    const suffix = '-fixed-adjust';

    return createElement(
      tag,
      {
        class: [
          {
            [base + '--short' + suffix]: short,
            [base + '--dense' + suffix]: dense && !prominent,
            [base + '--dense-prominent' + suffix]: dense && prominent,
            [base + '--prominent' + suffix]: !dense && prominent,
            [base + '-' + suffix]: !short && !dense && !prominent,
          },
          staticClass,
        ],
        style: staticStyle,
        attrs,
      },
      scopedSlots.default?.(),
    );
  },
};
