<template>
  <div :style="{ width: fullwidth ? '100%' : undefined }" :id="id" class="mdc-textfield-wrapper">
    <div ref="root" :class="rootClasses">
      <textfield-icon ref="leadingIconEl" v-if="$slots.leadingIcon">
        <slot name="leadingIcon"></slot>
      </textfield-icon>
      <!--
        workarround for https://github.com/vuejs/rollup-plugin-vue/issues/174
      -->
      <!-- eslint-disable vue/html-self-closing -->
      <textarea
        v-if="multiline"
        ref="input"
        v-bind="$attrs"
        :id="vma_uid_"
        :class="inputClasses"
        :minlength="minlength"
        :maxlength="maxlength"
        :placeholder="inputPlaceHolder"
        :aria-label="inputPlaceHolder"
        :aria-controls="inputAriaControls"
        :rows="rows"
        :cols="cols"
        v-on="$listeners"
        @input="updateValue($event.target.value)"
      ></textarea>

      <input
        v-else
        ref="input"
        v-bind="$attrs"
        :id="vma_uid_"
        :class="inputClasses"
        :type="type"
        :minlength="minlength"
        :maxlength="maxlength"
        :placeholder="inputPlaceHolder"
        :aria-label="inputPlaceHolder"
        :aria-controls="inputAriaControls"
        v-on="$listeners"
        @input="updateValue($event.target.value)"
      >

      <mdc-floating-label v-if="hasLabel" ref="labelEl" :for="vma_uid_">
        {{
        label
        }}
      </mdc-floating-label>

      <textfield-icon ref="trailingIconEl" v-if="$slots.trailingIcon">
        <slot name="trailingIcon"></slot>
      </textfield-icon>

      <mdc-notched-outline v-if="hasOutline" ref="labelEl">
        {{
        label
        }}
      </mdc-notched-outline>

      <mdc-line-ripple v-if="hasLineRipple" ref="lineRippleEl"/>
    </div>

    <textfield-helper-text
      ref="helpertextEl"
      v-if="hasHelptext"
      :id="'help-' + vma_uid_"
      :helptext="helptext"
      :persistent="helptextPersistent"
      :validation="helptextValidation"
    >
      <slot name="helpText"></slot>
    </textfield-helper-text>
  </div>
</template>

<script>
import MDCTextfieldFoundation from '@material/textfield/foundation';
import TextfieldHelperText from './textfield-helper-text.vue';
import TextfieldIcon from './textfield-icon.vue';

import {
  extractIconProp,
  DispatchFocusMixin,
  CustomElementMixin,
  VMAUniqueIdMixin,
  applyPassive,
} from '@mcwv/base';
import { RippleBase } from '@mcwv/ripple';

export default {
  name: 'mdc-textfield',
  mixins: [CustomElementMixin, DispatchFocusMixin, VMAUniqueIdMixin],
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'model',
  },
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text',
      validator: function(value) {
        return (
          [
            'text',
            'email',
            'search',
            'password',
            'tel',
            'url',
            'number',
          ].indexOf(value) !== -1
        );
      },
    },
    dense: Boolean,
    label: String,
    outline: Boolean,
    disabled: Boolean,
    required: Boolean,
    valid: { type: Boolean, default: undefined },
    fullwidth: Boolean,
    multiline: Boolean,
    size: { type: [Number, String], default: 20 },
    minlength: { type: [Number, String], default: undefined },
    maxlength: { type: [Number, String], default: undefined },
    rows: { type: [Number, String], default: 8 },
    cols: { type: [Number, String], default: 40 },
    id: { type: String },
    helptext: String,
    helptextPersistent: Boolean,
    helptextValidation: Boolean,
  },
  data: function() {
    return {
      text: this.value,
      rootClasses: {
        'mdc-textfield': true,
        'mdc-text-field': true,
        'mdc-text-field--upgraded': true,
        'mdc-text-field--disabled': this.disabled,
        'mdc-text-field--dense': this.dense,
        'mdc-text-field--fullwidth': this.fullwidth,
        'mdc-text-field--textarea': this.multiline,
        'mdc-text-field--outlined': !this.fullwidth && this.outline,
        'mdc-text-field--with-leading-icon': Boolean(this.$slots.leadingIcon),
        'mdc-text-field--with-trailing-icon': Boolean(this.$slots.trailingIcon),

        'mdc-text-field--no-label': !this.label,
      },
      inputClasses: {
        'mdc-text-field__input': true,
      },
      labelClasses: {
        'mdc-floating-label': true,
      },
      lineRippleClasses: {
        'mdc-line-ripple': true,
      },
      lineRippleStyles: {},
      outlineClasses: {},
      notchStyles: {},
    };
  },
  components: { TextfieldHelperText, TextfieldIcon },
  computed: {
    inputPlaceHolder() {
      return this.fullwidth ? this.label : undefined;
    },
    inputAriaControls() {
      return this.help ? 'help-' + this.vma_uid_ : undefined;
    },
    hasLabel() {
      return !this.fullwidth && !this.outline && this.label;
    },

    hasOutlineLabel() {
      return this.hasOutline && this.label;
    },
    hasOutline() {
      return !this.fullwidth && this.outline;
    },
    hasLineRipple() {
      return !this.hasOutline && !this.multiline;
    },

    hasHelptext() {
      return this.$slots.helpText || this.helptext;
    },
  },
  watch: {
    disabled() {
      this.foundation && this.foundation.setDisabled(this.disabled);
    },
    required() {
      this.$refs.input && (this.$refs.input.required = this.required);
    },
    valid() {
      if (typeof this.valid !== 'undefined') {
        this.foundation && this.foundation.setValid(this.valid);
      }
    },
    dense() {
      this.$set(this.rootClasses, 'mdc-text-field--dense', this.dense);
    },
    value(value) {
      if (this.foundation) {
        if (value !== this.foundation.getValue()) {
          this.foundation.setValue(value);
        }
      }
    },
  },
  mounted() {
    this.foundation = new MDCTextfieldFoundation(
      Object.assign(
        {
          addClass: className => {
            this.$set(this.rootClasses, className, true);
          },
          removeClass: className => {
            this.$delete(this.rootClasses, className);
          },
          hasClass: className => {
            this.$refs.root.classList.contains(className);
          },
          registerTextFieldInteractionHandler: (evtType, handler) => {
            this.$refs.root.addEventListener(evtType, handler);
          },
          deregisterTextFieldInteractionHandler: (evtType, handler) => {
            this.$refs.root.removeEventListener(evtType, handler);
          },
          isFocused: () => {
            return document.activeElement === this.$refs.input;
          },

          registerValidationAttributeChangeHandler: handler => {
            const getAttributesList = mutationsList =>
              mutationsList.map(mutation => mutation.attributeName);
            const observer = new MutationObserver(mutationsList =>
              handler(getAttributesList(mutationsList)),
            );
            const targetNode = this.$refs.input;
            const config = { attributes: true };
            observer.observe(targetNode, config);
            return observer;
          },
          deregisterValidationAttributeChangeHandler: observer => {
            observer.disconnect();
          },
        },
        this.getInputAdapterMethods(),
        this.getLabelAdapterMethods(),
        this.getLineRippleAdapterMethods(),
        this.getOutlineAdapterMethods(),
      ),
      {
        helperText: this.$refs.helpertextEl
          ? this.$refs.helpertextEl.foundation
          : void 0,
        leadingIcon: this.$refs.leadingIconEl
          ? this.$refs.leadingIconEl.foundation
          : void 0,
        trailingIcon: this.$refs.trailingIconEl
          ? this.$refs.trailingIconEl.foundation
          : void 0,
      },
    );
    this.foundation.init();
    this.foundation.setValue(this.value);
    this.foundation.setDisabled(this.disabled);
    this.$refs.input && (this.$refs.input.required = this.required);
    if (typeof this.valid !== 'undefined') {
      this.foundation.setValid(this.valid);
    }

    if (this.textbox) {
      this.ripple = new RippleBase(this);
      this.ripple.init();
    }
  },
  beforeDestroy() {
    this.foundation && this.foundation.destroy();
    this.ripple && this.ripple.destroy();
  },
  methods: {
    getInputAdapterMethods() {
      return {
        registerInputInteractionHandler: (evtType, handler) => {
          this.$refs.input.addEventListener(evtType, handler, applyPassive());
        },
        deregisterInputInteractionHandler: (evtType, handler) => {
          this.$refs.input.removeEventListener(
            evtType,
            handler,
            applyPassive(),
          );
        },
        getNativeInput: () => {
          return this.$refs.input;
        },
      };
    },
    getLabelAdapterMethods() {
      return {
        shakeLabel: shouldShake => {
          this.$refs.labelEl && this.$refs.labelEl.shake(shouldShake);
        },
        floatLabel: shouldFloat => {
          this.$refs.labelEl && this.$refs.labelEl.float(shouldFloat);
        },
        hasLabel: () => {
          return !!this.$refs.labelEl || !!this.$refs.notchedEl;
        },
        getLabelWidth: () => {
          return this.$refs.labelEl && this.$refs.labelEl.getWidth();
        },
      };
    },
    getLineRippleAdapterMethods() {
      return {
        deactivateLineRipple: () => {
          if (this.$refs.lineRippleEl) {
            this.$refs.lineRippleEl.deactivate();
          }
        },
        activateLineRipple: () => {
          if (this.$refs.lineRippleEl) {
            this.$refs.lineRippleEl.activate();
          }
        },
        setLineRippleTransformOrigin: normalizedX => {
          if (this.$refs.lineRippleEl) {
            this.$refs.lineRippleEl.setRippleCenter(normalizedX);
          }
        },
      };
    },
    getOutlineAdapterMethods() {
      return {
        hasOutline: () => !!this.hasOutline,
        notchOutline: (notchWidth, isRtl) =>
          this.$refs.labelEl.notch(notchWidth, isRtl),
        closeOutline: () => this.$refs.labelEl.closeNotch(),
      };
    },
    updateValue(value) {
      this.$emit('model', value);
    },
    focus() {
      this.$refs.input && this.$refs.input.focus();
    },
    blur() {
      this.$refs.input && this.$refs.input.blur();
    },
  },
};
</script>
