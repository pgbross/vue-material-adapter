import { computed, ref } from 'vue';
import { CustomLink } from '../base/index.js';
import { useRipplePlugin } from '../ripple/index.js';

export default {
  name: 'mcw-card-primary-action',
  components: { CustomLink },
  setup() {
    const root = ref();

    const { classes: rippleClasses, styles } = useRipplePlugin(root);
    const classes = computed(() => {
      return { ...rippleClasses.value, 'mdc-card__primary-action': 1 };
    });

    return {
      classes,
      styles,
      root,
    };
  },
};
