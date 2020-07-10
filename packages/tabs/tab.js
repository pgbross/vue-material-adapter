/* eslint-disable quote-props */
import MDCTabFoundation from '@material/tab/foundation';
import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  toRef,
} from '@vue/composition-api';
import { CustomLink, emitCustomEvent } from '~/base/index.js';
import { useRipplePlugin } from '~/ripple/ripple-plugin';

let tabId_ = 0;

export default {
  name: 'mcw-tab',
  inheritAttrs: false,
  props: {
    active: Boolean,
    icon: [String, Array, Object],
    minWidth: Boolean,
  },
  components: { CustomLink },
  setup(props, { slots, attrs }) {
    const uiState = reactive({
      classes: {
        'mdc-tab': 1,

        'mdc-tab--min-width': props.minWidth,
      },
      rootAttrs: {
        role: 'tab',
        'aria-selected': 'false',
        tabindex: '-1',
        tag: 'button',
      },
      styles: {},

      content: null,
      iconEl: null,
      tabIndicator: null,
      root: null,
      rippleSurface: null,
    });

    const { classes: rippleClasses, styles } = useRipplePlugin(
      toRef(uiState, 'root'),
    );
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

    const linkAttrs = computed(() => ({ ...attrs, ...uiState.rootAttrs }));

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
          uiState.tabIndicator.activate();
      }
    };

    const computeIndicatorClientRect = () =>
      uiState.tabIndicator.computeContentClientRect();

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
        uiState.tabIndicator.activate(previousIndicatorClientRect),
      deactivateIndicator: () => uiState.tabIndicator.deactivate(),
      notifyInteracted: () =>
        emitCustomEvent(
          rootEl,
          MDCTabFoundation.strings.INTERACTED_EVENT,
          { tabId },
          true /* bubble */,
        ),
      getOffsetLeft: () => rootEl.offsetLeft,
      getOffsetWidth: () => rootEl.offsetWidth,
      getContentOffsetLeft: () => uiState.content.offsetLeft,
      getContentOffsetWidth: () => uiState.content.offsetWidth,
      focus: () => rootEl.focus(),
    };

    onMounted(() => {
      rootEl = uiState.root.$el;
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
      hasIcon,
      hasText,
      onClick,
      setActive,
      tabId,
      fade,
      spanContent,
      rippleClasses,
      styles,
      linkAttrs,
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
