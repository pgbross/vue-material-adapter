import { computed, h, ref } from 'vue';
import { CustomLink } from '../base/index.js';
import { useRipplePlugin } from '../ripple/index.js';

export default {
  name: 'mcw-card-primary-action',
  setup(props, { slots }) {
    const root = ref();

    const { classes: rippleClasses, styles } = useRipplePlugin(root);
    const classes = computed(() => {
      return { ...rippleClasses.value, 'mdc-card__primary-action': 1 };
    });

    return () => {
      return h(
        CustomLink,
        { ref: root, class: classes.value, style: styles, tabindex: '0' },
        () => [slots.default(), h('div', { class: 'mdc-card__ripple' })],
      );
    };
  },
};
