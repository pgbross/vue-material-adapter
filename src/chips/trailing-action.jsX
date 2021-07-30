import { MDCChipTrailingActionFoundation } from '@material/chips/trailingaction/foundation.js';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { emitCustomEvent } from '../base/index.js';
import { useRipplePlugin } from '../ripple/ripple-plugin.js';

const { strings } = MDCChipTrailingActionFoundation;

export default {
  name: 'mcw-chip-trailing-action',
  setup() {
    const root = ref();
    let foundation;

    const { classes, styles } = useRipplePlugin(root);

    const adapter = {
      focus: () => {
        root.value.focus();
      },
      getAttribute: attribute => root.value.getAttribute(attribute),
      notifyInteraction: trigger =>
        emitCustomEvent(
          root.value,
          strings.INTERACTION_EVENT,
          {
            trigger,
          },
          true,
        ),
      notifyNavigation: key =>
        emitCustomEvent(
          root.value,
          strings.NAVIGATION_EVENT,
          {
            key,
          },
          true,
        ),
      setAttribute: (attribute, value) => {
        root.value.setAttribute(attribute, value);
      },
    };

    const onClick = event_ => foundation.handleClick(event_);
    const onKeydown = event_ => foundation.handleKeydown(event_);
    const isNavigable = () => foundation.isNavigable();
    const focus = () => foundation.focus();
    const removeFocus = () => foundation.removeFocus();

    onMounted(() => {
      foundation = new MDCChipTrailingActionFoundation(adapter);
      foundation.init();
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return {
      root,
      styles,
      classes,
      onClick,
      onKeydown,
      isNavigable,
      focus,
      removeFocus,
    };
  },
};
