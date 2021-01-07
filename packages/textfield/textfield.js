import { applyPassive } from '@material/dom/events';
import { MDCTextFieldFoundation } from '@material/textfield/foundation';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  toRef,
  toRefs,
  watch,
} from 'vue';
import { useRipplePlugin } from '~/ripple/ripple-plugin.js';
import { mcwLineRipple } from '~/line-ripple/index.js';
import { mcwNotchedOutline } from '~/notched-outline/index.js';

let uid_ = 0;
export default {
  name: 'mcw-textfield',
  inheritAttrs: false,
  props: {
    modelValue: [String, Number],
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
    characterCounterInternal: Boolean,
  },
  setup(props, { emit, slots, attrs }) {
    const uiState = reactive({
      text: props.modelValue,
      classes: {
        'mdc-textfield': true,
        'mdc-text-field': true,
        'mdc-text-field--upgraded': true,
        'mdc-text-field--disabled': props.disabled,
        'mdc-text-field--textarea': props.multiline,
        'mdc-text-field--outlined': !props.fullwidth && props.outline,
        'mdc-text-field--with-leading-icon': Boolean(
          slots.leadingIcon || slots.leading,
        ),
        'mdc-text-field--with-trailing-icon': Boolean(
          slots.trailingIcon || slots.trailing,
        ),
        'mdc-text-field--filled': Boolean(!props.outline),
        'mdc-text-field--no-label': !props.label,
      },
      inputClasses: {
        'mdc-text-field__input': true,
      },

      inputAttrs: {},
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
      wrapper: null,
      helpertext: null,
      input: null,
      labelEl: null,
      lineRippleEl: null,
      characterCounterEl: null,
      helpertextEl: null,
    });

    let foundation;

    let rippleClasses;
    let rippleStyles;

    const icons = ref({});

    const addIconFoundation = ({ foundation, trailing }) => {
      icons.value[trailing ? 'trailing' : 'leading'] = foundation;
    };

    provide('addIconFoundation', addIconFoundation);

    if (!props.multiline && !props.outline) {
      const { classes, styles } = useRipplePlugin(toRef(uiState, 'root'));
      rippleClasses = classes;
      rippleStyles = styles;
    }

    const inputAriaControls = computed(() => {
      return props.helptext ? uiState.helpTextId : undefined;
    });

    const hasLabel = computed(() => {
      return !props.outline && props.label;
    });

    const hasOutlineLabel = computed(() => {
      return props.outline && props.label;
    });

    const hasLineRipple = computed(() => {
      return !(props.outline || props.multiline);
    });

    const hasHelptext = computed(() => {
      return slots.helpText || props.helptext;
    });

    const internalCharacterCounter = computed(
      () => props.characterCounter && props.characterCounterInternal,
    );
    const helperCharacterCounter = computed(
      () =>
        props.characterCounter &&
        !(props.multiline && props.characterCounterInternal),
    );

    const hasHelpline = computed(() => {
      return props.helptext || helperCharacterCounter.value;
    });

    const rootClasses = computed(() => ({
      ...rippleClasses,
      ...uiState.classes,
    }));

    const inputListeners = {
      // ...listeners,
      input: ({ target: { value } }) => emit('update:modelValue', value),
    };

    const focus = () => uiState.input?.focus();

    const isValid = () => foundation.isValid();

    const inputAttrs = computed(() => {
      // eslint-disable-next-line no-unused-vars
      const { class: _, ...rest } = attrs;
      return {
        ...rest,
        ...uiState.inputAttrs,
      };
    });

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

      setInputAttr: (attr, value) => {
        uiState.inputAttrs = { ...uiState.inputAttrs, [attr]: value };
      },
      removeInputAttr: attr => {
        // eslint-disable-next-line no-unused-vars
        const { [attr]: removed, ...rest } = uiState.inputAttrs;
        uiState.inputAttrs = rest;
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
      () => props.modelValue,
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
          characterCounter: uiState.characterCounterEl?.foundation,
          helperText: uiState.helpertext?.foundation,
          leadingIcon: icons.leading?.foundation,
          trailingIcon: icons.trailing?.foundation,
        },
      );

      foundation.init();

      foundation.setValue(props.modelValue);
      props.disabled && foundation.setDisabled(props.disabled);
      uiState.input && (uiState.input.required = props.required);
      if (typeof props.valid !== 'undefined') {
        foundation.setValid(props.valid);
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
      hasHelpline,
      focus,
      helperCharacterCounter,
      internalCharacterCounter,
      rootClasses,
      rippleStyles,
      isValid,
      inputAttrs,
    };
  },
  components: { mcwLineRipple, mcwNotchedOutline },
};
