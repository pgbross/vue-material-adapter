import { MDCChipSetFoundation } from '@material/chips/chip-set/index.js';
import { announce } from '@material/dom/announce.js';
import { onBeforeUnmount, onMounted, provide, reactive, toRefs } from 'vue';
import { emitCustomEvent } from '../base/index.js';

export default {
  name: 'mcw-chip-set',
  props: {
    multiSelectable: { type: Boolean },
    orientation: { type: String, default: () => 'horizontal' },
    overflow: { type: Boolean },
    role: { type: String, default: () => 'grid' },
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

    if (props.role == 'listbox') {
      uiState.attrs['aria-orientation'] = props.orientation;

      if (props.multiSelectable) {
        uiState.attrs['aria-multiselectable'] = 'true';
      }
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
        return chips[index].getActions();
      },

      getChipCount: () => {
        return chips.length;
      },

      getChipIdAtIndex: index => {
        if (!isIndexValid(index)) {
          return '';
        }
        return chips[index].getElementID();
      },

      getChipIndexById: id =>
        chips.findIndex(chip => chip.getElementID() === id),

      isChipFocusableAtIndex: (index, action) => {
        if (!isIndexValid(index)) {
          return false;
        }
        return chips[index].isActionFocusable(action);
      },

      isChipSelectableAtIndex: (index, action) => {
        if (!isIndexValid(index)) {
          return false;
        }
        return chips[index].isActionSelectable(action);
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
        chips[index].remove();
        chips.splice(index, 1);
      },
      setChipFocusAtIndex: (index, action, focus) => {
        if (!isIndexValid(index)) {
          return;
        }
        chips[index].setActionFocus(action, focus);
      },
      setChipSelectedAtIndex: (index, action, selected) => {
        if (!isIndexValid(index)) {
          return;
        }
        chips[index].setActionSelected(action, selected);
      },
      startChipAnimationAtIndex: (index, animation) => {
        if (!isIndexValid(index)) {
          return;
        }
        chips[index].startAnimation(animation);
      },
    };

    provide('mcwChipSet', {
      role: props.role,
      singleSelection: !props.multiSelectable,
    });

    const handleChipAnimation = event => {
      foundation.handleChipAnimation(event);
    };
    const handleChipInteraction = event => {
      foundation.handleChipInteraction(event);
    };
    const handleChipNavigation = event =>
      foundation.handleChipNavigation(event);

    /** Removes the chip at the given index. */
    const removeChip = index => {
      if (!isIndexValid(index)) {
        return;
      }
      // chips.value[index].destroy();
      chips[index].remove();
      chips.splice(index, 1);
    };

    onMounted(() => {
      foundation = new MDCChipSetFoundation(adapter);
      foundation.init();
    });

    onBeforeUnmount(() => {
      // slotObserver.disconnect();
      foundation.destroy();
    });
    return {
      ...toRefs(uiState),
      handleChipAnimation,
      handleChipInteraction,
      handleChipNavigation,

      removeChip,
    };
  },
};
