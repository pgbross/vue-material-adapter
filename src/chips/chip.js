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
  toRefs,
} from 'vue';
import { emitCustomEvent } from '../base/index.js';

let chipItemId_ = 0;

export default {
  name: 'mcw-chip',
  props: {
    leadingIcon: [String],
    trailingIcon: [String],
    avatar: { type: Boolean },
    shouldRemoveOnTrailingIconClick: {
      type: Boolean,
      default() {
        return true;
      },
    },
    disabled: { type: Boolean },
    selected: { type: Boolean },
  },
  setup(props, { slots }) {
    const uiState = reactive({
      classes: {
        'mdc-evolution-chip--disabled': props.disabled,
        'mdc-evolution-chip--selected': props.selected,
      },
      leadingClasses: {
        'mdc-chip__icon': 1,
        'mdc-chip__icon--leading': 1,
        'material-icons': 1,
      },
      styles: {},
      myListeners: {},
      root: undefined,
      checkmarkEl: undefined,
      trailingAction: undefined,
    });

    const registerChip = inject('registerChip');

    const mcwChipSet = inject('mcwChipSet');

    const id = chipItemId_++;

    let foundation;

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

    const hasleadingIcon = computed(() => {
      const slot = slots['leading-icon'];
      return (slot && slot[0]) || !!props.leadingIcon;
    });

    const hasTrailingAction = computed(() => {
      const slot = slots['trailing-icon'];

      return (slot && slot[0]) || !!props.trailingIcon;
    });

    const classes = computed(() => {
      return {
        ...uiState.classes,
        'mdc-evolution-chip--with-trailing-action': hasTrailingAction.value,
        'mdc-evolution-chip--with-primary-graphic':
          hasleadingIcon.value || mcwChipSet.role === 'listbox',
        'mdc-evolution-chip--with-primary-icon': hasleadingIcon.value,
        'mdc-evolution-chip--selectable': mcwChipSet.role === 'listbox',
        'mdc-evolution-chip--filter': mcwChipSet.role === 'listbox',
        'mdc-evolution-chip--with-avatar': props.avatar,
      };
    });

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

    const handleActionInteraction = event => {
      foundation.handleActionInteraction(event);
    };
    const handleActionNavigation = event => {
      foundation.handleActionNavigation(event);
    };

    const handleAnimationEnd = event => {
      foundation.handleAnimationEnd(event);
    };

    const handleTransitionEnd = event => {
      foundation.handleTransitionEnd(event);
    };

    onMounted(() => {
      foundation = new MDCChipFoundation(adapter);

      foundation.init();
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      classes,
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
      hasleadingIcon,
      hasTrailingAction,
      handleAnimationEnd,
      handleActionInteraction,
      handleActionNavigation,
      handleTransitionEnd,
    };
  },
};
