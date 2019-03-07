<template>
  <div>
    <div ref="root" :id="id" :class="rootClasses" :style="styles">
      <select-icon
        ref="leadingIconEl"
        v-if="leadingIcon"
        :icon="leadingIcon"
        tab-index="0"
        role="button"
      ></select-icon>
      <i class="mdc-select__dropdown-icon"></i>
      <select
        ref="native_control"
        :disabled="disabled"
        v-bind="$attrs"
        class="mdc-select__native-control"
        :aria-controls="selectAriaControls"
        v-on="listeners"
      >
        <option v-if="!value" class="mdc-option" value="" disabled selected />
        <slot />
      </select>
      <mdc-floating-label v-if="!outlined" ref="labelEl">{{
        label
      }}</mdc-floating-label>
      <mdc-line-ripple v-if="!outlined" ref="lineRippleEl" />
      <mdc-notched-outline v-if="outlined" ref="outlineEl">{{
        label
      }}</mdc-notched-outline>
    </div>

    <select-helper-text
      :helptextPersistent="helptextPersistent"
      :helptextValidation="helptextValidation"
      ref="helpertextEl"
      v-if="helptext"
      :id="'help-' + vma_uid_"
    >
      {{ helptext }}
    </select-helper-text>
  </div>
</template>

<script>
import MDCSelectFoundation from '@material/select/foundation';
import { RippleBase } from '@vma/ripple';
import SelectHelperText from './select-helper-text.vue';

import SelectIcon from './select-icon.vue';
import { emitCustomEvent, VMAUniqueIdMixin } from '@vma/base';

export default {
  name: 'mdc-select',
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
        mousedown: event => this.handleClick(event),
        touchstart: event => this.handleClick(event),
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
            this.$refs.lineRippleEl.foundation.activate();
          }
        },
        deactivateBottomLine: () => {
          if (this.$refs.lineRippleEl) {
            this.$refs.lineRippleEl.foundation.deactivate();
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

    let foundation = this.foundation;
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
};
</script>
