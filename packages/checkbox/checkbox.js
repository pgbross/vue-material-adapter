import { getCorrectEventName } from '@material/animation';
import { MDCCheckboxFoundation } from '@material/checkbox/foundation';
import { applyPassive } from '@material/dom/events';
import { matches } from '@material/dom/ponyfill';
import { MDCFormFieldFoundation } from '@material/form-field/foundation';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRef,
  toRefs,
  watch,
} from 'vue';
import { emitCustomEvent } from '../base/custom-event';
import { useRipplePlugin } from '../ripple/ripple-plugin.js';

const CB_PROTO_PROPS = ['checked', 'indeterminate'];
let checkboxId_ = 0;

export default {
  name: 'mcw-checkbox',
  // model: {
  //   prop: 'checked',
  //   event: 'change',
  // },
  props: {
    modelValue: [Boolean, Array],
    indeterminate: Boolean,
    disabled: Boolean,
    label: String,
    alignEnd: Boolean,
    value: {
      type: [String, Number],
      default() {
        return 'on';
      },
    },
    name: String,
  },
  setup(props, { emit, slots }) {
    const uiState = reactive({
      classes: { 'mdc-checkbox': 1 },
      control: null,
      labelEl: null,
      root: null,
    });

    let foundation;
    let formField;
    const checkboxId = `__mcw-checkbox-${checkboxId_++}`;

    const {
      classes: rippleClasses,
      styles,
      activate,
      deactivate,
    } = useRipplePlugin(toRef(uiState, 'root'), {
      isUnbounded: () => true,
      isSurfaceActive: () => {
        return matches(uiState.control, ':active');
      },
      registerInteractionHandler: (evt, handler) => {
        uiState.control.addEventListener(evt, handler, applyPassive());
      },
      deregisterInteractionHandler: (evt, handler) => {
        uiState.control.removeEventListener(evt, handler, applyPassive());
      },
      computeBoundingRect: () => {
        return uiState.root.getBoundingClientRect();
      },
    });

    const rootClasses = computed(() => {
      return { ...rippleClasses.value, ...uiState.classes };
    });

    const hasLabel = computed(() => {
      return props.label ?? slots.default;
    });

    const formFieldClasses = computed(() => {
      return {
        'mdc-form-field': hasLabel.value,
        'mdc-form-field--align-end': hasLabel.value && props.alignEnd,
      };
    });
    const onChange = ({ target: { indeterminate, checked } }) => {
      // note indeterminate will not currently work with the array model
      emit('update:indeterminate', indeterminate);

      if (Array.isArray(props.modelValue)) {
        const idx = props.modelValue.indexOf(props.value);
        if (checked) {
          idx < 0 &&
            emit('update:modelValue', props.modelValue.concat(props.value));
        } else {
          idx > -1 &&
            emit(
              'update:modelValue',
              props.modelValue
                .slice(0, idx)
                .concat(props.modelValue.slice(idx + 1)),
            );
        }
      } else {
        // emit a native event so that it bubbles to parent elements
        // e.g. data table row
        emitCustomEvent(uiState.root, 'change', true);
        emit('update:modelValue', checked);
      }
    };

    const isChecked = () => uiState.control.checked;

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      forceLayout: () => uiState.root.offsetWidth,
      hasNativeControl: () => true,
      isAttachedToDOM: () => true,
      isChecked: () => uiState.control.checked,
      isIndeterminate: () => uiState.control.indeterminate,
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      removeNativeControlAttr: attr => {
        uiState.control.removeAttribute(attr);
      },
      setNativeControlAttr: (attr, value) => {
        uiState.control.setAttribute(attr, value);
      },

      setNativeControlDisabled: disabled =>
        (uiState.control.disabled = disabled),
    };

    const handleAnimationEnd = () => foundation.handleAnimationEnd();

    const setChecked = checked => {
      uiState.control.checked = Array.isArray(checked)
        ? checked.indexOf(props.value) > -1
        : checked;
    };

    const setIndeterminate = indeterminate => {
      uiState.control && (uiState.control.indeterminate = indeterminate);
    };

    const installPropertyChangeHooks_ = () => {
      const nativeCb = uiState.control;
      const cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(controlState => {
        const desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
        // We have to check for this descriptor, since some browsers (Safari) don't support its return.
        // See: https://bugs.webkit.org/show_bug.cgi?id=49739
        if (validDescriptor(desc)) {
          const nativeCbDesc = /** @type {!ObjectPropertyDescriptor} */ ({
            get: desc.get,
            set: state => {
              desc.set.call(nativeCb, state);
              foundation.handleChange();
            },
            configurable: desc.configurable,
            enumerable: desc.enumerable,
          });
          Object.defineProperty(nativeCb, controlState, nativeCbDesc);
        }
      });
    };

    const uninstallPropertyChangeHooks_ = () => {
      const nativeCb = uiState.control;
      const cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(controlState => {
        const desc = /** @type {!ObjectPropertyDescriptor} */ (Object.getOwnPropertyDescriptor(
          cbProto,
          controlState,
        ));
        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, desc);
        }
      });
    };

    watch(
      () => props.disabled,
      (nv, ov) => {
        nv != ov && foundation?.setDisabled(nv);
      },
    );

    watch(
      () => props.modelValue,
      (nv, ov) => {
        nv != ov && setChecked(nv);
      },
    );

    watch(
      () => props.indeterminate,
      (nv, ov) => {
        nv != ov && setIndeterminate(nv);
      },
    );

    onMounted(() => {
      foundation = new MDCCheckboxFoundation(adapter);

      uiState.root.addEventListener(
        getCorrectEventName(window, 'animationend'),
        handleAnimationEnd,
      );

      installPropertyChangeHooks_();
      if (hasLabel.value) {
        formField = new MDCFormFieldFoundation({
          registerInteractionHandler: (type, handler) => {
            uiState.labelEl.addEventListener(type, handler);
          },
          deregisterInteractionHandler: (type, handler) => {
            uiState.labelEl.removeEventListener(type, handler);
          },
          activateInputRipple: () => {
            activate();
          },
          deactivateInputRipple: () => {
            deactivate();
          },
        });
        formField.init();
      }

      foundation.init();

      setChecked(props.modelValue);
      foundation.setDisabled(props.disabled);
      setIndeterminate(props.indeterminate);
    });

    onBeforeUnmount(() => {
      uiState.root.removeEventListener(
        getCorrectEventName(window, 'animationend'),
        handleAnimationEnd,
      );

      formField?.destroy();

      uninstallPropertyChangeHooks_();
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      rootClasses,
      formFieldClasses,
      onChange,
      styles,
      hasLabel,
      setChecked,
      setIndeterminate,
      isChecked,
      checkboxId,
    };
  },
};

// ===
// Private functions
// ===

function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}
