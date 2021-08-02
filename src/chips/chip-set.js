import { MDCChipSetFoundation } from '@material/chips/chip-set/index.js';
import { announce } from '@material/dom/announce.js';
import { onBeforeUnmount, onMounted, provide, reactive, toRefs } from 'vue';
import { emitCustomEvent } from '../base/index.js';

export default {
  name: 'mcw-chip-set',
  props: {
    layout: { type: String, default: () => 'grid' },
    singleSelection: { type: Boolean },
    overflow: { type: Boolean },
  },

  setup(props) {
    const uiState = reactive({
      classes: { 'mdc-evolution-chip-set--overflow': props.overflow },
      // listn: 0,
      myListeners: {},
      attrs: {},
      root: undefined,
    });

    let foundation;
    // let slotObserver;

    const chips = [];

    const role = props.layout;

    if (role == 'listbox') {
      uiState.attrs['aria-orientation'] = 'horizontal';
      uiState.attrs['aria-multiselectable'] = props.singleSelection
        ? 'false'
        : 'true';
    }

    const registerChip = chip => {
      chips.push(chip);
    };
    provide('registerChip', registerChip);

    const isIndexValid = index => {
      return index > -1 && index < chips.length;
    };

    const adapter = {
      announceMessage: message => {
        announce(message);
      },

      emitEvent: (eventName, eventDetail) => {
        emitCustomEvent(
          uiState.root,
          eventName,
          eventDetail,
          true /* shouldBubble */,
        );
      },

      getAttribute: attributeName => uiState.root.getAttribute(attributeName),

      getChipActionsAtIndex: index => {
        if (!isIndexValid(index)) return [];
        return chips.value[index].getActions();
      },

      getChipCount: () => {
        return chips.length;
      },

      getChipIdAtIndex: index => {
        if (!isIndexValid(index)) {
          return '';
        }
        return chips.value[index].getElementID();
      },

      getChipIndexById: id =>
        chips.findIndex(chip => chip.getElementID() === id),

      isChipFocusableAtIndex: (index, action) => {
        if (!isIndexValid(index)) {
          return false;
        }
        return chips.value[index].isActionFocusable(action);
      },

      isChipSelectableAtIndex: (index, action) => {
        if (!isIndexValid(index)) {
          return false;
        }
        return chips.value[index].isActionSelectable(action);
      },
      isChipSelectedAtIndex: (index, action) => {
        if (!isIndexValid(index)) return false;
        return chips.value[index].isActionSelected(action);
      },
      removeChipAtIndex: index => {
        if (!isIndexValid(index)) {
          return;
        }
        // chips.value[index].destroy();
        chips.value[index].remove();
        chips.splice(index, 1);
      },
      setChipFocusAtIndex: (index, action, focus) => {
        if (!isIndexValid(index)) {
          return;
        }
        chips.value[index].setActionFocus(action, focus);
      },
      setChipSelectedAtIndex: (index, action, selected) => {
        if (!isIndexValid(index)) {
          return;
        }
        chips.value[index].setActionSelected(action, selected);
      },
      startChipAnimationAtIndex: (index, animation) => {
        if (!isIndexValid(index)) {
          return;
        }
        chips.value[index].startAnimation(animation);
      },
    };

    provide('mcwChipSet', {
      layout: props.layout,
      singleSelection: props.singleSelection,
    });

    onMounted(() => {
      foundation = new MDCChipSetFoundation(adapter);
      foundation.init();

      // uiState.myListeners = {
      //   [strings.INTERACTION_EVENT.toLowerCase()]: ({ detail }) =>
      //     foundation.handleChipInteraction(detail),
      //   [strings.SELECTION_EVENT.toLowerCase()]: ({ detail }) =>
      //     foundation.handleChipSelection(detail),
      //   [strings.REMOVAL_EVENT.toLowerCase()]: ({ detail }) =>
      //     foundation.handleChipRemoval(detail),
      //   [strings.NAVIGATION_EVENT.toLowerCase()]: ({ detail }) =>
      //     foundation.handleChipNavigation(detail),
      // };

      // // the chips could change outside of this component
      // // so use a mutation observer to trigger an update by
      // // incrementing the dependency variable "listn" referenced
      // // in the computed that selects the chip elements
      // slotObserver = new MutationObserver(() => {
      //   uiState.listn++;
      // });
      // slotObserver.observe(uiState.root, {
      //   childList: true,
      //   // subtree: true,
      // });
    });

    onBeforeUnmount(() => {
      // slotObserver.disconnect();
      foundation.destroy();
    });
    return { ...toRefs(uiState), role };
  },
};
