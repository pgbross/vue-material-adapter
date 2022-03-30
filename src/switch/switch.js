import {
  CssClasses,
  MDCSwitchRenderFoundation,
} from '@material/switch/index.js';
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

let switchId_ = 0;

export default {
  name: 'mcw-switch',

  props: {
    modelValue: Boolean,
    disabled: Boolean,
    value: String,
    label: String,
    alignEnd: Boolean,
    name: String,
    id: String,
  },

  setup(props, { slots, emit }) {
    const uiState = reactive({
      classes: { [CssClasses.SELECTED]: props.modelValue },
      attrs: {},
      root: undefined,
      rippleEl: undefined,
    });

    const state = {
      disabled: props.disabled,
      processing: false,
      selected: props.modelValue,
    };

    const { classes: rippleClasses, styles } = useRipplePlugin(
      toRef(uiState, 'root'),
      {
        unbounded: true,
        computeBoundingRect: () => uiState.rippleEl.getBoundingClientRect(),
      },
    );

    let foundation;
    const switchId = props.id ?? `__mcw-switch-${switchId_++}`;

    const classes = computed(() => {
      return { ...rippleClasses.value, ...uiState.classes };
    });

    const hasLabel = computed(() => {
      return !!props.label || slots.default;
    });

    const adapter = {
      addClass: className => {
        uiState.classes = { ...uiState.classes, [className]: true };
        if (className.endsWith('unselected')) {
          props.modelValue && emit('update:modelValue', false);
        } else if (className.endsWith('selected')) {
          !props.modelValue && emit('update:modelValue', true);
        }
      },
      hasClass: className => uiState.root.classList.contains(className),
      isDisabled: () => uiState.root.disabled,
      removeClass: className => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      setAriaChecked: ariaChecked =>
        (uiState.attrs['aria-checked'] = ariaChecked),
      setDisabled: disabled => {
        uiState.root.disabled = disabled;
      },
      state,
    };

    watch(
      () => props.modelValue,
      nv => {
        state.selected = nv;
      },
    );

    watch(
      () => props.disabled,
      nv => {
        state.disabled = nv;
      },
    );

    const handleClick = event => {
      foundation.handleClick(event);
    };

    onMounted(() => {
      if (props.disabled) {
        uiState.root.disabled = true;
      }

      foundation = new MDCSwitchRenderFoundation(adapter);

      foundation.init();

      foundation.initFromDOM();
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      classes,
      hasLabel,
      styles,
      switchId,
      handleClick,
    };
  },
  components: { formFieldWrapper },
};
