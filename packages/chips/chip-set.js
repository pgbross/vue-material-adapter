import { MDCChipSetFoundation } from '@material/chips/chip-set/foundation';
import { MDCChipFoundation } from '@material/chips/chip/foundation';
import { announce } from '@material/dom/announce';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  toRefs,
} from '@vue/composition-api';

const { strings } = MDCChipFoundation;
const { CHIP_SELECTOR } = MDCChipSetFoundation.strings;

let idCounter = 0;

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
      myListeners: null,
      root: null,
    });

    let foundation;
    let slotObserver;

    const chipElements = computed(() => {
      // eslint-disable-next-line no-unused-vars
      const xx = uiState.listn; // for dependency

      return [].slice.call(uiState.root.querySelectorAll(CHIP_SELECTOR));
    });

    const chips_ = computed(() => {
      return chipElements.value.map(el => {
        el.id = el.id || `mdc-chip-${++idCounter}`;

        return el.__vue__;
      });
    });

    const adapter = {
      announceMessage: message => {
        announce(message);
      },
      focusChipPrimaryActionAtIndex: index => {
        const chip = chips_.value[index];

        chip && chip.focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: index => {
        const chip = chips_.value[index];
        chip && chip.focusTrailingAction();
      },
      getChipListCount: () => {
        return chips_.value.length;
      },
      getIndexOfChipById: chipId => {
        return chips_.value.findIndex(({ id }) => id == chipId);
      },
      hasClass: className => uiState.root.classList.contains(className),
      isRTL: () =>
        window.getComputedStyle(uiState.root).getPropertyValue('direction') ===
        'rtl',
      removeChipAtIndex: index => {
        if (index >= 0 && index < chips_.value.length) {
          // tell chip to remove itself from the DOM
          chips_.value[index].remove();
          chips_.value.splice(index, 1);
        }
      },

      removeFocusFromChipAtIndex: index => {
        chips_.value[index].removeFocus();
      },

      selectChipAtIndex: (index, selected, shouldNotifyClients) => {
        if (index >= 0 && index < chips_.value.length) {
          chips_.value[index].setSelectedFromChipSet(
            selected,
            shouldNotifyClients,
          );
        }
      },
    };

    provide('mcwChipSet', { filter: props.filter, input: props.input });

    onMounted(() => {
      // trigger computed
      chips_.value;
      foundation = new MDCChipSetFoundation(adapter);
      foundation.init();

      (uiState.myListeners = {
        [strings.INTERACTION_EVENT]: ({ detail }) =>
          foundation.handleChipInteraction(detail),
        [strings.SELECTION_EVENT]: ({ detail }) =>
          foundation.handleChipSelection(detail),
        [strings.REMOVAL_EVENT]: ({ detail }) =>
          foundation.handleChipRemoval(detail),
        [strings.NAVIGATION_EVENT]: ({ detail }) =>
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
