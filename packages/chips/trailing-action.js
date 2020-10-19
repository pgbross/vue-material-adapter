import { MDCChipTrailingActionFoundation } from '@material/chips/trailingaction/foundation';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { emitCustomEvent } from '~/base/index.js';
import { useRipplePlugin } from '~/ripple/ripple-plugin.js';

const { strings } = MDCChipTrailingActionFoundation;

export default {
  name: 'mcw-chip-trailing-action',
  setup() {
    const root = ref(null);
    let foundation;

    const { classes, styles } = useRipplePlugin(root);

    const adapter = {
      focus: () => {
        root.value.focus();
      },
      getAttribute: attr => root.value.getAttribute(attr),
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
          strings.INTERACTION_EVENT,
          {
            key,
          },
          true,
        ),
      setAttribute: (attr, value) => {
        root.value.setAttribute(attr, value);
      },
    };

    const onClick = evt => foundation.handleClick(evt);
    const onKeydown = evt => foundation.handleKeydown(evt);
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
