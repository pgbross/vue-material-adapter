import { MDCSwitchFoundation } from '@material/switch/foundation';
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
  name: 'mcw-switch',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: Boolean,
    disabled: Boolean,
    value: String,
    label: String,
    alignEnd: Boolean,
    name: String,
  },

  setup(props, { slots, emit }) {
    const control = ref(null);
    const root = ref(null);
    const uiState = reactive({
      classes: { 'mdc-switch': 1 },
      nativeControlChecked: props.checked,
      nativeControlDisabled: props.disabled,
      nativeAttrs: {},
    });

    const { classes: rippleClasses, styles } = useRipplePlugin(root);

    let foundation;

    const classes = computed(() => {
      return { ...rippleClasses.value, ...uiState.classes };
    });

    const hasLabel = computed(() => {
      return props.label || slots.default;
    });

    const onChanged = event => {
      foundation?.handleChange(event);
      emit('change', event.target.checked);
    };

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      setNativeControlChecked: checked =>
        (uiState.nativeControlChecked = checked),
      setNativeControlDisabled: disabled =>
        (uiState.nativeControlDisabled = disabled),

      setNativeControlAttr: (attr, value) => {
        uiState.nativeAttrs[attr] = value;
      },
    };

    watch(
      () => props.checked,
      (nv, ov) => {
        nv != ov && foundation?.setChecked(nv);
      },
    );

    watch(
      () => props.disabled,
      (nv, ov) => {
        nv != ov && foundation?.setDisabled(nv);
      },
    );

    onMounted(() => {
      foundation = new MDCSwitchFoundation(adapter);

      foundation.init();
      foundation.setChecked(props.checked);
      foundation.setDisabled(props.disabled);
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      classes,
      hasLabel,
      onChanged,
      control,
      root,
      styles,
    };
  },
};
