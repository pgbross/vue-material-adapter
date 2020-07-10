import { MDCSelectFoundation } from '@material/select/foundation';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRefs,
  watch,
} from '@vue/composition-api';
import { emitCustomEvent } from '~/base/index.js';
import { useRipplePlugin } from '~/ripple/ripple-plugin';
import SelectHelperText from './select-helper-text.js';
import SelectIcon from './select-icon.vue';

const { strings } = MDCSelectFoundation;

let uid_ = 0;

export default {
  name: 'mcw-select',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: String,
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
    const anchorEl = ref(null);

    const uiState = reactive({
      styles: {},
      classes: {},
      selectedTextContent: '',
      selTextAttrs: {},
      selectAnchorAttrs: {},
      helpId: `help-mcw-select-${uid_++}`,
      menuClasses: { 'mdc-menu-surface--fullwidth': props.menuFullwidth },
      root: null,
      helperTextEl: null,
      leadingIconEl: null,
      lineRippleEl: null,
      outlineEl: null,
      labelEl: null,
      menu: null,
    });

    let rippleClasses;
    let rippleStyles;

    if (props.outlined) {
      const { classes, styles } = useRipplePlugin(anchorEl, {
        registerInteractionHandler: (evtType, handler) => {
          anchorEl.value.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: (evtType, handler) => {
          anchorEl.value.removeEventListener(evtType, handler);
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

    const menuItems = computed(() => uiState.menu?.items);

    let foundation;

    const handleFocus = () => foundation.handleFocus();
    const handleBlur = () => foundation.handleBlur();
    const handleClick = evt => {
      anchorEl.value.focus();
      handleFocus();
      foundation.handleClick(getNormalizedXCoordinate(evt));
    };
    const handleKeydown = evt => foundation.handleKeydown(evt);
    const handleMenuItemAction = ({ index }) =>
      foundation.handleMenuItemAction(index);
    const handleChange = isOpen =>
      foundation[`handleMenu${isOpen ? 'Opened' : 'Closed'}`]();

    const layout = () => foundation.layout();
    const selectedIndex = () => foundation.getSelectedIndex();

    const layoutOptions = () => {
      foundation.layoutOptions();
      uiState.menu.layout();
    };

    const selectedTextAttrs = computed(() => {
      const attrs = { ...uiState.selTextAttrs };
      if (props.helptext) {
        attrs['aria-controls'] = uiState.helpId;
        attrs['aria-describedBy'] = uiState.helpId;
      }
      return attrs;
    });

    const adapter = {
      // select methods
      getSelectedMenuItem: () =>
        uiState.menu.$el.querySelector(strings.SELECTED_ITEM_SELECTOR),
      getMenuItemAttr: (menuItem, attr) => menuItem.getAttribute(attr),
      setSelectedText: text => (uiState.selectedTextContent = text),
      isSelectAnchorFocused: () => document.activeElement === anchorEl.value,
      getSelectAnchorAttr: attr => uiState.selectAnchorAttrs[attr],
      setSelectAnchorAttr: (attr, value) =>
        (uiState.selectAnchorAttrs = {
          ...uiState.selectAnchorAttrs,
          [attr]: value,
        }),
      removeSelectAnchorAttr: attr => {
        // eslint-disable-next-line no-unused-vars
        const { [attr]: removed, ...rest } = uiState.selectAnchorAttrs;
        uiState.selectAnchorAttrs = rest;
      },
      addMenuClass: className =>
        (uiState.menuClasses = { ...uiState.menuClasses, [className]: true }),

      removeMenuClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.menuClasses;
        uiState.menuClasses = rest;
      },
      openMenu: () => (uiState.menu.surfaceOpen = true),
      closeMenu: () => (uiState.menu.surfaceOpen = false),
      getAnchorElement: () => anchorEl.value,
      setMenuAnchorElement: anchorEl => uiState.menu.setAnchorElement(anchorEl),
      setMenuAnchorCorner: anchorCorner =>
        uiState.menu.setAnchorCorner(anchorCorner),
      setMenuWrapFocus: wrapFocus => (uiState.menu.wrapFocus = wrapFocus),
      getSelectedIndex: () => {
        const index = uiState.menu.selectedIndex;
        return index instanceof Array ? index[0] : index;
      },
      setSelectedIndex: index => {
        uiState.menu.selectedIndex = index;
      },
      setAttributeAtIndex: (index, attributeName, attributeValue) =>
        menuItems.value[index].setAttribute(attributeName, attributeValue),
      removeAttributeAtIndex: (index, attributeName) =>
        menuItems.value[index].removeAttribute(attributeName),
      focusMenuItemAtIndex: index => menuItems.value[index].focus(),
      getMenuItemCount: () => menuItems.value.length,
      getMenuItemValues: () =>
        menuItems.value.map(el => el.getAttribute(strings.VALUE_ATTR) || ''),
      getMenuItemTextAtIndex: index => menuItems.value[index].textContent,
      addClassAtIndex: (index, className) => {
        menuItems.value[index].classList.add(className);
      },
      removeClassAtIndex: (index, className) =>
        menuItems.value[index].classList.remove(className),

      isTypeaheadInProgress: () => uiState.menu.typeaheadInProgress(),
      typeaheadMatchItem: (nextChar, startingIndex) =>
        uiState.menu?.typeaheadMatchItem(nextChar, startingIndex),

      // common methods
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: className => Boolean(rootClasses.value[className]),
      setRippleCenter: normalizedX =>
        uiState.lineRippleEl?.setRippleCenter(normalizedX),
      activateBottomLine: () => uiState.lineRippleEl?.activate(),
      deactivateBottomLine: () => uiState.lineRippleEl?.deactivate(),

      notifyChange: value => {
        const index = selectedIndex();
        emitCustomEvent(
          uiState.root,
          strings.CHANGE_EVENT,
          { value, index },
          true /* shouldBubble  */,
        );
        value != props.value && emit('change', value);
      },

      // outline methods
      hasOutline: () => props.outlined,
      notchOutline: labelWidth => uiState.outlineEl?.notch(labelWidth),
      closeOutline: () => uiState.outlineEl?.closeNotch(),

      // label methods
      hasLabel: () => !!props.label,
      floatLabel: shouldFloat =>
        (uiState.labelEl || uiState.outlineEl).float(shouldFloat),
      getLabelWidth: () => uiState.labelEl?.getWidth(),
      setLabelRequired: isRequired => uiState.labelEl?.setRequired(isRequired),
    };

    const refreshIndex = () => {
      const items = menuItems.value.map(
        el => el.getAttribute(strings.VALUE_ATTR) || '',
      );

      const idx = items.findIndex(value => {
        return props.value === value;
      });
      foundation.setSelectedIndex(idx);
    };

    watch(
      () => props.disabled,
      nv => foundation?.updateDisabledStyle(nv),
    );

    watch(
      () => props.value,
      () => {
        refreshIndex();
      },
    );

    onMounted(() => {
      foundation = new MDCSelectFoundation(adapter, {
        helperText: uiState.helperTextEl?.foundation,
        leadingIcon: uiState.leadingIconEl?.foundation,
      });

      foundation = new MDCSelectFoundation(adapter);

      foundation.init();

      // initial sync with DOM
      refreshIndex();

      // do we need a slotObserver here?
      // this.slotObserver = new MutationObserver(() => this.refreshIndex());
      // this.slotObserver.observe(this.$refs.native_control, {
      //   childList: true,
      //   subtree: true,
      // });
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      anchorEl,
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
      selectedTextAttrs,
      handleMenuItemAction,
      refreshIndex,
    };
  },

  components: { SelectHelperText, SelectIcon },
};

// ===
// Private functions
// ===

function getNormalizedXCoordinate(evt) {
  const targetClientRect = evt.target.getBoundingClientRect();
  const xCoordinate = evt.clientX;
  return xCoordinate - targetClientRect.left;
}
