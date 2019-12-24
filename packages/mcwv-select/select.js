import MDCMenuSurfaceFoundation from '@material/menu-surface/foundation';
import MDCMenuFoundation from '@material/menu/foundation';
import MDCSelectFoundation from '@material/select/foundation';
import { emitCustomEvent, VMAUniqueIdMixin } from '@mcwv/base';
import { mcwFloatingLabel } from '@mcwv/floating-label/index.js';
import { mcwLineRipple } from '@mcwv/line-ripple/index.js';
import { mcwNotchedOutline } from '@mcwv/notched-outline/index.js';
import { RippleBase } from '@mcwv/ripple';
import SelectHelperText from './select-helper-text.js';
import SelectIcon from './select-icon.js';

const { strings } = MDCSelectFoundation;

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
    id: { type: String },
  },
  mixins: [VMAUniqueIdMixin],
  data() {
    return {
      styles: {},
      classes: {},
      selectedTextContent: '',
      selTextAttrs: {},
    };
  },

  components: { SelectHelperText, SelectIcon },
  computed: {
    rootClasses() {
      return {
        'mdc-select': 1,
        'mdc-select--outlined': this.outlined,
        'mdc-select--with-leading-icon': this.leadingIcon,
        'mdc-select--disabled': this.disabled,
        'mdc-select--no-label': !this.label,
        ...this.classes,
      };
    },

    selectedTextAttrs() {
      const helpId = `help-${this.vma_uid_}`;

      const attrs = { ...this.selTextAttrs };
      if (this.helptext) {
        attrs['aria-controls'] = helpId;
        attrs['aria-describedBy'] = helpId;
      }
      return attrs;
    },

    selectAriaControls() {
      return this.helptext ? 'help-' + this.vma_uid_ : undefined;
    },
  },
  watch: {
    disabled(value) {
      this.foundation?.updateDisabledStyle(value);
    },
    value: 'refreshIndex',
  },

  mounted() {
    this.menuSetup_();

    this.foundation = new MDCSelectFoundation(
      Object.assign({
        // common methods
        addClass: className => this.$set(this.classes, className, true),
        removeClass: className => this.$delete(this.classes, className),
        hasClass: className => Boolean(this.rootClasses[className]),
        setRippleCenter: normalizedX =>
          this.$refs.lineRippleEl?.setRippleCenter(normalizedX),
        activateBottomLine: () => {
          this.$refs.lineRippleEl?.foundation_.activate();
        },
        deactivateBottomLine: () => {
          this.$refs.lineRippleEl?.foundation_.deactivate();
        },

        notifyChange: value => {
          const index = this.selectedIndex;
          emitCustomEvent(
            this.$el,
            strings.CHANGE_EVENT,
            { value, index },
            true /* shouldBubble  */,
          );
          value != this.value && this.$emit('change', value);
        },

        // select methods
        getSelectedMenuItem: () => {
          return this.menuElement_.querySelector(
            strings.SELECTED_ITEM_SELECTOR,
          );
        },
        getMenuItemAttr: (menuItem, attr) => menuItem.getAttribute(attr),

        setSelectedText: text => {
          this.selectedTextContent = text;
        },
        isSelectedTextFocused: () => {
          return document.activeElement === this.$refs.selectedTextEl;
        },

        getSelectedTextAttr: attr => {
          return this.selectedTextAttrs[attr];
        },

        setSelectedTextAttr: (attr, value) => {
          this.$set(this.selectedTextAttrs, attr, value);
        },
        openMenu: () => {
          this.menu_.surfaceOpen = true;
        },
        closeMenu: () => {
          this.menu_.surfaceOpen = false;
        },

        getAnchorElement: () => this.$refs.anchor,
        setMenuAnchorElement: anchorEl => this.menu_.setAnchorElement(anchorEl),
        setMenuAnchorCorner: anchorCorner =>
          this.menu_.setAnchorCorner(anchorCorner),

        setMenuWrapFocus: wrapFocus => (this.menu_.wrapFocus = wrapFocus),
        setAttributeAtIndex: (index, attributeName, attributeValue) =>
          this.menu_.items[index].setAttribute(attributeName, attributeValue),
        removeAttributeAtIndex: (index, attributeName) =>
          this.menu_.items[index].removeAttribute(attributeName),
        focusMenuItemAtIndex: index => {
          this.menu_.items[index].focus();
        },
        getMenuItemCount: () => this.menu_.items.length,
        getMenuItemValues: () =>
          this.menu_.items.map(el => el.getAttribute(strings.VALUE_ATTR) || ''),
        getMenuItemTextAtIndex: index => this.menu_.items[index].textContent,
        addClassAtIndex: (index, className) => {
          this.menu_.items[index].classList.add(className);
        },
        removeClassAtIndex: (index, className) => {
          this.menu_.items[index].classList.remove(className);
        },

        // outline methods
        hasOutline: () => {
          return this.outlined;
        },
        notchOutline: labelWidth => {
          this.$refs.outlineEl?.notch(labelWidth);
        },
        closeOutline: () => {
          this.$refs.outlineEl?.closeNotch();
        },
        // label methods
        hasLabel: () => {
          return !!this.label;
        },
        floatLabel: value => {
          (this.$refs.labelEl ?? this.$refs.outlineEl).float(value);
        },
        getLabelWidth: () => {
          return this.$refs.labelEl?.getWidth();
        },
      }),
      {
        helperText: this.$refs.helperTextEl?.foundation,

        leadingIcon: this.$refs.leadingIconEl?.foundation,
      },
    );

    if (this.menu_) {
      this.menu_.listen(
        MDCMenuSurfaceFoundation.strings.CLOSED_EVENT,
        this.handleMenuClosed,
      );
      this.menu_.listen(
        MDCMenuSurfaceFoundation.strings.OPENED_EVENT,
        this.handleMenuOpened,
      );
      this.menu_.listen(
        MDCMenuFoundation.strings.SELECTED_EVENT,
        this.handleMenuItemAction,
      );
    }

    this.foundation.init();
    // this.foundation.handleChange(false);

    // initial sync with DOM
    this.refreshIndex();
    // this.slotObserver = new MutationObserver(() => this.refreshIndex());
    // this.slotObserver.observe(this.$refs.native_control, {
    //   childList: true,
    //   subtree: true,
    // });

    this.ripple = new RippleBase(this);
    this.ripple.init();
  },

  beforeDestroy() {
    // this.slotObserver.disconnect();
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
      this.handleFocus();
      this.foundation.handleClick(this.getNormalizedXCoordinate(evt));
    },

    getNormalizedXCoordinate(evt) {
      const targetClientRect = evt.target.getBoundingClientRect();
      const xCoordinate = evt.clientX;
      return xCoordinate - targetClientRect.left;
    },

    menuSetup_() {
      this.menuElement_ = this.$el.querySelector(
        MDCSelectFoundation.strings.MENU_SELECTOR,
      );
      this.menu_ = this.menuElement_?.__vue__;
    },
    refreshIndex() {
      const items = this.menu_.items.map(
        el => el.getAttribute(strings.VALUE_ATTR) || '',
      );

      const idx = items.findIndex(value => {
        return this.value === value;
      });
      this.foundation.setSelectedIndex(idx);
    },
  },

  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;

    const selectedTextAttrs = {};
    const helpId = `help-${this.vma_uid_}`;

    if (this.helptext) {
      selectedTextAttrs['aria-controls'] = helpId;
      selectedTextAttrs['aria-describedBy'] = helpId;
    }

    const anchorNodes = [
      createElement('i', { class: { 'mdc-select__dropdown-icon': 1 } }),
      createElement(
        'div',
        {
          class: {
            'mdc-select__selected-text': 1,
          },
          attrs: selectedTextAttrs,
          ref: 'selectedTextEl',
          on: {
            click: evt => this.handleClick(evt),

            focus: () => this.handleFocus(),
            blur: () => this.handleBlur(),
          },
        },
        [this.selectedTextContent],
      ),
    ];

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

    const nodes = [anchorEl, scopedSlots.default?.()];

    if (this.leadingIcon) {
      nodes.unshift(
        createElement('select-icon', {
          attrs: { icon: this.leadingIcon, 'tab-index': '0', role: 'button' },
          ref: 'leadingIconEl',
        }),
      );
    }

    if (this.helptext) {
      nodes.push(
        createElement(
          'select-helper-text',
          {
            attrs: {
              helptextPersistent: this.helptextPersistent,
              helptextValidation: this.helptextValidation,
              id: helpId,
            },
            ref: 'helperTextEl',
          },
          [this.helptext],
        ),
      );
    }
    return createElement(
      'div',
      {
        class: this.rootClasses,
      },
      nodes,
    );
  },
};
