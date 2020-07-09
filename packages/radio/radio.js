import { applyPassive } from '@material/dom/events';
import { MDCFormFieldFoundation } from '@material/form-field/foundation';
import { MDCRadioFoundation } from '@material/radio/foundation';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRefs,
  watch,
} from '@vue/composition-api';
import { DispatchFocusMixin, VMAUniqueIdMixin } from '~/base/index.js';
import { useRipplePlugin } from '~/ripple/ripple-plugin';

export default {
  name: 'mcw-radio',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
  model: {
    prop: 'picked',
    event: 'change',
  },
  props: {
    label: String,
    alignEnd: Boolean,
    radioClasses: String,
    name: { type: String, required: true },
    id: { type: String, required: true },
    value: String,
    picked: String,
    disabled: Boolean,
    checked: Boolean,
  },

  setup(props, { emit }) {
    const controlEl = ref(null);
    const root = ref(null);
    const labelEl = ref(null);

    const uiState = reactive({
      classes: { 'mdc-radio': 1 },
    });

    const {
      classes: rippleClasses,
      styles,
      activate,
      deactivate,
    } = useRipplePlugin(root, {
      isUnbounded: () => true,

      // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
      // UI we desire.
      isSurfaceActive: () => false,
      registerInteractionHandler: (evt, handler) => {
        controlEl.value.addEventListener(evt, handler, applyPassive());
      },
      deregisterInteractionHandler: (evt, handler) => {
        controlEl.value.removeEventListener(evt, handler, applyPassive());
      },
      computeBoundingRect: () => {
        return root.value.getBoundingClientRect();
      },
    });

    let foundation;
    let formField;

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
      const nativeValue = controlEl.value.value;
      nativeValue != props.picked && emit('change', controlEl.value.value);
    };

    const setChecked = checked => {
      controlEl.value.checked = checked;
    };

    const onPicked = nv => {
      setChecked(nv == controlEl.value.value);
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
        controlEl.value && controlEl.value.disabled == disabled,
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
        registerInteractionHandler: (type, handler) => {
          labelEl.value && labelEl.value.addEventListener(type, handler);
        },
        deregisterInteractionHandler: (type, handler) => {
          labelEl.value && labelEl.value.removeEventListener(type, handler);
        },
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
      controlEl,
      labelEl,
      root,
      styles,
      onChange,
      onPicked,
      setChecked,
    };
  },
};
