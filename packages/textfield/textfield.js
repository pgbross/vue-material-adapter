/* eslint-disable quote-props */
import { applyPassive } from '@material/dom/events';
import { MDCTextFieldFoundation } from '@material/textfield/foundation';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  watch,
} from '@vue/composition-api';
import { DispatchFocusMixin, VMAUniqueIdMixin } from '~/base/index.js';
import { mcwFloatingLabel } from '~/floating-label/index.js';
import { mcwLineRipple } from '~/line-ripple/index.js';
import { mcwNotchedOutline } from '~/notched-outline/index.js';
import TextfieldHelperText from './textfield-helper-text.js';
import TextfieldIcon from './textfield-icon.vue';

let uid_ = 0;
export default {
  name: 'mcw-textfield',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
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
      validator: function (value) {
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
    label: String,
    outline: Boolean,
    disabled: Boolean,
    required: Boolean,
    valid: { type: Boolean, default: undefined },
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
    resizer: { type: Boolean, default: () => true },
    prefix: String,
    suffix: String,
    characterCounter: Boolean,
  },
  setup(props, { emit, slots, listeners }) {
    const uiState = reactive({
      text: props.value,
      classes: {
        'mdc-textfield': true,
        'mdc-text-field': true,
        'mdc-text-field--upgraded': true,
        'mdc-text-field--disabled': props.disabled,
        'mdc-text-field--textarea': props.multiline,
        'mdc-text-field--outlined': !props.fullwidth && props.outline,
        'mdc-text-field--with-leading-icon': Boolean(slots.leadingIcon),
        'mdc-text-field--with-trailing-icon': Boolean(slots.trailingIcon),
        'mdc-text-field--filled': Boolean(!props.outline),
        'mdc-text-field--no-label': !props.label,
      },
      styles: {},
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
      helpTextId: `mcw-help-${uid_++}`,
      labelId: `mcw-label-${uid_}`,
      root: null,
      helpertext: null,
      input: null,
      labelEl: null,
      lineRippleEl: null,
      characterCounterEl: null,
      leadingIconEl: null,
      trailingIconEl: null,
      helpertextEl: null,
    });

    let foundation;

    const inputAriaControls = computed(() => {
      return props.help ? uiState.helpTextId : undefined;
    });

    const hasLabel = computed(() => {
      return !props.outline && props.label;
    });

    const hasOutlineLabel = computed(() => {
      return props.outline && props.label;
    });

    const hasLineRipple = computed(() => {
      return !props.outline && !props.multiline;
    });

    const hasHelptext = computed(() => {
      return slots.helpText || props.helptext;
    });

    const updateValue = value => {
      emit('model', value);
    };

    const inputListeners = {
      ...listeners,
      input: evt => updateValue(evt.target.value),
    };

    const focus = () => uiState.input?.focus();

    const blur = () => uiState.input?.blur();

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: className => Boolean(uiState.classes[className]),
      registerTextFieldInteractionHandler: (evtType, handler) => {
        uiState.root.addEventListener(evtType, handler);
      },
      deregisterTextFieldInteractionHandler: (evtType, handler) => {
        uiState.root.removeEventListener(evtType, handler);
      },
      isFocused: () => {
        return document.activeElement === uiState.input;
      },

      registerValidationAttributeChangeHandler: handler => {
        const getAttributesList = mutationsList =>
          mutationsList.map(mutation => mutation.attributeName);
        const observer = new MutationObserver(mutationsList =>
          handler(getAttributesList(mutationsList)),
        );
        const targetNode = uiState.input;
        const config = { attributes: true };
        observer.observe(targetNode, config);
        return observer;
      },
      deregisterValidationAttributeChangeHandler: observer => {
        observer.disconnect();
      },
      // input adapter methods
      registerInputInteractionHandler: (evtType, handler) => {
        uiState.input.addEventListener(evtType, handler, applyPassive());
      },
      deregisterInputInteractionHandler: (evtType, handler) => {
        uiState.input.removeEventListener(evtType, handler, applyPassive());
      },
      getNativeInput: () => {
        return uiState.input;
      },

      // label adapter methods

      shakeLabel: shouldShake => {
        uiState.labelEl?.shake(shouldShake);
      },
      floatLabel: shouldFloat => {
        uiState.labelEl?.float(shouldFloat);
      },
      hasLabel: () => {
        return !!uiState.labelEl || !!uiState.notchedEl;
      },
      getLabelWidth: () => {
        return uiState.labelEl.getWidth();
      },

      // line ripple adapter methods
      deactivateLineRipple: () => uiState.lineRippleEl?.deactivate(),
      activateLineRipple: () => uiState.lineRippleEl?.activate(),

      setLineRippleTransformOrigin: normalizedX =>
        uiState.lineRippleEl?.setRippleCenter(normalizedX),

      // outline adapter methods
      hasOutline: () => !!props.outline,
      notchOutline: (notchWidth, isRtl) =>
        uiState.labelEl.notch(notchWidth, isRtl),
      closeOutline: () => uiState.labelEl.closeNotch(),
    };

    watch(
      () => props.disabled,
      nv => foundation?.setDisabled(nv),
    );

    watch(
      () => props.required,
      nv => {
        uiState.input && (uiState.input.required = nv);
      },
    );

    watch(
      () => props.valid,
      nv => {
        if (typeof nv !== 'undefined') {
          foundation?.setValid(nv);
        }
      },
    );

    watch(
      () => props.value,
      nv => {
        if (foundation) {
          if (nv !== foundation.getValue()) {
            foundation.setValue(nv);
          }
        }
      },
    );

    onMounted(() => {
      foundation = new MDCTextFieldFoundation(
        { ...adapter },
        {
          characterCounter: uiState.characterCounterEl
            ? uiState.characterCounterEl.foundation
            : void 0,
          helperText: uiState.helpertextEl
            ? uiState.helpertextEl.foundation
            : void 0,
          leadingIcon: uiState.leadingIconEl
            ? uiState.leadingIconEl.foundation
            : void 0,
          trailingIcon: uiState.trailingIconEl
            ? uiState.trailingIconEl.foundation
            : void 0,
        },
      );

      foundation.init();

      foundation.setValue(props.value);
      foundation.setDisabled(props.disabled);
      uiState.input && (uiState.input.required = props.required);
      if (typeof props.valid !== 'undefined') {
        foundation.setValid(props.valid);
      }

      const isTextArea = uiState.root.classList.contains(
        'mdc-text-field--textarea',
      );
      const isOutlined = uiState.root.classList.contains(
        'mdc-text-field--outlined',
      );

      if (!isTextArea && !isOutlined) {
        //   this.ripple = new RippleBase(this, {
        //     isSurfaceActive: () => matches(uiState.input, ':active'),
        //     registerInteractionHandler: (evtType, handler) => {
        //       uiState.input.addEventListener(evtType, handler, applyPassive());
        //     },
        //     deregisterInteractionHandler: (evtType, handler) =>
        //       uiState.input.removeEventListener(evtType, handler, applyPassive()),
        //   });
        //   this.ripple.init();
      }
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      inputAriaControls,
      hasLabel,
      hasOutlineLabel,
      inputListeners,
      hasLineRipple,
      hasHelptext,
    };
  },

  components: { TextfieldHelperText, TextfieldIcon },

  renderX(createElement) {
    const { $scopedSlots: scopedSlots } = this;

    const rootNodes = [];

    const leadingIconSlot =
      scopedSlots.leadingIcon && scopedSlots.leadingIcon();
    if (leadingIconSlot) {
      rootNodes.push(leadingIconSlot);
    }

    if (this.multiline) {
      rootNodes.push(
        createElement('textarea', {
          class: this.inputClasses,
          attrs: {
            ...this.$attrs,
            id: this.vma_uid_,
            minlength: this.minlength,
            maxlength: this.maxlength,
            placeholder: this.inputPlaceHolder,
            'aria-label': this.inputPlaceHolder,
            'aria-controls': this.inputAriaControls,
            rows: this.rows,
            cols: this.cols,
          },
          ref: 'input',
          on: {
            ...this.$listeners,
            input: evt => this.updateValue(evt.target.value),
          },
        }),
      );
    } else {
      rootNodes.push(
        createElement('span', {
          class: 'mdc-text-field__ripple',

          ref: 'ripple',
        }),
      );
      rootNodes.push(
        createElement('input', {
          class: this.inputClasses,
          attrs: {
            ...this.$attrs,
            id: this.vma_uid_,
            type: this.type,
            minlength: this.minlength,
            maxlength: this.maxlength,
            placeholder: this.inputPlaceHolder,
            'aria-label': this.inputPlaceHolder,
            'aria-controls': this.inputAriaControls,
            'aria-labelledby': `label-${this.vma_uid_}`,
          },
          ref: 'input',
          on: {
            ...this.$listeners,
            input: evt => this.updateValue(evt.target.value),
          },
        }),
      );
    }

    if (this.hasLabel) {
      rootNodes.push(
        createElement(
          mcwFloatingLabel,
          {
            attrs: { id: `label-${this.vma_uid_}`, required: this.required },
            ref: 'labelEl',
          },
          this.label,
        ),
      );
    }

    const trailingIconSlot =
      scopedSlots.trailingIcon && scopedSlots.trailingIcon();

    if (trailingIconSlot) {
      rootNodes.push(trailingIconSlot);
    }

    if (this.hasOutline) {
      rootNodes.push(
        createElement(
          mcwNotchedOutline,
          {
            ref: 'labelEl',
          },
          this.label,
        ),
      );
    }

    if (this.hasLineRipple) {
      rootNodes.push(
        createElement(mcwLineRipple, {
          ref: 'lineRippleEl',
        }),
      );
    }

    const rootEl = createElement(
      'label',
      {
        class: this.classes,
        style: this.styles,
        ref: 'root',
      },
      rootNodes,
    );

    const nodes = [rootEl];

    const helpTextSlot = scopedSlots.helpText && scopedSlots.helpText();

    if (this.hasHelptext) {
      nodes.push(
        createElement(
          'textfield-helper-text',
          {
            attrs: {
              id: `help${this.vma_uid_}`,
              helptext: this.helptext,
              persistent: this.helptextPersistent,
              validation: this.helptextValidation,
            },
            ref: 'helpertextEl',
          },
          helpTextSlot,
        ),
      );
    }

    return createElement(
      'div',
      {
        style: { width: this.fullwidth ? '100%' : void 0 },
        attrs: { id: this.id },
      },
      nodes,
    );
  },
};
