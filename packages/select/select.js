import { MDCMenuSurfaceFoundation } from '@material/menu-surface/foundation';
import { MDCMenuFoundation } from '@material/menu/foundation';
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
import { emitCustomEvent, VMAUniqueIdMixin } from '~/base/index.js';
import SelectHelperText from './select-helper-text.js';
import SelectIcon from './select-icon.js';

const { strings } = MDCSelectFoundation;
import { useRipplePlugin } from '~/ripple/ripple-plugin';

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
  },
  mixins: [VMAUniqueIdMixin],

  setup(props, { emit }) {
    const root = ref(null);
    const anchorEl = ref(null);
    const helperTextEl = ref(null);
    const leadingIconEl = ref(null);
    const lineRippleEl = ref(null);
    const outlineEl = ref(null);
    const labelEl = ref(null);

    const uiState = reactive({
      styles: {},
      classes: {},
      selectedTextContent: '',
      selTextAttrs: {},
      selectAnchorAttrs: {},
      helpId: '',
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

    let foundation;
    let menuElement_;
    let menu_;

    const handleFocus = () => foundation.handleFocus();

    const handleBlur = () => foundation.handleBlur();

    const handleClick = evt => {
      anchorEl.value.focus();
      handleFocus();
      foundation.handleClick(getNormalizedXCoordinate(evt));
    };

    const handleKeydown = evt => foundation.handleKeydown(evt);

    const handleMenuItemAction = evt =>
      foundation.handleMenuItemAction(evt.detail.index);

    const handleMenuOpened = () => foundation.handleMenuOpened();

    const handleMenuClosed = () => foundation.handleMenuClosed();

    const handleChange = () => foundation.handleChange();

    const layout = () => foundation.layout();

    const selectedIndex = () => foundation.getSelectedIndex();

    const layoutOptions = () => {
      foundation.layoutOptions();
      menu_.layout();
    };

    const selectedTextAttrs = computed(() => {
      const helpId = `help-${/* this.vma_uid_*/ 0}`;
      uiState.helpId = helpId;

      const attrs = { ...uiState.selTextAttrs };
      if (props.helptext) {
        attrs['aria-controls'] = helpId;
        attrs['aria-describedBy'] = helpId;
      }
      return attrs;
    });

    const selectAriaControls = computed(() => {
      return props.helptext ? 'help-' + 0 /* this.vma_uid_  */ : undefined;
    });

    const adapter = {
      // select methods
      getSelectedMenuItem: () =>
        menuElement_.querySelector(strings.SELECTED_ITEM_SELECTOR),
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
      addMenuClass: className => menuElement_.classList.add(className),
      removeMenuClass: className => menuElement_.classList.remove(className),
      openMenu: () => (menu_.surfaceOpen = true),
      closeMenu: () => (menu_.surfaceOpen = false),
      getAnchorElement: () => anchorEl.value,
      setMenuAnchorElement: anchorEl => menu_.setAnchorElement(anchorEl),
      setMenuAnchorCorner: anchorCorner => menu_.setAnchorCorner(anchorCorner),
      setMenuWrapFocus: wrapFocus => (menu_.wrapFocus = wrapFocus),
      getSelectedIndex: () => {
        const index = menu_.selectedIndex;
        return index instanceof Array ? index[0] : index;
      },
      setSelectedIndex: index => {
        menu_.selectedIndex = index;
      },
      setAttributeAtIndex: (index, attributeName, attributeValue) =>
        menu_.items[index].setAttribute(attributeName, attributeValue),
      removeAttributeAtIndex: (index, attributeName) =>
        menu_.items[index].removeAttribute(attributeName),
      focusMenuItemAtIndex: index => menu_.items[index].focus(),
      getMenuItemCount: () => menu_.items.length,
      getMenuItemValues: () =>
        menu_.items.map(el => el.getAttribute(strings.VALUE_ATTR) || ''),
      getMenuItemTextAtIndex: index => menu_.items[index].textContent,
      addClassAtIndex: (index, className) => {
        menu_.items[index].classList.add(className);
      },
      removeClassAtIndex: (index, className) =>
        menu_.items[index].classList.remove(className),

      isTypeaheadInProgress: () => menu_.typeaheadInProgress,
      typeaheadMatchItem: (nextChar, startingIndex) =>
        menu_?.typeaheadMatchItem(nextChar, startingIndex),

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
        lineRippleEl.value?.setRippleCenter(normalizedX),
      activateBottomLine: () => lineRippleEl.value?.activate(),
      deactivateBottomLine: () => lineRippleEl.value?.deactivate(),

      notifyChange: value => {
        const index = selectedIndex();
        emitCustomEvent(
          root.value,
          strings.CHANGE_EVENT,
          { value, index },
          true /* shouldBubble  */,
        );
        value != props.value && emit('change', value);
      },

      // outline methods
      hasOutline: () => props.outlined,
      notchOutline: labelWidth => outlineEl.value?.notch(labelWidth),
      closeOutline: () => outlineEl.value?.closeNotch(),

      // label methods
      hasLabel: () => !!props.label,
      floatLabel: shouldFloat =>
        (labelEl.value || outlineEl.value).float(shouldFloat),
      getLabelWidth: () => labelEl.value?.getWidth(),
      setLabelRequired: isRequired => labelEl.value?.setRequired(isRequired),
    };

    const menuSetup_ = () => {
      menuElement_ = root.value.querySelector(
        MDCSelectFoundation.strings.MENU_SELECTOR,
      );
      if (menuElement_) {
        menu_ = menuElement_.__vue__;
      }
    };

    const refreshIndex = () => {
      const items = menu_.items.map(
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
      menuSetup_();

      foundation = new MDCSelectFoundation(adapter, {
        helperText: helperTextEl.value?.foundation,
        leadingIcon: leadingIconEl.value?.foundation,
      });

      if (menu_) {
        menu_.listen(
          MDCMenuSurfaceFoundation.strings.CLOSED_EVENT,
          handleMenuClosed,
        );
        menu_.listen(
          MDCMenuSurfaceFoundation.strings.OPENED_EVENT,
          handleMenuOpened,
        );
        menu_.listen(
          MDCMenuFoundation.strings.SELECTED_EVENT,
          handleMenuItemAction,
        );
      }

      foundation = new MDCSelectFoundation(adapter);

      foundation.init();

      // initial sync with DOM
      refreshIndex();
      // this.slotObserver = new MutationObserver(() => this.refreshIndex());
      // this.slotObserver.observe(this.$refs.native_control, {
      //   childList: true,
      //   subtree: true,
      // });

      // fixme
      // if (!props.outlined) {
      //   this.ripple = new RippleBase(this);
      //   this.ripple.init();
      // }
    });

    onBeforeUnmount(() => {
      if (menu_) {
        menu_.unlisten(
          MDCMenuSurfaceFoundation.strings.SELECTED_EVENT,
          handleMenuItemAction,
        );

        menu_.unlisten(
          MDCMenuSurfaceFoundation.strings.OPENED_EVENT,
          handleMenuOpened,
        );

        menu_.unlisten(
          MDCMenuSurfaceFoundation.strings.CLOSED_EVENT,
          handleMenuClosed,
        );
      }

      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      root,
      anchorEl,
      helperTextEl,
      leadingIconEl,
      lineRippleEl,
      outlineEl,
      labelEl,

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
      selectAriaControls,
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
