import { computed } from '@vue/composition-api';

export default {
  props: {
    twoLine: String,
    disabled: Boolean,
    icon: [String, Boolean],
    groupIcon: String,
  },
  setup(props, { slots }) {
    const isTwoLine = computed(() => {
      return props.twoLine || slots['secondary-text'];
    });

    const classes = computed(() => ({
      'mdc-list-item': 1,
      'mdc-list-item--disabled': props.disabled,
    }));

    const groupClasses = computed(() => ({
      'mdc-menu__selection-group-icon': props.groupIcon,
    }));

    const needGraphic = computed(
      () => typeof props.icon == 'string' || !!props.groupIcon,
    );
    const listIcon = computed(
      () => (typeof props.icon === 'string' && props.icon) || props.groupIcon,
    );

    return {
      isTwoLine,
      classes,
      needGraphic,
      listIcon,
      groupClasses,
    };
  },
};
