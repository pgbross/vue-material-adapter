import { cssClasses } from './constants';

export default {
  name: 'mcw-top-app-bar-section',
  props: {
    align: {
      type: String,
      default() {
        return 'start';
      },
    },
    tag: {
      type: String,
      default() {
        return 'div';
      },
    },
  },
  functional: true,

  render(
    createElement,
    {
      props: { tag, align },
      scopedSlots,
      data: { attrs, staticClass },
    },
  ) {
    const classes = [cssClasses.SECTION, staticClass];

    align == 'start' && classes.push(cssClasses.SECTION_START);
    align == 'end' && classes.push(cssClasses.SECTION_END);

    return createElement(
      tag,
      { class: classes, attrs },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};
