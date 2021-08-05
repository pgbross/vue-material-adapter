import { computed, inject, reactive, ref, toRefs } from 'vue';
import { CustomLink } from '../base/index.js';
import { useRipplePlugin } from '../ripple/index.js';

let itemId = 0;

const slotNames = {
  LEADING_ICON: 'leading-icon',
  LEADING_IMAGE: 'leading-image',
  TRAILING_ICON: 'trailing-icon',
  TRAILING_META: 'trailing-meta',
  TRAILING_RADIO: 'trailing-radio',
  TRAILING_CHECKBOX: 'trailing-checkbox',
  SECONDARY_TEXT: 'secondary-text',
};

export default {
  name: 'mcw-list-item',
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    name: String,
    id: String,
  },
  components: { CustomLink },
  setup(props, { slots, attrs }) {
    const root = ref();

    const myItemId = itemId++;

    const hasSlot = name => !!slots[name];

    const isTwoLine = computed(() => {
      return props.twoLine || hasSlot(slotNames.SECONDARY_TEXT);
    });

    const hasLeadingIcon = hasSlot(slotNames.LEADING_ICON);
    const hasLeadingImage = hasSlot(slotNames.LEADING_IMAGE);
    const hasTrailingIcon = hasSlot(slotNames.TRAILING_ICON);
    const hasTrailingMeta = hasSlot(slotNames.TRAILING_META);
    const hasTrailingRadio = hasSlot(slotNames.TRAILING_RADIO);
    const hasTrailingCheckbox = hasSlot(slotNames.TRAILING_CHECKBOX);

    const hasSecondaryText = hasSlot(slotNames.SECONDARY_TEXT);

    const hasStart = hasLeadingIcon || hasLeadingImage;
    const hasEnd =
      hasTrailingIcon ||
      hasTrailingMeta ||
      hasTrailingRadio ||
      hasTrailingCheckbox;

    const { isInteractive } = inject('mcwList');

    const uiState = reactive({
      classes: {
        'mdc-list-item': 1,
        'mdc-list-item--disabled': props.disabled,
        'mdc-list-item--with-one-line': !isTwoLine.value,
        'mdc-list-item--with-two-lines': isTwoLine.value,
        'mdc-list-item--with-leading-icon': hasLeadingIcon,
        'mdc-list-item--with-leading-image': hasLeadingImage,
        'mdc-list-item--non-iteractive': !isInteractive,
        'mdc-list-item--with-trailing-icon': hasTrailingIcon,
        'mdc-list-item--with-trailing-meta': hasTrailingMeta,
        'mdc-list-item--with-trailing-radio': hasTrailingRadio,
        'mdc-list-item--with-trailing-checkbox': hasTrailingCheckbox,
      },
      attrs: {},
    });

    if (attrs.class) {
      uiState.classes[attrs.class] = 1;
    }

    const registerListItem = inject('registerListItem');

    const { classes: rippleClasses, styles } = useRipplePlugin(root);

    const focus = () => {
      (root.value.$el ?? root.value).focus();
    };

    const myAttributes = computed(() => {
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

    const removeAttribute = attribute => {
      // eslint-disable-next-line no-unused-vars
      const { [attribute]: removed, ...rest } = uiState.attrs;
      uiState.attrs = rest;
    };

    const setAttribute = (attribute, value) => {
      uiState.attrs = { ...uiState.attrs, [attribute]: value };
    };

    const getAttribute = attribute => {
      return myAttributes.value[attribute];
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
      myAttrs: myAttributes,
      myItemId,
      hasStart,
      hasEnd,
      isInteractive,
      hasSecondaryText,
    };
  },
};
