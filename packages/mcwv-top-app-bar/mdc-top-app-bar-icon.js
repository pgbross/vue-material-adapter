import { cssClasses } from './constants';

export default {
  name: 'mdc-top-app-bar-icon',
  props: { actionItem: Boolean, navIcon: Boolean },

  render(createElement) {
    const {
      $attrs: attrs,
      $scopedSlots: scopedSlots,
      actionItem,
      navIcon,
    } = this;
    const slot = (scopedSlots.default && scopedSlots.default()) || [];
    const nodes = slot.filter(({ tag }) => tag);
    if (nodes.length !== 1) {
      throw new Error('mdc-top-app-bar-icon expects exactly one child element');
    }

    const [v0] = nodes;
    const data = v0.data || (v0.data = {});
    const sc = [data.staticClass || ''];

    actionItem && sc.push(cssClasses.ACTION_ITEM);
    navIcon && sc.push(cssClasses.NAV_ICON);
    v0.data.staticClass = sc.join(' ');
    v0.data.attrs = { ...(v0.data.attrs || {}), ...attrs };
    return slot;
  },
};
