import { computed, inject, reactive, ref, toRefs } from 'vue';
import { CustomLink } from '~/base/index.js';
import { useRipplePlugin } from '~/ripple/index.js';

let itemId = 0;

export default {
  name: 'mcw-list-item',
  inheritAttrs: false,
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

    const myItemId = itemId++;
    const uiState = reactive({
      classes: {
        'mdc-list-item': 1,
        'mdc-list-item--disabled': props.disabled,
      },
      attrs: {},
    });

    const registerListItem = inject('registerListItem');

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
        // class: uiState.classes,
        ...attrs,
        class: { ...rippleClasses.value, ...uiState.classes },
        style: styles.value,
        ...uiState.attrs,
      };
    });

    const addClass = className => {
      uiState.classes = { ...uiState.classes, [className]: true };
    };

    const removeClass = className => {
      // eslint-disable-next-line no-unused-vars
      const { [className]: removed, ...rest } = uiState.classes;
      uiState.classes = rest;
    };

    const removeAttribute = attr => {
      // eslint-disable-next-line no-unused-vars
      const { [attr]: removed, ...rest } = uiState.attrs;
      uiState.attrs = rest;
    };

    const setAttribute = (attr, value) => {
      uiState.attrs = { ...uiState.attrs, [attr]: value };
    };

    const getAttribute = attr => {
      return myAttrs.value[attr];
    };

    const classList = {
      add: addClass,
      remove: removeClass,
      contains: className => !!uiState.classes[className],
    };

    registerListItem({
      itemId: myItemId,
      removeAttribute,
      setAttribute,
      getAttribute,
      classList,
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
      myItemId,
    };
  },
};
