import { MDCSelectFoundation } from '@material/select/foundation.js';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRef,
  toRefs,
  watch,
} from 'vue';
import { emitCustomEvent } from '../base/index.js';
import { useRipplePlugin } from '../ripple/ripple-plugin.js';
import SelectHelperText from './select-helper-text.js';
import SelectIcon from './select-icon.js';

const { strings } = MDCSelectFoundation;

let uid_ = 0;

export default {
  name: 'mcw-select',
  inheritAttrs: false,

  props: {
    modelValue: String,
    helptext: String,
    leadingIcon: String,
    helptextPersistent: Boolean,
    helptextValidation: Boolean,
    disabled: Boolean,
    label: String,
    outlined: Boolean,
    required: Boolean,
    menuFullwidth: { type: Boolean, default: () => true },
  },

  setup(props, { emit }) {
    const uiState = reactive({
      styles: {},
      classes: {},
      selectedTextContent: '',
      selTextAttrs: {},
      selectAnchorAttrs: {},
      helpId: `help-mcw-select-${uid_++}`,
      menuClasses: { 'mdc-menu-surface--fullwidth': props.menuFullwidth },
      root: undefined,
      helperTextEl: undefined,
      leadingIconEl: undefined,
      lineRippleEl: undefined,
      outlineEl: undefined,
      labelEl: undefined,
      menu: undefined,
      anchorEl: undefined,
    });

    let rippleClasses;
    let rippleStyles;

    if (props.outlined) {
      const { classes, styles } = useRipplePlugin(toRef(uiState, 'anchorEl'), {
        registerInteractionHandler: (eventType, handler) => {
          uiState.anchorEl.addEventListener(eventType, handler);
        },
        deregisterInteractionHandler: (eventType, handler) => {
          uiState.anchorEl.removeEventListener(eventType, handler);
        },
      });
      rippleClasses = classes;
      rippleStyles = styles;
    }

    const rootClasses = computed(() => {
      return {
        'mdc-select': 1,
        'mdc-select--required': props.required,
        'mdc-select--filled': !props.outlined,
        'mdc-select--outlined': props.outlined,
        'mdc-select--with-leading-icon': props.leadingIcon,
        'mdc-select--disabled': props.disabled,
        'mdc-select--no-label': !props.label,

        ...uiState.classes,
      };
    });

    let foundation;
    let labelElement;

    const handleFocus = () => foundation.handleFocus();
    const handleBlur = () => foundation.handleBlur();

    const handleClick = event_ => {
      uiState.anchorEl.focus();
      handleFocus();
      foundation.handleClick(getNormalizedXCoordinate(event_));
    };

    const handleKeydown = event_ => foundation.handleKeydown(event_);

    const handleChange = isOpen =>
      foundation[`handleMenu${isOpen ? 'Opened' : 'Closed'}`]();

    const layout = () => foundation.layout();

    const handleMenuOpened = () => foundation.handleMenuOpened();

    const handleMenuClosed = () => foundation.handleMenuClosed();

    const handleMenuItemAction = ({ index }) =>
      foundation.handleMenuItemAction(index);

    const layoutOptions = () => {
      foundation.layoutOptions();
      uiState.menu.layout();
    };

    const selectedTextAttributes = computed(() => {
      const attributes = { ...uiState.selTextAttrs };
      if (props.helptext) {
        attributes['aria-controls'] = uiState.helpId;
        attributes['aria-describedBy'] = uiState.helpId;
      }
      return attributes;
    });

    const adapter = {
      getMenuItemAttr: (menuItem, attribute) =>
        menuItem.getAttribute(attribute),

      setSelectedText: text => (uiState.selectedTextContent = text),

      isSelectAnchorFocused: () => document.activeElement === uiState.anchorEl,

      getSelectAnchorAttr: attribute => uiState.selectAnchorAttrs[attribute],

      setSelectAnchorAttr: (attribute, value) =>
        (uiState.selectAnchorAttrs = {
          ...uiState.selectAnchorAttrs,
          [attribute]: value,
        }),

      removeSelectAnchorAttr: attribute => {
        const { [attribute]: removed, ...rest } = uiState.selectAnchorAttrs;
        uiState.selectAnchorAttrs = rest;
      },

      addMenuClass: className =>
        (uiState.menuClasses = { ...uiState.menuClasses, [className]: true }),

      removeMenuClass: className => {
        const { [className]: removed, ...rest } = uiState.menuClasses;
        uiState.menuClasses = rest;
      },

      openMenu: () => (uiState.menu.surfaceOpen = true),

      closeMenu: () => (uiState.menu.surfaceOpen = false),

      getAnchorElement: () => uiState.anchorEl,

      setMenuAnchorElement: anchorElement =>
        uiState.menu.setAnchorElement(anchorElement),

      setMenuAnchorCorner: anchorCorner =>
        uiState.menu.setAnchorCorner(anchorCorner),
      setMenuWrapFocus: wrapFocus => (uiState.menu.wrapFocus = wrapFocus),

      getSelectedIndex: () => {
        const index = uiState.menu?.getSelectedIndex() ?? -1;
        return Array.isArray(index) ? index[0] : index;
      },

      setSelectedIndex: index => uiState.menu.setSelectedIndex(index),

      focusMenuItemAtIndex: index => uiState.menu.focusItemAtIndex(index),

      getMenuItemCount: () => uiState.menu.getMenuItemCount(),

      getMenuItemValues: () =>
        uiState.menu?.getMenuItemValues(strings.VALUE_ATTR),

      getMenuItemTextAtIndex: index =>
        uiState.menu?.getMenuItemTextAtIndex(index),

      isTypeaheadInProgress: () => uiState.menu.typeaheadInProgress(),

      typeaheadMatchItem: (nextChar, startingIndex) =>
        uiState.menu?.typeaheadMatchItem(nextChar, startingIndex),

      // common methods
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),

      removeClass: className => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      hasClass: className => Boolean(rootClasses.value[className]),

      setRippleCenter: normalizedX =>
        uiState.lineRippleEl?.setRippleCenter(normalizedX),

      activateBottomLine: () => uiState.lineRippleEl?.activate(),

      deactivateBottomLine: () => uiState.lineRippleEl?.deactivate(),

      notifyChange: value => {
        const index = foundation.getSelectedIndex();
        emitCustomEvent(
          uiState.root,
          strings.CHANGE_EVENT,
          { value, index },
          true /* shouldBubble  */,
        );
        value != props.modelValue && emit('update:modelValue', value);
      },

      // outline methods
      hasOutline: () => props.outlined,

      notchOutline: labelWidth => uiState.outlineEl?.notch(labelWidth),

      closeOutline: () => uiState.outlineEl?.closeNotch(),

      // label methods
      hasLabel: () => !!props.label,

      floatLabel: shouldFloat =>
        (uiState.labelEl || uiState.outlineEl)?.float(shouldFloat),

      getLabelWidth: () => {
        return uiState.labelEl?.getWidth() ?? labelElement?.scrollWidth ?? 0;
      },

      setLabelRequired: isRequired => uiState.labelEl?.setRequired(isRequired),
    };

    const setFixedPosition = isFixed => uiState.menu.setFixedPosition(isFixed);

    const refreshIndex = () => {
      const menuItemValues = uiState.menu?.getMenuItemValues(
        strings.VALUE_ATTR,
      );

      const index = menuItemValues.indexOf(props.modelValue);
      uiState.menu.setSelectedIndex(index);

      return index;
    };

    watch(
      () => props.disabled,
      nv => foundation?.updateDisabledStyle(nv),
    );

    watch(
      () => props.modelValue,
      () => {
        const index = refreshIndex();
        foundation.setSelectedIndex(index);
      },
    );

    onMounted(() => {
      // menu setup
      uiState.menu.hasTypeahead = true;
      uiState.menu.setSingleSelection = true;

      foundation = new MDCSelectFoundation(adapter, {
        helperText: uiState.helperTextEl?.foundation,
        leadingIcon: uiState.leadingIconEl?.foundation,
      });

      // initial sync with DOM
      refreshIndex();

      foundation = new MDCSelectFoundation(adapter);
      foundation.init();

      labelElement = uiState.root.querySelector('.mdc-floating-label');
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      rootClasses,
      handleBlur,
      handleFocus,
      handleClick,
      handleChange,
      handleKeydown,
      layout,
      layoutOptions,
      rippleClasses,
      rippleStyles,
      selectedTextAttrs: selectedTextAttributes,
      handleMenuItemAction,
      refreshIndex,
      setFixedPosition,
      handleMenuOpened,
      handleMenuClosed,
    };
  },

  components: { SelectHelperText, SelectIcon },
};

// ===
// Private functions
// ===

function getNormalizedXCoordinate(event_) {
  const targetClientRect = event_.target.getBoundingClientRect();
  const xCoordinate = event_.clientX;
  return xCoordinate - targetClientRect.left;
}
