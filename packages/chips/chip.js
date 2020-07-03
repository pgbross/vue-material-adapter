import { MDCChipFoundation } from '@material/chips/chip/foundation';
import { emitCustomEvent } from '~/base/index.js';
import {
  toRefs,
  reactive,
  onMounted,
  onBeforeUnmount,
  computed,
  ref,
  inject,
  watch,
} from '@vue/composition-api';
import { useRipplePlugin } from '~/ripple/ripple-plugin';

const {
  INTERACTION_EVENT,
  SELECTION_EVENT,
  REMOVAL_EVENT,
  TRAILING_ICON_INTERACTION_EVENT,
  PRIMARY_ACTION_SELECTOR,
  TRAILING_ACTION_SELECTOR,
  NAVIGATION_EVENT,
} = MDCChipFoundation.strings;

const { strings } = MDCChipFoundation;

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
  inject: ['mcwChipSet'],

  setup(props, { slots }) {
    const root = ref(null);
    const checkmarkEl = ref(null);
    const trailingAction = ref(null);

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
      myListeners: null,
    });

    const mcwChipSet = inject('mcwChipSet');

    const { classes: rippleClasses, styles: rippleStyles } = useRipplePlugin(
      root,
    );

    let foundation;

    const classes = computed(() => {
      return { ...rippleClasses.value, ...uiState.classes };
    });

    const styles = computed(() => {
      return { ...rippleStyles.value, ...uiState.styles };
    });

    let trailingAction_;
    let leadingIcon_;

    const id = computed(() => {
      return root.value.id;
    });

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
        root.value.querySelector(PRIMARY_ACTION_SELECTOR)?.focus();
      },
      focusTrailingAction: () => {
        trailingAction_?.focus();
      },
      getAttribute: attr => root.value.getAttribute(attr),
      getCheckmarkBoundingClientRect: () => {
        return checkmarkEl.value?.getBoundingClientRect();
      },
      getComputedStyleValue: propertyName =>
        window.getComputedStyle(root.value).getPropertyValue(propertyName),
      getRootBoundingClientRect: () => root.value.getBoundingClientRect(),
      hasClass: className => root.value.classList.contains(className),
      hasLeadingIcon: () => !!haveleadingIcon.value,
      hasTrailingAction: () => !!trailingAction_,
      isRTL: () =>
        window.getComputedStyle(root.value).getPropertyValue('direction') ===
        'rtl',

      notifyInteraction: () => {
        emitCustomEvent(
          root.value,
          INTERACTION_EVENT,
          {
            chipId: id.value,
          },
          true,
        );
      },
      notifyNavigation: (key, source) =>
        emitCustomEvent(
          root.value,
          NAVIGATION_EVENT,
          {
            chipId: id.value,
            key,
            source,
          },
          true,
        ),
      notifyRemoval: removedAnnouncement => {
        emitCustomEvent(
          root.value,
          REMOVAL_EVENT,
          { chipId: id.value, root: root.value, removedAnnouncement },
          true,
        );
      },
      notifySelection: selected =>
        emitCustomEvent(
          root.value,
          SELECTION_EVENT,
          { chipId: id.value, selected: selected },
          true /* shouldBubble */,
        ),
      notifyTrailingIconInteraction: () => {
        emitCustomEvent(
          root.value,
          TRAILING_ICON_INTERACTION_EVENT,
          {
            chipId: id.value,
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
        trailingAction.value?.removeFocus();
      },
      setPrimaryActionAttr: (attr, value) =>
        (uiState.primaryAttrs = { ...uiState.primaryAttrs, [attr]: value }),

      setStyleProperty: (property, value) =>
        (uiState.styles = { ...uiState.styles, [property]: value }),
      setTrailingActionAttr: (attr, value) => {
        if (trailingAction_) {
          trailingAction_.setAttribute(attr, value);
        }
      },
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
      const parent = root.value.parentNode;
      if (parent != null) {
        parent.removeChild(root.value);
      }
    };

    watch(
      () => props.shouldRemoveOnTrailingIconClick,
      nv => {
        foundation.setShouldRemoveOnTrailingIconClick(nv);
      },
    );

    onMounted(() => {
      trailingAction_ = root.value.querySelector(TRAILING_ACTION_SELECTOR);
      leadingIcon_ = root.value.querySelector(strings.LEADING_ICON_SELECTOR);

      foundation = new MDCChipFoundation(adapter);

      uiState.myListeners = {
        click: evt => foundation.handleClick(evt),
        keydown: evt => foundation.handleKeydown(evt),
        transitionend: evt => foundation.handleTransitionEnd(evt),
        focusin: evt => foundation.handleFocusIn(evt),
        focusout: evt => foundation.handleFocusOut(evt),
      };
      if (trailingAction_) {
        uiState.myListeners[INTERACTION_EVENT] = evt =>
          foundation.handleTrailingActionInteraction(evt);

        uiState.myListeners[NAVIGATION_EVENT] = evt =>
          foundation.handleTrailingActionNavigation(evt);
      }

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
      root,
      checkmarkEl,
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
      trailingAction,
    };
  },

  watchX: {},
};
