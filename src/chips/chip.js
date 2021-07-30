import { MDCChipFoundation } from '@material/chips/chip/foundation.js';
// import { MDCChipTrailingActionFoundation } from '@material/chips/trailingaction/foundation.js';
import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRef,
  toRefs,
  watch,
} from 'vue';
import { emitCustomEvent } from '../base/index.js';
import { useRipplePlugin } from '../ripple/ripple-plugin.js';

const { strings } = MDCChipFoundation;
// const { strings: trailingActionStrings } = MDCChipTrailingActionFoundation;

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
  setup(props, { slots }) {
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

    const mcwChipSet = inject('mcwChipSet');
    const addChipElement = inject('addChipElement');

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

    let trailingAction_;
    let leadingIcon_;

    const selected = computed({
      get() {
        return foundation.isSelected();
      },
      set(nv) {
        foundation.setSelected(nv);
      },
    });

    const isFilter = computed(() => mcwChipSet?.filter);

    const isInput = computed(() => mcwChipSet?.input);

    const haveleadingIcon = computed(() => {
      const slot = slots['leading-icon'];
      return (slot && slot[0]) || !!props.leadingIcon;
    });

    const havetrailingIcon = computed(() => {
      const slot = slots['trailing-icon'];

      return isInput.value && ((slot && slot[0]) || !!props.trailingIcon);
    });

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),

      addClassToLeadingIcon: className => {
        if (leadingIcon_) {
          leadingIcon_.classList.add(className);
        }
      },
      eventTargetHasClass: (target, className) =>
        target.classList.contains(className),
      focusPrimaryAction: () => {
        uiState.root.querySelector(strings.PRIMARY_ACTION_SELECTOR)?.focus();
      },
      focusTrailingAction: () => {
        trailingAction_?.focus();
      },
      getAttribute: attribute => uiState.root.getAttribute(attribute),
      getCheckmarkBoundingClientRect: () => {
        return uiState.checkmarkEl?.getBoundingClientRect();
      },
      getComputedStyleValue: propertyName =>
        window.getComputedStyle(uiState.root).getPropertyValue(propertyName),
      getRootBoundingClientRect: () => uiState.root.getBoundingClientRect(),
      hasClass: className => uiState.root.classList.contains(className),
      hasLeadingIcon: () => !!haveleadingIcon.value,
      isRTL: () =>
        window.getComputedStyle(uiState.root).getPropertyValue('direction') ===
        'rtl',
      isTrailingActionNavigable: () => {
        if (trailingAction_) {
          return uiState.trailingAction?.isNavigable();
        }
        return false;
      },

      notifyInteraction: () => {
        emitCustomEvent(
          uiState.root,
          strings.INTERACTION_EVENT,
          {
            chipId: id,
          },
          true,
        );
      },
      notifyNavigation: (key, source) =>
        emitCustomEvent(
          uiState.root,
          strings.NAVIGATION_EVENT,
          {
            chipId: id,
            key,
            source,
          },
          true,
        ),
      notifyRemoval: removedAnnouncement => {
        emitCustomEvent(
          uiState.root,
          'mdc-chip:removal',
          { chipId: id, removedAnnouncement },
          true,
        );
      },
      notifySelection: (selected, shouldIgnore) =>
        emitCustomEvent(
          uiState.root,
          strings.SELECTION_EVENT,
          { chipId: id, selected: selected, shouldIgnore },
          true /* shouldBubble */,
        ),
      notifyTrailingIconInteraction: () => {
        emitCustomEvent(
          uiState.root,
          strings.TRAILING_ICON_INTERACTION_EVENT,
          {
            chipId: id,
          },
          true,
        );
      },
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      removeClassFromLeadingIcon: className => {
        if (leadingIcon_) {
          leadingIcon_.classList.remove(className);
        }
      },
      removeTrailingActionFocus: () => {
        uiState.trailingAction?.removeFocus();
      },
      setPrimaryActionAttr: (attribute, value) =>
        (uiState.primaryAttrs = {
          ...uiState.primaryAttrs,
          [attribute]: value,
        }),

      setStyleProperty: (property, value) =>
        (uiState.styles = { ...uiState.styles, [property]: value }),
    };

    const setSelectedFromChipSet = (selected, shouldNotifyClients) => {
      foundation.setSelectedFromChipSet(selected, shouldNotifyClients);
    };

    const focusPrimaryAction = () => foundation.focusPrimaryAction();

    const focusTrailingAction = () => foundation.focusTrailingAction();

    const removeFocus = () => foundation.removeFocus();

    const toggleSelected = () => foundation.toggleSelected();

    const isSelected = () => foundation.isSelected();

    const remove = () => {
      const parent = uiState.root.parentNode;
      if (parent != undefined) {
        uiState.root.remove();
      }
    };

    watch(
      () => props.shouldRemoveOnTrailingIconClick,
      nv => {
        foundation.setShouldRemoveOnTrailingIconClick(nv);
      },
    );

    addChipElement({
      id,
      removeFocus,
      focusPrimaryAction,
      focusTrailingAction,
      setSelectedFromChipSet,
      remove,
    });

    onMounted(() => {
      leadingIcon_ = uiState.root.querySelector(strings.LEADING_ICON_SELECTOR);

      trailingAction_ = uiState.root.querySelector(
        strings.TRAILING_ACTION_SELECTOR,
      );

      foundation = new MDCChipFoundation(adapter);

      uiState.myListeners = {
        click: event_ => {
          foundation.handleClick(event_);
        },
        keydown: event_ => foundation.handleKeydown(event_),
        transitionend: event_ => foundation.handleTransitionEnd(event_),
        focusin: event_ => foundation.handleFocusIn(event_),
        focusout: event_ => foundation.handleFocusOut(event_),
      };

      // if (trailingAction_) {
      //   uiState.myListeners[
      //     trailingActionStrings.INTERACTION_EVENT.toLowerCase()
      //   ] = event_ => foundation.handleTrailingActionInteraction(event_);

      //   uiState.myListeners[
      //     trailingActionStrings.NAVIGATION_EVENT.toLowerCase()
      //   ] = event_ => foundation.handleTrailingActionNavigation(event_);
      // }

      foundation.init();

      uiState.primaryAttrs.tabindex = isFilter.value ? 0 : -1;

      if (
        props.shouldRemoveOnTrailingIconClick !==
        foundation.getShouldRemoveOnTrailingIconClick()
      ) {
        foundation.setShouldRemoveOnTrailingIconClick(
          props.shouldRemoveOnTrailingIconClick,
        );
      }
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      classes,
      styles,
      id,
      isInput,
      isFilter,
      selected,
      haveleadingIcon,
      havetrailingIcon,
      remove,
      isSelected,
      toggleSelected,
      removeFocus,
      focusPrimaryAction,
      focusTrailingAction,
      setSelectedFromChipSet,
    };
  },
};
