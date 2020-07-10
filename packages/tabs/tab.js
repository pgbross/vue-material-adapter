/* eslint-disable quote-props */
import MDCTabFoundation from '@material/tab/foundation';
import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRefs,
} from '@vue/composition-api';
import { CustomLinkMixin, emitCustomEvent } from '~/base/index.js';
import { useRipplePlugin } from '~/ripple/ripple-plugin';

let tabId_ = 0;

export default {
  name: 'mcw-tab',
  mixins: [CustomLinkMixin],
  props: {
    active: Boolean,
    icon: [String, Array, Object],
    minWidth: Boolean,
  },
  setup(props, { slots }) {
    const content = ref(null);
    const iconEl = ref(null);
    const tabIndicator = ref(null);
    const root = ref(null);
    const rippleSurface = ref(null);

    const uiState = reactive({
      classes: {
        'mdc-tab': 1,

        'mdc-tab--min-width': props.minWidth,
      },
      rootAttrs: {},
      styles: {},
    });

    const { classes: rippleClasses, styles } = useRipplePlugin(root);

    const { fade, stacked, spanContent, tabList } = inject('mcwTabList');

    uiState.classes['mdc-tab--stacked'] = stacked;

    const hasIcon = computed(() => {
      if (props.icon || slots.icon) {
        return props.icon ? extractIconProp(props.icon) : {};
      }
      return false;
    });

    const hasText = computed(() => {
      return !!slots.default;
    });

    let foundation;
    const tabId = `__mcw-tab-${tabId_++}`;

    let rootEl;

    const activate = computeIndicatorClientRect =>
      foundation.activate(computeIndicatorClientRect);

    const deactivate = () => foundation.deactivate();
    const isActive = () => foundation.isActive();

    const setActive = isActive => {
      if (isActive) {
        (uiState.classes = { ...uiState.classes, 'mdc-tab--active': true }),
          tabIndicator.value.activate();
      }
    };

    const computeIndicatorClientRect = () =>
      tabIndicator.value.computeContentClientRect();

    const computeDimensions = () => foundation.computeDimensions();

    const focus = () => rootEl.focus();

    const onClick = evt => foundation.handleClick(evt);

    const adapter = {
      setAttr: (attr, value) =>
        (uiState.rootAttrs = { ...uiState.rootAttrs, [attr]: value }),
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: className => !!uiState.classes[className],
      activateIndicator: previousIndicatorClientRect =>
        tabIndicator.value.activate(previousIndicatorClientRect),
      deactivateIndicator: () => tabIndicator.value.deactivate(),
      notifyInteracted: () =>
        emitCustomEvent(
          rootEl,
          MDCTabFoundation.strings.INTERACTED_EVENT,
          { tabId },
          true /* bubble */,
        ),
      getOffsetLeft: () => rootEl.offsetLeft,
      getOffsetWidth: () => rootEl.offsetWidth,
      getContentOffsetLeft: () => content.value.offsetLeft,
      getContentOffsetWidth: () => content.value.offsetWidth,
      focus: () => rootEl.focus(),
    };

    onMounted(() => {
      // this.id = this.vma_uid_;

      rootEl = root.value.$el;
      foundation = new MDCTabFoundation(adapter);
      foundation.init();

      tabList.value.push({
        id: tabId,
        activate,
        deactivate,
        focus,
        computeIndicatorClientRect,
        computeDimensions,
        isActive,
      });
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      content,
      root,
      rippleSurface,
      iconEl,
      tabIndicator,
      hasIcon,
      hasText,
      onClick,
      setActive,
      tabId,
      fade,
      spanContent,
      rippleClasses,
      styles,
    };
  },
};

// ===
// Private functions
// ===

function extractIconProp(iconProp) {
  if (typeof iconProp === 'string') {
    return {
      classes: { 'material-icons': true },
      content: iconProp,
    };
  } else if (iconProp instanceof Array) {
    return {
      classes: iconProp.reduce(
        (result, value) => Object.assign(result, { [value]: true }),
        {},
      ),
    };
  } else if (typeof iconProp === 'object') {
    return {
      classes: iconProp.className
        .split(' ')
        .reduce(
          (result, value) => Object.assign(result, { [value]: true }),
          {},
        ),
      content: iconProp.textContent,
    };
  }
}
