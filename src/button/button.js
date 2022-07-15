import { computed, defineComponent, ref } from 'vue';
import { CustomLink } from '../base/index.js';
import { useRipplePlugin } from '../ripple/index.js';

export default defineComponent({
  name: 'mcw-button',
  props: {
    raised: Boolean,
    unelevated: Boolean,
    outlined: Boolean,
    icon: String,
    trailingIcon: String,
    isTouch: Boolean,
  },
  components: { CustomLink },
  setup(props, { slots }) {
    const root = ref();

    const { classes: rippleClasses, styles } = useRipplePlugin(root);

    const haveIcon = computed(() => {
      return slots.icon ?? props.icon;
    });

    const haveTrailingIcon = computed(() => {
      return slots.trailingIcon ?? props.trailingIcon;
    });

    const classes = computed(() => {
      return {
        ...rippleClasses.value,
        'mdc-button': true,
        'mdc-button--raised': props.raised,
        'mdc-button--unelevated': props.unelevated && !props.raised,
        'mdc-button--outlined': props.outlined,
        'mdc-button--icon-leading': haveIcon.value,
        'mdc-button--icon-trailing': haveTrailingIcon.value,
      };
    });

    return {
      styles,
      classes,
      root,
      haveIcon,
      haveTrailingIcon,
    };
  },
});
