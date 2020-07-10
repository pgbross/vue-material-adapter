import { applyPassive } from '@material/dom/events';
import { MDCFormFieldFoundation } from '@material/form-field/foundation';
import { MDCRadioFoundation } from '@material/radio/foundation';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  watch,
  toRef,
} from '@vue/composition-api';
import { useRipplePlugin } from '~/ripple/ripple-plugin';

let radioId_ = 0;

export default {
  name: 'mcw-radio',
  model: {
    prop: 'picked',
    event: 'change',
  },
  props: {
    label: String,
    alignEnd: Boolean,
    radioClasses: String,
    name: { type: String, required: true },
    id: { type: String },
    value: String,
    picked: String,
    disabled: Boolean,
    checked: Boolean,
  },

  setup(props, { emit, attrs }) {
    const uiState = reactive({
      classes: { 'mdc-radio': 1 },
      controlEl: null,
      labelEl: null,
      root: null,
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
      registerInteractionHandler: (evt, handler) => {
        uiState.controlEl.addEventListener(evt, handler, applyPassive());
      },
      deregisterInteractionHandler: (evt, handler) => {
        uiState.controlEl.removeEventListener(evt, handler, applyPassive());
      },
      computeBoundingRect: () => {
        return uiState.root.getBoundingClientRect();
      },
    });

    let foundation;
    let formField;
    const radioId = props.id ?? `__mcw-radio-${radioId_++}`;

    const rootClasses = computed(() => {
      return {
        ...rippleClasses.value,
        ...uiState.classes,
        ...props.radioClasses,
      };
    });

    const formFieldClasses = computed(() => {
      return {
        'mdc-form-field': 1,
        'mdc-form-field--align-end': props.alignEnd,
      };
    });

    const onChange = () => {
      const nativeValue = uiState.controlEl.value;
      nativeValue != props.picked && emit('change', uiState.controlEl.value);
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
        // eslint-disable-next-line no-unused-vars
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
      () => props.picked,
      nv => {
        onPicked(nv);
      },
    );

    onMounted(() => {
      foundation = new MDCRadioFoundation(adapter);

      formField = new MDCFormFieldFoundation({
        registerInteractionHandler: (type, handler) =>
          uiState.labelEl?.addEventListener(type, handler),
        deregisterInteractionHandler: (type, handler) =>
          uiState.labelEl?.removeEventListener(type, handler),
        activateInputRipple: () => {
          activate();
        },
        deactivateInputRipple: () => {
          deactivate();
        },
      });

      foundation.init();
      formField.init();

      const { checked, disabled, picked, value } = props;

      foundation.setDisabled(disabled);
      setChecked(checked || picked == value);

      // if checked, need to sync any change of value
      checked && onChange();
    });

    onBeforeUnmount(() => {
      foundation.destroy();
      formField.destroy();
    });

    return {
      ...toRefs(uiState),
      rootClasses,
      formFieldClasses,
      styles,
      onChange,
      onPicked,
      setChecked,
      radioId,
    };
  },
};
