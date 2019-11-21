/* eslint-disable quote-props */
import MDCSelectFoundation from '@material/select/foundation';
import MDCMenuSurfaceFoundation from '@material/menu-surface/foundation';
import { MDCMenuFoundation } from '@material/menu/foundation';
import { emitCustomEvent, VMAUniqueIdMixin } from '@mcwv/base';
import { RippleBase } from '@mcwv/ripple';
import SelectHelperText from './select-helper-text.js';
import SelectIcon from './select-icon.js';
import { mcwFloatingLabel } from '@mcwv/floating-label/index.js';
import { mcwNotchedOutline } from '@mcwv/notched-outline/index.js';
import { mcwLineRipple } from '@mcwv/line-ripple/index.js';

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
    icon: String,
    helptextPersistent: Boolean,
    helptextValidation: Boolean,
    disabled: Boolean,
    label: String,
    outlined: Boolean,
    id: { type: String },
  },
  mixins: [VMAUniqueIdMixin],
  data() {
    return {
      styles: {},
      classes: {},
      selectedTextContent: '',
    };
  },

  components: { SelectHelperText, SelectIcon },
  computed: {
    rootClasses() {
      return {
        'mdc-select__anchor': true,
        'mdc-select--outlined': this.outlined,
        'mdc-select--with-leading-icon': this.leadingIcon,
        'mdc-select--disabled': this.disabled,
        ...this.classes,
      };
    },
    listeners() {
      return {
        ...this.$listeners,
        change: event => this.handleChange(event),
        blur: event => this.handleBlur(event),
        focus: event => this.handleFocus(event),
        handleClick: event => this.handleClick(event),
      };
    },

    selectAriaControls() {
      return this.helptext ? 'help-' + this.vma_uid_ : undefined;
    },
  },
  watch: {
    disabled(value) {
      this.foundation && this.foundation.updateDisabledStyle(value);
    },
    value: 'refreshIndex',
  },

  mounted() {
    const {
      MENU_SELECTOR,
      SELECTED_ITEM_SELECTOR,
      SELECT_ANCHOR_SELECTOR,
      VALUE_ATTR,
    } = MDCSelectFoundation.strings;
    this.menuElement = this.$el.querySelector(MENU_SELECTOR);

    this.menu_ = this.menuElement && this.menuElement.__vue__;

    this.menu_.listen(
      MDCMenuSurfaceFoundation.strings.OPENED_EVENT,
      this.handleMenuOpened,
    );

    this.menu_.listen(
      MDCMenuSurfaceFoundation.strings.CLOSED_EVENT,
      this.handleMenuClosed,
    );

    this.menu_.listen(
      MDCMenuFoundation.strings.SELECTED_EVENT,
      this.handleMenuItemAction,
    );

    this.foundation = new MDCSelectFoundation(
      Object.assign({
        // common methods
        addClass: className => this.$set(this.classes, className, true),
        removeClass: className => this.$delete(this.classes, className),
        hasClass: className => Boolean(this.classes[className]),
        setRippleCenter: normalizedX =>
          this.$refs.lineRippleEl &&
          this.$refs.lineRippleEl.setRippleCenter(normalizedX),
        activateBottomLine: () => {
          if (this.$refs.lineRippleEl) {
            this.$refs.lineRippleEl.foundation_.activate();
          }
        },
        deactivateBottomLine: () => {
          if (this.$refs.lineRippleEl) {
            this.$refs.lineRippleEl.foundation_.deactivate();
          }
        },
        notifyChange: value => {
          const index = this.selectedIndex;
          emitCustomEvent(
            this.$refs.anchor,
            MDCSelectFoundation.strings.CHANGE_EVENT,
            { value, index },
            true /* shouldBubble  */,
          );
          this.$emit('change', value);
        },

        // select methods
        getSelectedMenuItem: () => {
          return this.menuElement.querySelector(SELECTED_ITEM_SELECTOR);
        },
        getMenuItemAttr: (menuItem, attr) => menuItem.getAttribute(attr),
        setSelectedText: text => {
          this.selectedTextContent = text;
        },
        isSelectedTextFocused: () =>
          document.activeElement === this.$refs.selectedTextEl,
        getSelectedTextAttr: attr =>
          this.$refs.selectedTextEl.getAttribute(attr),
        setSelectedTextAttr: (attr, value) =>
          this.$refs.selectedTextEl.setAttribute(attr, value),
        openMenu: () => {
          this.menu_.surfaceOpen = true;
        },
        closeMenu: () => {
          this.menu_.surfaceOpen = false;
        },

        getAnchorElement: () => this.$el.querySelector(SELECT_ANCHOR_SELECTOR),
        // setMenuAnchorElement: anchorEl => this.menu_.setAnchorElement(anchorEl),
        // setMenuAnchorCorner: anchorCorner =>
        //   this.menu_.setAnchorCorner(anchorCorner),

        setMenuWrapFocus: wrapFocus => (this.menu_.wrapFocus = wrapFocus),
        setAttributeAtIndex: (index, attributeName, attributeValue) =>
          this.menu_.items[index].setAttribute(attributeName, attributeValue),
        removeAttributeAtIndex: (index, attributeName) =>
          this.menu_.items[index].removeAttribute(attributeName),
        focusMenuItemAtIndex: index => this.menu_.items[index].focus(),
        getMenuItemCount: () => this.menu_.items.length,
        getMenuItemValues: () =>
          this.menu_.items.map(el => el.getAttribute(VALUE_ATTR) || ''),
        getMenuItemTextAtIndex: index => this.menu_.items[index].textContent,
        addClassAtIndex: (index, className) =>
          this.menu_.items[index].classList.add(className),
        removeClassAtIndex: (index, className) =>
          this.menu_.items[index].classList.remove(className),

        // outline methods
        hasOutline: () => {
          return this.outlined;
        },
        notchOutline: labelWidth => {
          if (this.$refs.outlineEl) {
            this.$refs.outlineEl.notch(labelWidth);
          }
        },
        closeOutline: () => {
          if (this.$refs.outlineEl) {
            this.$refs.outlineEl.closeNotch();
          }
        },
        // label methods
        hasLabel: () => !!this.label,
        floatLabel: value => {
          if (this.$refs.labelEl) {
            this.$refs.labelEl.float(value);
          } else {
            this.$refs.outlineEl.float(value);
          }
        },
        getLabelWidth: () => {
          if (this.$refs.labelEl) {
            return this.$refs.labelEl.getWidth();
          }
        },
      }),
      {
        helperText: this.$refs.helpertextEl
          ? this.$refs.helpertextEl.foundation
          : void 0,

        leadingIcon: this.$refs.leadingIconEl
          ? this.$refs.leadingIconEl.foundation
          : undefined,
      },
    );

    this.foundation.init();
    this.foundation.handleChange(false);

    // initial sync with DOM
    // this.refreshIndex();
    // this.slotObserver = new MutationObserver(() => this.refreshIndex());
    // this.slotObserver.observe(this.$refs.native_control, {
    //   childList: true,
    //   subtree: true,
    // });

    this.ripple = new RippleBase(this);
    this.ripple.init();
  },

  beforeDestroy() {
    this.slotObserver.disconnect();
    if (this.menu_) {
      this.menu_.unlisten(
        MDCMenuSurfaceFoundation.strings.SELECTED_EVENT,
        this.handleMenuItemAction,
      );

      this.menu_.unlisten(
        MDCMenuSurfaceFoundation.strings.OPENED_EVENT,
        this.handleMenuOpened,
      );

      this.menu_.unlisten(
        MDCMenuSurfaceFoundation.strings.CLOSED_EVENT,
        this.handleMenuClosed,
      );
    }

    const foundation = this.foundation;
    this.foundation = null;
    foundation.destroy();

    this.ripple && this.ripple.destroy();
  },

  methods: {
    handleMenuOpened() {
      this.foundation.handleMenuOpened();
    },
    handleMenuClosed() {
      this.foundation.handleMenuClosed();
    },
    handleMenuItemAction(evt) {
      this.foundation.handleMenuItemAction(evt.detail.index);
    },
    handleChange() {
      this.foundation.handleChange(true);
    },

    handleFocus() {
      this.foundation.handleFocus();
    },

    handleBlur() {
      this.foundation.handleBlur();
    },

    handleClick(evt) {
      this.$refs.selectedTextEl.focus();
      this.foundation.handleClick(this.getNormalizedXCoordinate(evt));
    },
    refreshIndex() {
      // const options = [...this.$refs.native_control.querySelectorAll('option')];
      // const idx = options.findIndex(({ value }) => {
      //   return this.value === value;
      // });
      // if (this.$refs.native_control.selectedIndex !== idx) {
      //   this.$refs.native_control.selectedIndex = idx;
      //   this.foundation.handleChange(false);
      // }
    },

    getNormalizedXCoordinate(evt) {
      const targetClientRect = evt.target.getBoundingClientRect();
      const xCoordinate = evt.clientX;
      return xCoordinate - targetClientRect.left;
    },
  },

  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;

    const selectNodes = [scopedSlots.default && scopedSlots.default()];
    // if (!this.value) {
    //   selectNodes.unshift(
    //     createElement('option', {
    //       class: { 'mdc-option': 1 },
    //       attrs: { value: '', disabled: 1, selected: 1 },
    //     }),
    //   );
    // }
    const anchorNodes = [
      createElement('i', { class: { 'mdc-select__dropdown-icon': 1 } }),
      createElement(
        'div',
        {
          class: {
            'mdc-select__selected-text': 1,
          },
          ref: 'selectedTextEl',
          on: {
            click: evt => this.handleClick(evt),
            focus: () => this.handleFocus(),
            blur: () => this.handleBlur(),
          },
        },
        [this.selectedTextContent],
      ),
      // createElement(
      //   'select',
      //   {
      //     class: { 'mdc-select__native-control': 1 },
      //     attrs: {
      //       ...this.$attrs,
      //       disabled: this.disabled,
      //       'aria-controls': this.selectAriaControls,
      //     },
      //     ref: 'native_control',
      //     on: this.listeners,
      //   },
      //   selectNodes,
      // ),
    ];
    // if (this.leadingIcon) {
    //   anchorNodes.unshift(
    //     createElement('select-icon', {
    //       attrs: { icon: this.leadingIcon, 'tab-index': '0', role: 'button' },
    //       ref: 'leadingIconEl',
    //     }),
    //   );
    // }

    if (this.outlined) {
      anchorNodes.push(
        createElement(mcwNotchedOutline, { ref: 'outlineEl' }, this.label),
      );
    } else {
      anchorNodes.push(
        createElement(mcwFloatingLabel, { ref: 'labelEl' }, this.label),
        createElement(mcwLineRipple, { ref: 'lineRippleEl' }, this.label),
      );
    }

    const anchorEl = createElement(
      'div',
      {
        class: { 'mdc-select__anchor': 1 },
        ref: 'anchor',
      },
      anchorNodes,
    );

    const nodes = [anchorEl, selectNodes];
    if (this.helptext) {
      nodes.push(
        createElement(
          'select-helper-text',
          {
            attrs: {
              helptextPersistent: this.helptextPersistent,
              helptextValidation: this.helptextValidation,
              id: `help-${this.vma_uid_}`,
            },
            ref: 'helperTextEl',
          },
          this.helptext,
        ),
      );
    }
    return createElement('div', { class: { 'mdc-select': 1 } }, nodes);
  },
};
