import { computed, reactive, ref, toRefs } from '@vue/composition-api';
import { CustomLink } from '~/base/index.js';
import { useRipplePlugin } from '~/ripple/index.js';

let listItemId_ = 0;

export default {
  name: 'mcw-list-item',
  props: {
    twoLine: String,
    disabled: Boolean,
    icon: [String, Boolean],
    groupIcon: String,
    selected: Boolean,
    checked: Boolean,
    name: String,
    to: [String, Object],
    noAutoRole: Boolean,
    trailing: Boolean,
  },
  components: { CustomLink },
  setup(props, { slots, listeners, attrs }) {
    const root = ref(null);

    const uiState = reactive({
      classes: {
        'mdc-list-item': 1,
        'mdc-list-item--disabled': props.disabled,
      },
      attrs: {},
      styles: {},
    });

    const myAttrs = computed(() => {
      return { ...attrs, ...uiState.attrs, to: props.to };
    });

    const radioChecked = computed(() => {
      return attrs?.['aria-checked'] == 'true';
    });

    const checkbox = computed(
      () => !props.trailing && attrs?.role == 'checkbox',
    );

    const radio = computed(() => !props.trailing && attrs?.role == 'radio');
    const trailingRadio = computed(
      () => props.trailing && attrs?.role == 'radio',
    );

    const trailingCheckbox = computed(
      () => props.trailing && attrs?.role == 'checkbox',
    );

    const itemId = listItemId_++;

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

    const addClass = className =>
      (uiState.classes = { ...uiState.classes, [className]: true });

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

    const setAttribute = (attr, value) =>
      (uiState.attrs = { ...uiState.attrs, [attr]: value });

    const getAttribute = attr => {
      return myAttrs.value[attr];
    };

    const addItemId = evt => (evt.__itemId = itemId);

    const classList = {
      add: addClass,
      remove: removeClass,
      contains: className => !!uiState.classes[className],
    };

    const focus = () => {
      (root.value.$el ?? root.value).focus();
    };

    const myListeners = {
      ...listeners,
      click: addItemId,
      focusin: addItemId,
    };

    return {
      ...toRefs(uiState),
      myListeners,
      styles,
      focus,
      root,
      classes,
      isTwoLine,
      needGraphic,
      listIcon,
      groupClasses,
      addClass,
      removeClass,
      setAttribute,
      getAttribute,
      removeAttribute,
      itemId,
      checkbox,
      radio,
      radioChecked,
      classList,
      myAttrs,
      trailingRadio,
      trailingCheckbox,
    };
  },
};
