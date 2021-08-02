import {
  MDCChipPrimaryActionFoundation,
  MDCChipTrailingActionFoundation,
} from '@material/chips/action/index.js';
import {
  computed,
  getCurrentInstance,
  inject,
  onMounted,
  reactive,
  toRef,
  toRefs,
} from 'vue';
import { emitCustomEvent } from '../base/index.js';
import { useRipplePlugin } from '../ripple/ripple-plugin.js';

export default {
  props: {
    primary: { type: Boolean },
    trailingAction: { type: Boolean },
  },
  setup(props) {
    const uiState = reactive({ rippleEl: undefined, root: undefined });

    const { classes: rippleClasses, styles } = useRipplePlugin(
      toRef(uiState, 'root'),
      {
        unbounded: true,
        computeBoundingRect: () => uiState.rippleEl.getBoundingClientRect(),
      },
    );

    const classes = computed(() => {
      return {
        ...rippleClasses.value,
        ...uiState.classes,
        'mdc-evolution-chip__action--trailing': !props.primary,
        'mdc-evolution-chip__action--primary': props.primary,
      };
    });

    const rippleClass = `mdc-evolution-chip__ripple--${
      props.primary ? 'primary' : 'trailing'
    }`;

    const registerAction = inject('registerAction');

    let foundation;

    const adapter = {
      emitEvent: (eventName, eventDetail) => {
        emitCustomEvent(
          uiState.root,
          eventName,
          eventDetail,
          true /* shouldBubble */,
        );
      },
      focus: () => {
        uiState.root.focus();
      },
      getAttribute: attributeName => uiState.root.getAttribute(attributeName),
      getElementID: () => uiState.root.id,
      removeAttribute: name => {
        uiState.root.removeAttribute(name);
      },
      setAttribute: (name, value) => {
        uiState.root.setAttribute(name, value);
      },
    };

    const setDisabled = isDisabled => {
      foundation.setDisabled(isDisabled);
    };

    const isDisabled = () => {
      return foundation.isDisabled();
    };

    const setFocus = behavior => {
      foundation.setFocus(behavior);
    };

    const isFocusable = () => {
      return foundation.isFocusable();
    };

    const setSelected = isSelected => {
      foundation.setSelected(isSelected);
    };

    const isSelected = () => {
      return foundation.isSelected();
    };

    const isSelectable = () => {
      return foundation.isSelectable();
    };

    const actionType = () => {
      return foundation.actionType();
    };

    onMounted(() => {
      foundation = props.primary
        ? new MDCChipPrimaryActionFoundation(adapter)
        : new MDCChipTrailingActionFoundation();

      foundation.init();

      registerAction(getCurrentInstance().ctx);
    });

    return {
      ...toRefs(uiState),
      classes,
      styles,
      setDisabled,
      isDisabled,
      setFocus,
      isFocusable,
      setSelected,
      isSelected,
      isSelectable,
      actionType,
      rippleClass,
    };
  },
};
