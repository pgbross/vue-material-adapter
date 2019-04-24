import { cssClasses } from './constants';

export default {
  name: 'mdc-top-app-bar-icon',
  props: { actionItem: Boolean, navIcon: Boolean },
  functional: true,

  render(
    createElement,
    {
      props: { actionItem, navIcon },
      scopedSlots,
      data: { attrs },
    },
  ) {
    const slot = scopedSlots.default && scopedSlots.default();

    if (slot) {
      const [v0] = slot;
      const sc = [v0.staticClass || ''];
      actionItem && sc.push(cssClasses.ACTION_ITEM);
      navIcon && sc.push(cssClasses.NAV_ICON);
      v0.data.staticClass = sc.join(' ');
      v0.data.attrs = { ...(v0.data.attrs || {}), ...attrs };
      return slot;
    }

    // if no slot just return an empty text node
    return createElement('');
  },
};
