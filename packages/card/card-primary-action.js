import { computed, ref } from '@vue/composition-api';
import { CustomLink, customLinkProps, useCustomLink } from '~/base/index.js';
import { useRipplePlugin } from '~/ripple/index.js';

export default {
  name: 'mcw-card-primary-action',
  components: { CustomLink },
  props: { ...customLinkProps },
  setup(props, { listeners }) {
    const { link } = useCustomLink(props);
    const root = ref(null);

    const { classes: rippleClasses, styles } = useRipplePlugin(root);
    const classes = computed(() => {
      return { ...rippleClasses.value, 'mdc-card__primary-action': 1 };
    });

    return { classes, styles, link, root, listeners };
  },
};
