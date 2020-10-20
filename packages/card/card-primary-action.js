import { computed, ref } from 'vue';
import { CustomLink } from '~/base/index.js';
import { useRipplePlugin } from '~/ripple/index.js';

export default {
  name: 'mcw-card-primary-action',
  inheritAttrs: false,
  components: { CustomLink },
  setup(props, { attrs }) {
    const root = ref(null);

    const { classes: rippleClasses, styles } = useRipplePlugin(root);
    const classes = computed(() => {
      return { ...rippleClasses.value, 'mdc-card__primary-action': 1 };
    });

    // eslint-disable-next-line no-unused-vars
    const { onClick: fn, ...filteredAttrs } = attrs;

    const onClick = () => (attrs.onClick ? attrs.onClick() : null);

    return {
      classes,
      styles,
      root,
      onClick,
      filteredAttrs,
    };
  },
};
