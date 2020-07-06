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
  ref,
  watch,
} from '@vue/composition-api';
import { DispatchFocusMixin, VMAUniqueIdMixin } from '~/base/index.js';
import { emitCustomEvent } from '../base/custom-event';
import { useRipplePlugin } from '../ripple/ripple-plugin';

const CB_PROTO_PROPS = ['checked', 'indeterminate'];

export default {
  name: 'mcw-checkbox',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: [Boolean, Array],
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
    const uiState = reactive({ classes: { 'mdc-checkbox': 1 } });
    const root = ref(null);
    const control = ref(null);
    const labelEl = ref(null);

    let foundation;
    let formField;

    const {
      classes: rippleClasses,
      styles,
      activate,
      deactivate,
    } = useRipplePlugin(root, {
      isUnbounded: () => true,
      isSurfaceActive: () => {
        return matches(control.value, ':active');
      },
      registerInteractionHandler: (evt, handler) => {
        control.value.addEventListener(evt, handler, applyPassive());
      },
      deregisterInteractionHandler: (evt, handler) => {
        control.value.removeEventListener(evt, handler, applyPassive());
      },
      computeBoundingRect: () => {
        return root.value.getBoundingClientRect();
      },
    });

    const classes = computed(() => {
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

      if (Array.isArray(props.checked)) {
        const idx = props.checked.indexOf(props.value);
        if (checked) {
          idx < 0 && emit('change', props.checked.concat(props.value));
        } else {
          idx > -1 &&
            emit(
              'change',
              props.checked.slice(0, idx).concat(props.checked.slice(idx + 1)),
            );
        }
      } else {
        // emit a native event so that it bubbles to parent elements
        // e.g. data table row
        emitCustomEvent(root.value, 'change', true);
        emit('change', checked);
      }
    };

    const isChecked = () => control.value.checked;

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      forceLayout: () => root.value.offsetWidth,
      hasNativeControl: () => true,
      isAttachedToDOM: () => true,
      isChecked: () => control.value.checked,
      isIndeterminate: () => control.value.indeterminate,
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      removeNativeControlAttr: attr => {
        control.value.removeAttribute(attr);
      },
      setNativeControlAttr: (attr, value) => {
        control.value.setAttribute(attr, value);
      },

      setNativeControlDisabled: disabled => (control.value.disabled = disabled),
    };

    const handleAnimationEnd_ = () => foundation.handleAnimationEnd();

    const setChecked = checked => {
      control.value.checked = Array.isArray(checked)
        ? checked.indexOf(props.value) > -1
        : checked;
    };

    const setIndeterminate = indeterminate => {
      control.value && (control.value.indeterminate = indeterminate);
    };

    const installPropertyChangeHooks_ = () => {
      const nativeCb = control.value;
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
      const nativeCb = control.value;
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
      () => props.checked,
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

      root.value.addEventListener(
        getCorrectEventName(window, 'animationend'),
        handleAnimationEnd_,
      );

      installPropertyChangeHooks_();
      if (hasLabel.value) {
        formField = new MDCFormFieldFoundation({
          registerInteractionHandler: (type, handler) => {
            labelEl.value.addEventListener(type, handler);
          },
          deregisterInteractionHandler: (type, handler) => {
            labelEl.value.removeEventListener(type, handler);
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

      setChecked(props.checked);
      foundation.setDisabled(props.disabled);
      setIndeterminate(props.indeterminate);
    });

    onBeforeUnmount(() => {
      root.value.removeEventListener(
        getCorrectEventName(window, 'animationend'),
        handleAnimationEnd_,
      );

      formField?.destroy();

      uninstallPropertyChangeHooks_();
      foundation.destroy();
    });

    return {
      root,
      control,
      labelEl,
      formFieldClasses,
      onChange,
      classes,
      styles,
      hasLabel,
      setChecked,
      setIndeterminate,
      isChecked,
    };
  },
};

// ===
// Private functions
// ===

function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}
