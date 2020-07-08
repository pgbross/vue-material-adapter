import { computed } from '@vue/composition-api';

export default {
  props: { twoLine: String, disabled: Boolean, icon: String },
  setup(props, { slots }) {
    const isTwoLine = computed(() => {
      return props.twoLine || slots['secondary-text'];
    });

    const classes = computed(() => ({
      'mdc-list-item': 1,
      'mdc-list-item--disabled': props.disabled,
    }));

    return { isTwoLine, classes };
  },
};
