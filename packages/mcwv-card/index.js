import { BasePlugin } from '@mcwv/base';
import mdcCardActionButtons from './mdc-card-action-buttons.js';
import mdcCardActionIcons from './mdc-card-action-icons.js';
import mdcCardActions from './mdc-card-actions.js';
import mdcCardMedia from './mdc-card-media.js';
import mdcCardPrimaryAction from './mdc-card-primary-action.js';
import mdcCard from './mdc-card.js';

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
