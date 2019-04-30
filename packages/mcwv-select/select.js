/* eslint-disable quote-props */
import MDCSelectFoundation from '@material/select/foundation';
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
    };
  },

  components: { SelectHelperText, SelectIcon },
  computed: {
    rootClasses() {
      return {
        'mdc-select': true,
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
            this.$refs.root,
            MDCSelectFoundation.strings.CHANGE_EVENT,
            { value, index },
            true /* shouldBubble  */,
          );

          this.$emit('change', value);
        },

        // native methods
        getValue: () => this.$refs.native_control.value,
        setValue: value => (this.$refs.native_control.value = value),
        openMenu: () => {},
        closeMenu: () => {},
        isMenuOpen: () => false,
        setSelectedIndex: index => {
          this.$refs.native_control.selectedIndex = index;
        },
        setDisabled: isDisabled =>
          (this.$refs.native_control.disabled = isDisabled),
        setValid: isValid => {
          isValid
            ? this.$delete(this.classes, MDCSelectFoundation.cssClasses.INVALID)
            : this.set(this.classes, MDCSelectFoundation.cssClasses.INVALID);
        },
        checkValidity: () => this.$refs.native_control.checkValidity(),

        // outline methods

        hasOutline: () => this.outlined,
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
    this.refreshIndex();
    this.slotObserver = new MutationObserver(() => this.refreshIndex());
    this.slotObserver.observe(this.$refs.native_control, {
      childList: true,
      subtree: true,
    });

    this.ripple = new RippleBase(this);
    this.ripple.init();
  },

  beforeDestroy() {
    this.slotObserver.disconnect();

    const foundation = this.foundation;
    this.foundation = null;
    foundation.destroy();

    this.ripple && this.ripple.destroy();
  },

  methods: {
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
      this.foundation.handleClick(this.getNormalizedXCoordinate(evt));
    },
    refreshIndex() {
      const options = [...this.$refs.native_control.querySelectorAll('option')];

      const idx = options.findIndex(({ value }) => {
        return this.value === value;
      });

      if (this.$refs.native_control.selectedIndex !== idx) {
        this.$refs.native_control.selectedIndex = idx;
        this.foundation.handleChange(false);
      }
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
    if (!this.value) {
      selectNodes.unshift(
        createElement('option', {
          class: { 'mdc-option': 1 },
          attrs: { value: '', disabled: 1, selected: 1 },
        }),
      );
    }
    const rootNodes = [
      createElement('i', { class: { 'mdc-select__dropdown-icon': 1 } }),
      createElement(
        'select',
        {
          class: { 'mdc-select__native-control': 1 },
          attrs: {
            ...this.$attrs,
            disabled: this.disabled,
            'aria-controls': this.selectAriaControls,
          },
          ref: 'native_control',
          on: this.listeners,
        },
        selectNodes,
      ),
    ];
    if (this.leadingIcon) {
      rootNodes.unshift(
        createElement('select-icon', {
          attrs: { icon: this.leadingIcon, 'tab-index': '0', role: 'button' },
          ref: 'leadingIconEl',
        }),
      );
    }

    if (this.outlined) {
      rootNodes.push(
        createElement(mcwNotchedOutline, { ref: 'outlineEl' }, this.label),
      );
    } else {
      rootNodes.push(
        createElement(mcwFloatingLabel, { ref: 'labelEl' }, this.label),
        createElement(mcwLineRipple, { ref: 'lineRippleEl' }, this.label),
      );
    }

    const rootEl = createElement(
      'div',
      {
        class: this.rootClasses,
        style: this.style,
        attrs: { id: this.id },
        ref: 'root',
      },
      rootNodes,
    );

    const nodes = [rootEl];
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
    return createElement('div', { class: { 'mdc-select-wrapper': 1 } }, nodes);
  },
};
