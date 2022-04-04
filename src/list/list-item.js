import { cssClasses } from '@material/list/index.js';
import { computed, inject, reactive, ref, toRefs } from 'vue';
import { CustomLink } from '../base/index.js';
import { useRipplePlugin } from '../ripple/index.js';

let itemId = 0;

const slotNames = {
  START: 'start',
  END: 'end',
  SECONDARY_TEXT: 'secondary-text',
  GRAPHIC: 'graphic',
  META: 'meta',
};

const startNames_ = new Set([
  'avatar',
  'icon',
  'thumbnail',
  'checkbox',
  'radio',
  'switch',
  'image',
  'video',
]);

const endNames_ = new Set(['icon', 'meta', 'checkbox', 'radio', 'switch']);

export default {
  name: 'mcw-list-item',
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    id: String,

    start: { type: String, validator: value => startNames_.has(value) },
    end: { type: String, validator: value => endNames_.has(value) },
  },
  components: { CustomLink },
  setup(props, { slots, attrs }) {
    const root = ref();

    const myItemId = itemId++;

    const hasSlot = name => !!slots[name];

    const isTwoLine = computed(() => {
      return hasSlot(slotNames.SECONDARY_TEXT);
    });

    const hasSecondaryText = hasSlot(slotNames.SECONDARY_TEXT);
    const hasStart = hasSlot(slotNames.START) && !!props.start;
    const hasEnd = hasSlot(slotNames.END) && !!props.end;

    const { isInteractive, registerListItem } = inject('mcwList');

    const uiState = reactive({
      classes: {
        'mdc-list-item': 1,
        'mdc-list-item--disabled': props.disabled,
        'mdc-list-item--with-one-line': !isTwoLine.value,
        'mdc-list-item--with-two-lines': isTwoLine.value,
        [`mdc-list-item--with-leading-${props.start}`]: hasStart,
        [`mdc-list-item--with-trailing-${props.end}`]: hasEnd,
        'mdc-list-item--non-iteractive': !isInteractive,
      },
      attrs: {},
    });

    if (attrs.class) {
      uiState.classes[attrs.class] = 1;
    }

    const { classes: rippleClasses, styles } = useRipplePlugin(root);

    const focus = () => (root.value.$el ?? root.value).focus();

    const myAttributes = computed(() => ({
      ...attrs,
      class: { ...rippleClasses.value, ...uiState.classes },
      style: styles.value,
      ...uiState.attrs,
    }));

    const getPrimaryText = () => {
      const primaryText = (root.value.$el ?? root.value).querySelector(
        `.${cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS}`,
      );

      return primaryText?.textContent ?? '';
    };

    registerListItem({
      itemId: myItemId,
      setAttribute: (attribute, value) =>
        (uiState.attrs = { ...uiState.attrs, [attribute]: value }),
      getAttribute: attribute => myAttributes.value[attribute],

      removeAttribute: attribute => {
        const { [attribute]: removed, ...rest } = myAttributes.value;
        myAttributes.value = rest;
      },

      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: className => !!uiState.classes[className],
      getPrimaryText,
      focus,
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
