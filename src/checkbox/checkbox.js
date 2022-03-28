import { getCorrectEventName } from '@material/animation/index.js';
import { MDCCheckboxFoundation } from '@material/checkbox/foundation.js';
import { applyPassive } from '@material/dom/events.js';
import { matches } from '@material/dom/ponyfill.js';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRef,
  toRefs,
  watch,
} from 'vue';
import { emitCustomEvent } from '../base/custom-event.js';
import { useRipplePlugin } from '../ripple/ripple-plugin.js';
import checkboxContent from './checkbox-content.js';

const CB_PROTO_PROPS = ['checked', 'indeterminate'];
let checkboxId_ = 0;

export default {
  name: 'mcw-checkbox',
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
      control: undefined,
      labelEl: undefined,
      root: undefined,
    });

    let foundation;
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
      registerInteractionHandler: (event_, handler) => {
        uiState.control.addEventListener(event_, handler, applyPassive());
      },
      deregisterInteractionHandler: (event_, handler) => {
        uiState.control.removeEventListener(event_, handler, applyPassive());
      },
      computeBoundingRect: () => {
        return uiState.root.getBoundingClientRect();
      },
    });

    const rootClasses = computed(() => {
      return { ...rippleClasses.value, ...uiState.classes };
    });

    const hasLabel = computed(() => !!(props.label || slots.default));

    const onChange = ({ target: { indeterminate, checked } }) => {
      // note indeterminate will not currently work with the array model
      emit('update:indeterminate', indeterminate);

      if (Array.isArray(props.modelValue)) {
        const index = props.modelValue.indexOf(props.value);
        if (checked) {
          index < 0 &&
            emit('update:modelValue', [...props.modelValue, props.value]);
        } else {
          index > -1 &&
            emit('update:modelValue', [
              ...props.modelValue.slice(0, index),
              ...props.modelValue.slice(index + 1),
            ]);
        }
      } else {
        // emit a native event so that it bubbles to parent elements
        // e.g. data table row
        emitCustomEvent(uiState.root, 'mdccheckbox:change', {}, true);
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
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      removeNativeControlAttr: attribute => {
        uiState.control.removeAttribute(attribute);
      },
      setNativeControlAttr: (attribute, value) => {
        uiState.control.setAttribute(attribute, value);
      },

      setNativeControlDisabled: disabled =>
        (uiState.control.disabled = disabled),
    };

    const handleAnimationEnd = () => foundation.handleAnimationEnd();

    const setChecked = checked => {
      uiState.control.checked = Array.isArray(checked)
        ? checked.includes(props.value)
        : checked;
    };

    const setIndeterminate = indeterminate => {
      uiState.control && (uiState.control.indeterminate = indeterminate);
    };

    const installPropertyChangeHooks_ = () => {
      const nativeCallback = uiState.control;
      const callbackProto = Object.getPrototypeOf(nativeCallback);

      for (const controlState of CB_PROTO_PROPS) {
        const desc = Object.getOwnPropertyDescriptor(
          callbackProto,
          controlState,
        );
        // We have to check for this descriptor, since some browsers (Safari) don't support its return.
        // See: https://bugs.webkit.org/show_bug.cgi?id=49739
        if (validDescriptor(desc)) {
          const nativeCallbackDesc = /** @type {!ObjectPropertyDescriptor} */ ({
            get: desc.get,
            set: state => {
              desc.set.call(nativeCallback, state);
              foundation.handleChange();
            },
            configurable: desc.configurable,
            enumerable: desc.enumerable,
          });
          Object.defineProperty(
            nativeCallback,
            controlState,
            nativeCallbackDesc,
          );
        }
      }
    };

    const uninstallPropertyChangeHooks_ = () => {
      const nativeCallback = uiState.control;
      const callbackProto = Object.getPrototypeOf(nativeCallback);

      for (const controlState of CB_PROTO_PROPS) {
        const desc = /** @type {!ObjectPropertyDescriptor} */ (
          Object.getOwnPropertyDescriptor(callbackProto, controlState)
        );
        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCallback, controlState, desc);
        }
      }
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

      uninstallPropertyChangeHooks_();
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      rootClasses,
      onChange,
      styles,
      hasLabel,
      setChecked,
      setIndeterminate,
      isChecked,
      checkboxId,
      activate,
      deactivate,
    };
  },

  components: { checkboxContent },
};

// ===
// Private functions
// ===

function validDescriptor(inputPropertyDesc) {
  return !!inputPropertyDesc && typeof inputPropertyDesc.set === 'function';
}
