import { cssClasses } from './constants';

export default {
  name: 'mdc-top-app-bar-row',
  props: {
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
      props: { tag },
      scopedSlots,
      data: { attrs, staticClass },
    },
  ) {
    return createElement(
      tag,
      { class: [cssClasses.ROW, staticClass], attrs },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};
