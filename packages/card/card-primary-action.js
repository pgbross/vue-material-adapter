import { computed, ref } from '@vue/composition-api';
import { CustomLink } from '~/base/index.js';
import { useRipplePlugin } from '~/ripple/index.js';

export default {
  name: 'mcw-card-primary-action',
  inheritAttrs: false,
  components: { CustomLink },
  setup(props, { listeners }) {
    const root = ref(null);

    const { classes: rippleClasses, styles } = useRipplePlugin(root);
    const classes = computed(() => {
      return { ...rippleClasses.value, 'mdc-card__primary-action': 1 };
    });

    return { classes, styles, root, listeners };
  },
};
