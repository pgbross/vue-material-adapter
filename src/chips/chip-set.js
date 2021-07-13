import { MDCChipSetFoundation } from '@material/chips/chip-set/foundation.js';
import { MDCChipFoundation } from '@material/chips/chip/foundation.js';
import { announce } from '@material/dom/announce.js';
import {
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
} from 'vue';

const { strings } = MDCChipFoundation;

export default {
  name: 'mcw-chip-set',
  props: {
    choice: [Boolean],
    filter: [Boolean],
    input: [Boolean],
  },

  setup(props) {
    const uiState = reactive({
      classes: {
        'mdc-chip-set': true,
        'mdc-chip-set--choice': props.choice,
        'mdc-chip-set--filter': props.filter,
        'mdc-chip-set--input': props.input,
      },
      listn: 0,
      myListeners: {},
      root: null,
    });

    let foundation;
    let slotObserver;

    const ce = ref([]);

    const addChipElement = item => {
      ce.value.push(item);
    };
    provide('addChipElement', addChipElement);

    const adapter = {
      announceMessage: message => {
        announce(message);
      },
      focusChipPrimaryActionAtIndex: index => {
        const chip = ce.value[index];

        chip && chip.focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: index => {
        const chip = ce.value[index];
        chip && chip.focusTrailingAction();
      },
      getChipListCount: () => {
        return ce.value.length;
      },
      getIndexOfChipById: chipId => {
        return ce.value.findIndex(({ id }) => id == chipId);
      },
      hasClass: className => uiState.root.classList.contains(className),
      isRTL: () =>
        window.getComputedStyle(uiState.root).getPropertyValue('direction') ===
        'rtl',
      removeChipAtIndex: index => {
        if (index >= 0 && index < ce.value.length) {
          // tell chip to remove itself from the DOM
          ce.value[index].remove();
          ce.value.splice(index, 1);
        }
      },

      removeFocusFromChipAtIndex: index => {
        ce.value[index].removeFocus();
      },

      selectChipAtIndex: (index, selected, shouldNotifyClients) => {
        if (index >= 0 && index < ce.value.length) {
          ce.value[index].setSelectedFromChipSet(selected, shouldNotifyClients);
        }
      },
    };

    provide('mcwChipSet', { filter: props.filter, input: props.input });

    onMounted(() => {
      foundation = new MDCChipSetFoundation(adapter);
      foundation.init();

      (uiState.myListeners = {
        [strings.INTERACTION_EVENT.toLowerCase()]: ({ detail }) =>
          foundation.handleChipInteraction(detail),
        [strings.SELECTION_EVENT.toLowerCase()]: ({ detail }) =>
          foundation.handleChipSelection(detail),
        [strings.REMOVAL_EVENT.toLowerCase()]: ({ detail }) =>
          foundation.handleChipRemoval(detail),
        [strings.NAVIGATION_EVENT.toLowerCase()]: ({ detail }) =>
          foundation.handleChipNavigation(detail),
      }),
        // the chips could change outside of this component
        // so use a mutation observer to trigger an update by
        // incrementing the dependency variable "listn" referenced
        // in the computed that selects the chip elements
        (slotObserver = new MutationObserver((mutationList, observer) => {
          uiState.listn++;
        }));
      slotObserver.observe(uiState.root, {
        childList: true,
        // subtree: true,
      });
    });

    onBeforeUnmount(() => {
      slotObserver.disconnect();
      foundation.destroy();
    });
    return { ...toRefs(uiState) };
  },
};
