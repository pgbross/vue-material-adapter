import { BasePlugin } from '../base/index.js';
import mcwCardActionButtons from './card-action-buttons.js';
import mcwCardActionIcons from './card-action-icons.js';
import mcwCardActions from './card-actions.js';
import mcwCardMedia from './card-media.js';
import mcwCardPrimaryAction from './card-primary-action.js';
import mcwCard from './card.js';

export { default as mcwCardActionButtons } from './card-action-buttons.js';
export { default as mcwCardActionIcons } from './card-action-icons.js';
export { default as mcwCardActions } from './card-actions.js';
export { default as mcwCardMedia } from './card-media.js';
export { default as mcwCardPrimaryAction } from './card-primary-action.js';
export { default as mcwCard } from './card.js';

export default BasePlugin({
  mcwCard,
  mcwCardPrimaryAction,
  mcwCardMedia,
  mcwCardActions,
  mcwCardActionButtons,
  mcwCardActionIcons,
});
