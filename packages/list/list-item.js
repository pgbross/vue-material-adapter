import { computed, reactive, ref, toRefs } from 'vue';
import { CustomLink } from '~/base/index.js';
import { useRipplePlugin } from '~/ripple/index.js';

export default {
  name: 'mcw-list-item',
  props: {
    twoLine: String,
    disabled: Boolean,
    icon: [String, Boolean],
    groupIcon: String,
    name: String,
    trailing: Boolean,
  },
  components: { CustomLink },
  setup(props, { slots, attrs }) {
    const root = ref(null);

    const uiState = reactive({
      classes: {
        'mdc-list-item': 1,
        'mdc-list-item--disabled': props.disabled,
      },
    });

    const radioChecked = computed(() => {
      return attrs['aria-checked'] == 'true';
    });

    const checkbox = computed(
      () => !props.trailing && attrs.role == 'checkbox',
    );

    const radio = computed(() => !props.trailing && attrs.role == 'radio');
    const trailingRadio = computed(
      () => props.trailing && attrs.role == 'radio',
    );

    const trailingCheckbox = computed(
      () => props.trailing && attrs.role == 'checkbox',
    );

    const { classes: rippleClasses, styles } = useRipplePlugin(root);

    const classes = computed(() => {
      return { ...rippleClasses.value, ...uiState.classes };
    });

    const isTwoLine = computed(() => {
      return props.twoLine || slots['secondary-text'];
    });

    const groupClasses = computed(() => ({
      'mdc-menu__selection-group-icon': props.groupIcon,
    }));

    const needGraphic = computed(
      () => typeof props.icon == 'string' || !!props.groupIcon,
    );
    const listIcon = computed(
      () => (typeof props.icon === 'string' && props.icon) || props.groupIcon,
    );

    const focus = () => {
      (root.value.$el ?? root.value).focus();
    };

    const myAttrs = computed(() => {
      return {
        class: classes.value,
        style: styles.value,
      };
    });

    return {
      ...toRefs(uiState),
      focus,
      root,
      isTwoLine,
      needGraphic,
      listIcon,
      groupClasses,
      checkbox,
      radio,
      radioChecked,
      myAttrs,
      trailingRadio,
      trailingCheckbox,
    };
  },
};
