import { MDCMenuSurfaceFoundation } from '@material/menu-surface/foundation';
import { MDCMenuFoundation } from '@material/menu/foundation';
import { MDCSelectFoundation } from '@material/select/foundation';
import { emitCustomEvent, VMAUniqueIdMixin } from '~/base/index.js';
import { mcwFloatingLabel } from '~/floating-label/index.js';
import { mcwLineRipple } from '~/line-ripple/index.js';
import { mcwNotchedOutline } from '~/notched-outline/index.js';
import { RippleBase } from '~/ripple/index.js';
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
      selectAnchorAttrs: {},
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
      const { foundation } = this;
      foundation && foundation.updateDisabledStyle(value);
    },
    value: 'refreshIndex',
  },

  mounted() {
    this.menuSetup_();
    const {
      $refs: { helperTextEl, leadingIconEl },
    } = this;

    this.foundation = new MDCSelectFoundation(
      Object.assign({
        // common methods
        addClass: className => this.$set(this.classes, className, true),
        removeClass: className => this.$delete(this.classes, className),
        hasClass: className => Boolean(this.rootClasses[className]),
        setRippleCenter: normalizedX => {
          const {
            $refs: { lineRippleEl },
          } = this;

          lineRippleEl && lineRippleEl.setRippleCenter(normalizedX);
        },
        activateBottomLine: () => {
          const {
            $refs: { lineRippleEl },
          } = this;
          lineRippleEl && lineRippleEl.foundation_.activate();
        },
        deactivateBottomLine: () => {
          const {
            $refs: { lineRippleEl },
          } = this;
          lineRippleEl && lineRippleEl.foundation_.deactivate();
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
        isSelectAnchorFocused: () => {
          return document.activeElement === this.$refs.anchorEl;
        },

        getSelectAnchorAttr: attr => {
          return this.selectAnchorAttrs[attr];
        },

        setSelectAnchorAttr: (attr, value) => {
          this.$set(this.selectAnchorAttrs, attr, value);
        },
        openMenu: () => {
          this.menu_.surfaceOpen = true;
        },
        closeMenu: () => {
          this.menu_.surfaceOpen = false;
        },

        getAnchorElement: () => this.$refs.anchorEl,
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
          const {
            $refs: { outlineEl },
          } = this;
          outlineEl && outlineEl.notch(labelWidth);
        },
        closeOutline: () => {
          const {
            $refs: { outlineEl },
          } = this;
          outlineEl && outlineEl.closeNotch();
        },
        // label methods
        hasLabel: () => {
          return !!this.label;
        },
        floatLabel: value => {
          const {
            $refs: { labelEl, outlineEl },
          } = this;
          (labelEl || outlineEl).float(value);
        },
        getLabelWidth: () => {
          const {
            $refs: { labelEl },
          } = this;
          return labelEl && labelEl.getWidth();
        },
      }),
      {
        helperText: helperTextEl && helperTextEl.foundation,

        leadingIcon: leadingIconEl && leadingIconEl.foundation,
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

    if (!this.outlined) {
      this.ripple = new RippleBase(this);
      this.ripple.init();
    }
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
      this.$refs.anchorEl.focus();
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
      if (this.menuElement_) {
        this.menu_ = this.menuElement_.__vue__;
      }
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

    const helpId = `help-${this.vma_uid_}`;

    const anchorNodes = [
      createElement('span', { class: ['mdc-select__ripple'] }),
      createElement('input', {
        class: {
          'mdc-select__selected-text': 1,
        },
        attrs: {
          disabled: true,
          readonly: true,
          value: this.selectedTextContent,
          ...this.selectedTextAttrs,
        },
        ref: 'selectedTextEl',
      }),
      createElement('i', { class: { 'mdc-select__dropdown-icon': 1 } }),
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
    if (this.leadingIcon) {
      anchorNodes.unshift(
        createElement('select-icon', {
          attrs: { icon: this.leadingIcon, 'tab-index': '0', role: 'button' },
          ref: 'leadingIconEl',
        }),
      );
    }

    const anchorEl = createElement(
      'div',
      {
        class: { 'mdc-select__anchor': 1 },
        attrs: this.selectAnchorAttrs,
        ref: 'anchorEl',
        on: {
          click: evt => this.handleClick(evt),
          focus: () => this.handleFocus(),
          blur: () => this.handleBlur(),
        },
      },
      anchorNodes,
    );

    const nodes = [anchorEl, scopedSlots.default && scopedSlots.default()];

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
