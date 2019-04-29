import { BasePlugin } from '@mcwv/base';
import { mcwCard } from './mcw-card.js';
import mcwCardActionButtons from './mdc-card-action-buttons.js';
import mcwCardActionIcons from './mdc-card-action-icons.js';
import mcwCardActions from './mdc-card-actions.js';
import mcwCardMedia from './mdc-card-media.js';
import mcwCardPrimaryAction from './mdc-card-primary-action.js';

export {
  mcwCard,
  mcwCardPrimaryAction,
  mcwCardMedia,
  mcwCardActions,
  mcwCardActionButtons,
  mcwCardActionIcons,
};

export default BasePlugin({
  mcwCard,
  mcwCardPrimaryAction,
  mcwCardMedia,
  mcwCardActions,
  mcwCardActionButtons,
  mcwCardActionIcons,
});
