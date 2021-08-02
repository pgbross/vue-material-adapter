import { MDCChipFoundation } from '@material/chips/chip/foundation.js';
// import { MDCChipTrailingActionFoundation } from '@material/chips/trailingaction/foundation.js';
import {
  computed,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  toRef,
  toRefs,
} from 'vue';
import { emitCustomEvent } from '../base/index.js';
import { useRipplePlugin } from '../ripple/ripple-plugin.js';

let chipItemId_ = 0;

export default {
  name: 'mcw-chip',
  props: {
    leadingIcon: [String],
    trailingIcon: [String],
    shouldRemoveOnTrailingIconClick: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  setup() {
    const uiState = reactive({
      classes: {
        'mdc-chip': true,
      },
      leadingClasses: {
        'mdc-chip__icon': 1,
        'mdc-chip__icon--leading': 1,
        'material-icons': 1,
      },
      styles: {},
      primaryAttrs: {},
      trailingAttrs: {},
      myListeners: {},
      root: undefined,
      checkmarkEl: undefined,
      trailingAction: undefined,
    });

    const registerChip = inject('registerChip');

    const { classes: rippleClasses, styles: rippleStyles } = useRipplePlugin(
      toRef(uiState, 'root'),
    );

    const id = chipItemId_++;

    let foundation;

    const classes = computed(() => {
      return { ...rippleClasses.value, ...uiState.classes };
    });

    const styles = computed(() => {
      return { ...rippleStyles.value, ...uiState.styles };
    });

    const actions = new Map();

    const registerAction = action => {
      actions.set(action.actionType(), action);
    };

    provide('registerAction', registerAction);

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),

      emitEvent: (eventName, eventDetail) => {
        emitCustomEvent(
          uiState.root,
          eventName,
          eventDetail,
          true /* shouldBubble */,
        );
      },

      getActions: () => {
        const actionKeys = [];
        for (const [key] of actions) {
          actionKeys.push(key);
        }
        return actionKeys;
      },

      getAttribute: attributeName => uiState.root.getAttribute(attributeName),
      getElementID: () => uiState.root.id,
      getOffsetWidth: () => {
        return uiState.root.offsetWidth;
      },

      hasClass: className => uiState.root.classList.contains(className),

      isActionSelectable: actionType => {
        const action = actions.get(actionType);
        if (action) {
          return action.isSelectable();
        }
        return false;
      },

      isActionSelected: actionType => {
        const action = actions.get(actionType);
        if (action) {
          return action.isSelected();
        }
        return false;
      },

      isActionFocusable: actionType => {
        const action = actions.get(actionType);
        if (action) {
          return action.isFocusable();
        }
        return false;
      },
      isActionDisabled: actionType => {
        const action = actions.get(actionType);
        if (action) {
          return action.isDisabled();
        }
        return false;
      },

      isRTL: () =>
        window.getComputedStyle(uiState.root).getPropertyValue('direction') ===
        'rtl',

      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      setActionDisabled: (actionType, isDisabled) => {
        const action = actions.get(actionType);
        if (action) {
          action.setDisabled(isDisabled);
        }
      },
      setActionFocus: (actionType, behavior) => {
        const action = actions.get(actionType);
        if (action) {
          action.setFocus(behavior);
        }
      },
      setActionSelected: (actionType, isSelected) => {
        const action = actions.get(actionType);
        if (action) {
          action.setSelected(isSelected);
        }
      },

      setStyleProperty: (property, value) =>
        (uiState.styles = { ...uiState.styles, [property]: value }),
    };

    /** Exposed to be called by the parent chip set. */
    const remove = () => {
      const parent = uiState.root.parentNode;
      if (parent !== null) {
        uiState.root.remove();
      }
    };

    /** Returns the ActionTypes for the encapsulated actions. */
    const getActions = () => {
      return foundation.getActions();
    };

    /** Returns the ID of the root element. */
    const getElementID = () => {
      return foundation.getElementID();
    };

    const isDisabled = () => {
      return foundation.isDisabled();
    };

    const setDisabled = isDisabled => {
      foundation.setDisabled(isDisabled);
    };

    /** Returns the focusability of the action. */
    const isActionFocusable = action => {
      return foundation.isActionFocusable(action);
    };

    /** Returns the selectability of the action. */
    const isActionSelectable = action => {
      return foundation.isActionSelectable(action);
    };

    /** Returns the selected state of the action. */
    const isActionSelected = action => {
      return foundation.isActionSelected(action);
    };

    /** Sets the focus behavior of the action. */
    const setActionFocus = (action, focus) => {
      foundation.setActionFocus(action, focus);
    };

    /** Sets the selected state of the action. */
    const setActionSelected = (action, isSelected) => {
      foundation.setActionSelected(action, isSelected);
    };

    /** Starts the animation on the chip. */
    const startAnimation = animation => {
      foundation.startAnimation(animation);
    };
    registerChip(getCurrentInstance().ctx);
    onMounted(() => {
      foundation = new MDCChipFoundation(adapter);

      // uiState.myListeners = {
      //   click: event_ => {
      //     foundation.handleClick(event_);
      //   },
      //   keydown: event_ => foundation.handleKeydown(event_),
      //   transitionend: event_ => foundation.handleTransitionEnd(event_),
      //   focusin: event_ => foundation.handleFocusIn(event_),
      //   focusout: event_ => foundation.handleFocusOut(event_),
      // };

      // if (trailingAction_) {
      //   uiState.myListeners[
      //     trailingActionStrings.INTERACTION_EVENT.toLowerCase()
      //   ] = event_ => foundation.handleTrailingActionInteraction(event_);

      //   uiState.myListeners[
      //     trailingActionStrings.NAVIGATION_EVENT.toLowerCase()
      //   ] = event_ => foundation.handleTrailingActionNavigation(event_);
      // }

      foundation.init();

      // uiState.primaryAttrs.tabindex = isFilter.value ? 0 : -1;

      // if (
      //   props.shouldRemoveOnTrailingIconClick !==
      //   foundation.getShouldRemoveOnTrailingIconClick()
      // ) {
      //   foundation.setShouldRemoveOnTrailingIconClick(
      //     props.shouldRemoveOnTrailingIconClick,
      //   );
      // }
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    // return () => {
    //   return h('div', {}, ['test']);
    // };

    return {
      ...toRefs(uiState),
      classes,
      styles,
      id,
      remove,
      getActions,
      getElementID,
      isDisabled,
      setDisabled,
      isActionFocusable,
      isActionSelectable,
      isActionSelected,
      setActionFocus,
      setActionSelected,
      startAnimation,
      // isInput,
      // isFilter,
      // selected,
      // haveleadingIcon,
      // havetrailingIcon,
      // remove,
      // isSelected,
      // toggleSelected,
      // removeFocus,
      // focusPrimaryAction,
      // focusTrailingAction,
      // setSelectedFromChipSet,
    };
  },
};
