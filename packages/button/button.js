import { computed, ref } from '@vue/composition-api';
import {
  CustomButton,
  customButtonProps,
  useCutomButtonPlugin,
} from '~/base/index.js';
import { useRipplePlugin } from '~/ripple/index.js';

export default {
  name: 'mcw-button',
  props: {
    ...customButtonProps,
    raised: Boolean,
    unelevated: Boolean,
    outlined: Boolean,
    icon: String,
    trailingIcon: String,
  },
  components: { CustomButton },
  setup(props, { listeners, slots }) {
    const root = ref(null);

    const { classes: rippleClasses, styles } = useRipplePlugin(root);
    const { link } = useCutomButtonPlugin(props);

    const classes = computed(() => {
      return {
        ...rippleClasses.value,
        'mdc-button': true,
        'mdc-button--raised': props.raised,
        'mdc-button--unelevated': props.unelevated && !props.raised,
        'mdc-button--outlined': props.outlined,
      };
    });

    const haveIcon = computed(() => {
      return slots.icon ?? props.icon;
    });

    const haveTrailingIcon = computed(() => {
      return slots.trailingIcon ?? props.trailingIcon;
    });

    return {
      styles,
      classes,
      listeners,
      root,
      haveIcon,
      haveTrailingIcon,
      link,
    };
  },
};
