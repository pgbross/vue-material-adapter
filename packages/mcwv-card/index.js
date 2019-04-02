import { BasePlugin } from '@mcwv/base';
import mdcCardActionButton from './mdc-card-action-button.vue';
import mdcCardActionButtons from './mdc-card-action-buttons.vue';
import mdcCardActionIcon from './mdc-card-action-icon.vue';
import mdcCardActionIcons from './mdc-card-action-icons.vue';
import mdcCardActions from './mdc-card-actions.vue';
import mdcCardHeader from './mdc-card-header.vue';
import mdcCardMedia from './mdc-card-media.vue';
import mdcCardPrimaryAction from './mdc-card-primary-action.vue';
import mdcCardSubtitle from './mdc-card-subtitle.vue';
import mdcCardText from './mdc-card-text.vue';
import mdcCardTitle from './mdc-card-title.vue';
import mdcCard from './mdc-card.vue';

export {
  mdcCard,
  mdcCardPrimaryAction,
  mdcCardMedia,
  mdcCardHeader,
  mdcCardTitle,
  mdcCardSubtitle,
  mdcCardText,
  mdcCardActions,
  mdcCardActionButtons,
  mdcCardActionButton,
  mdcCardActionIcons,
  mdcCardActionIcon,
};

export default BasePlugin({
  mdcCard,
  mdcCardPrimaryAction,
  mdcCardMedia,
  mdcCardHeader,
  mdcCardTitle,
  mdcCardSubtitle,
  mdcCardText,
  mdcCardActions,
  mdcCardActionButtons,
  mdcCardActionButton,
  mdcCardActionIcons,
  mdcCardActionIcon,
});
