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

const graphicNames_ = new Set([
  'avatar',
  'icon',
  'medium',
  'large',
  'radio',
  'control',
  'null',
]);

const endNames_ = new Set(['icon', 'meta', 'checkbox', 'radio', 'switch']);

export default {
  name: 'mcw-list-item',
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    id: String,
    graphic: { type: String, validator: value => graphicNames_.has(value) },
    group: { type: String },
    tabIndex: { type: Number, default: () => -1 },
    // twoLine: { type: Boolean },
    multipleGraphics: { type: Boolean },
    noninteractive: { type: Boolean },
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
    const hasGraphic = !!props.graphic && hasSlot(slotNames.GRAPHIC);
    const hasMeta = hasSlot(slotNames.META);

    const { isInteractive } = inject('mcwList');

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
      hasGraphic,
      hasMeta,
      isInteractive,
      hasSecondaryText,
    };
  },
};
