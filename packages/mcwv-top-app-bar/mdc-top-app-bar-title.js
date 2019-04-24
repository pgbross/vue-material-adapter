import { cssClasses } from './constants';

export default {
  name: 'mdc-top-app-bar-title',
  props: {
    tag: {
      type: String,
      default() {
        return 'span';
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
      { class: [cssClasses.TITLE, staticClass], attrs },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};
