import { applyPassive } from '@material/dom/events.js';
import { MDCRadioFoundation } from '@material/radio/foundation.js';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRef,
  toRefs,
  watch,
} from 'vue';
import { formFieldWrapper } from '../base/index.js';
import { useRipplePlugin } from '../ripple/ripple-plugin.js';

let radioId_ = 0;

export default {
  name: 'mcw-radio',

  props: {
    label: String,
    alignEnd: Boolean,
    radioClasses: String,
    name: { type: String, required: true },
    id: { type: String },
    value: String,
    modelValue: String,
    disabled: Boolean,
    checked: Boolean,
  },

  setup(props, { emit }) {
    const uiState = reactive({
      classes: { 'mdc-radio': 1 },
      controlEl: undefined,
      root: undefined,
    });

    const {
      classes: rippleClasses,
      styles,
      activate,
      deactivate,
    } = useRipplePlugin(toRef(uiState, 'root'), {
      isUnbounded: () => true,

      // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
      // UI we desire.
      isSurfaceActive: () => false,
      registerInteractionHandler: (event_, handler) => {
        uiState.controlEl.addEventListener(event_, handler, applyPassive());
      },
      deregisterInteractionHandler: (event_, handler) => {
        uiState.controlEl.removeEventListener(event_, handler, applyPassive());
      },
      computeBoundingRect: () => {
        return uiState.root.getBoundingClientRect();
      },
    });

    let foundation;
    const radioId = props.id ?? `__mcw-radio-${radioId_++}`;

    const rootClasses = computed(() => {
      return {
        ...rippleClasses.value,
        ...uiState.classes,
        ...props.radioClasses,
      };
    });

    const onChange = () => {
      const nativeValue = uiState.controlEl.value;
      nativeValue != props.modelValue &&
        emit('update:modelValue', uiState.controlEl.value);
    };

    const setChecked = checked => {
      uiState.controlEl.checked = checked;
    };

    const onPicked = nv => {
      setChecked(nv == uiState.controlEl.value);
    };

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      setNativeControlDisabled: disabled =>
        uiState.controlEl && uiState.controlEl.disabled == disabled,
    };

    watch(
      () => props.checked,
      nv => {
        setChecked(nv);
      },
    );

    watch(
      () => props.disabled,
      nv => {
        foundation.setDisabled(nv);
      },
    );

    watch(
      () => props.modelValue,
      nv => {
        onPicked(nv);
      },
    );

    onMounted(() => {
      foundation = new MDCRadioFoundation(adapter);

      foundation.init();

      const { checked, disabled, modelValue, value } = props;

      foundation.setDisabled(disabled);
      setChecked(checked || modelValue == value);

      // if checked, need to sync any change of value
      checked && onChange();
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      rootClasses,
      styles,
      onChange,
      onPicked,
      setChecked,
      radioId,
      activate,
      deactivate,
    };
  },

  components: { formFieldWrapper },
};
