import { BasePlugin } from '@mcwv/base';
import mdcCardActionButtons from './mdc-card-action-buttons.js';
import mdcCardActionIcons from './mdc-card-action-icons.js';
import mdcCardActions from './mdc-card-actions.js';
import mdcCardMedia from './mdc-card-media.js';
import mdcCardPrimaryAction from './mdc-card-primary-action.js';

const mdcCard = {
  name: 'mdc-card',
  props: {
    outlined: Boolean,
  },
  functional: true,
  render(
    createElement,
    {
      props: { outlined },
      data: { attrs, staticClass },
      scopedSlots,
    },
  ) {
    return createElement(
      'div',
      {
        class: [
          {
            'mdc-card': 1,
            'mdc-card--outlined': outlined,
          },
          staticClass,
        ],
        attrs,
      },
      scopedSlots.default && scopedSlots.default(),
    );
  },
};

export {
  mdcCard,
  mdcCardPrimaryAction,
  mdcCardMedia,
  mdcCardActions,
  mdcCardActionButtons,
  mdcCardActionIcons,
};

export default BasePlugin({
  mdcCard,
  mdcCardPrimaryAction,
  mdcCardMedia,
  mdcCardActions,
  mdcCardActionButtons,
  mdcCardActionIcons,
});
