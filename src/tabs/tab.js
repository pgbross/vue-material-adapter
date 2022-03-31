import MDCTabFoundation from '@material/tab/foundation.js';
import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRef,
  toRefs,
} from 'vue';
import { CustomLink, emitCustomEvent } from '../base/index.js';
import { useRipplePlugin } from '../ripple/ripple-plugin.js';

const { strings } = MDCTabFoundation;
let tabId_ = 0;

export default {
  name: 'mcw-tab',
  props: {
    active: Boolean,
    icon: [String, Array, Object],
    minWidth: Boolean,
  },
  components: { CustomLink },
  setup(props, { slots }) {
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

      content: undefined,
      iconEl: undefined,
      tabIndicator: undefined,
      root: undefined,
      rippleSurface: undefined,
    });

    const { classes: rippleClasses, styles: rippleStyles } = useRipplePlugin(
      toRef(uiState, 'root'),
    );
    const { fade, stacked, spanContent, tabList } = inject('mcwTabList');

    uiState.classes['mdc-tab--stacked'] = stacked;

    const hasIcon = computed(() => {
      if (props.icon || slots.icon) {
        return props.icon ? extractIconProperty(props.icon) : {};
      }
      return false;
    });

    const hasText = computed(() => {
      return !!slots.default;
    });

    let foundation;
    const tabId = `__mcw-tab-${tabId_++}`;

    let rootElement;

    const activate = computeIndicatorClientRect =>
      foundation.activate(computeIndicatorClientRect);

    const deactivate = () => foundation.deactivate();
    const isActive = () => foundation.isActive();

    const computeIndicatorClientRect = () =>
      uiState.tabIndicator.computeContentClientRect();

    const computeDimensions = () => foundation.computeDimensions();

    const focus = () => rootElement.focus();

    const onClick = event_ => {
      foundation.handleClick(event_);
    };

    const adapter = {
      setAttr: (attribute, value) =>
        (uiState.rootAttrs = { ...uiState.rootAttrs, [attribute]: value }),

      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),

      removeClass: className => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      hasClass: className => !!uiState.classes[className],

      activateIndicator: previousIndicatorClientRect =>
        uiState.tabIndicator.activate(previousIndicatorClientRect),

      deactivateIndicator: () => uiState.tabIndicator.deactivate(),

      notifyInteracted: () => {
        emitCustomEvent(
          rootElement,
          strings.INTERACTED_EVENT,
          { tabId },
          true /* bubble */,
        );
      },

      getOffsetLeft: () => rootElement.offsetLeft,

      getOffsetWidth: () => rootElement.offsetWidth,

      getContentOffsetLeft: () => uiState.content.offsetLeft,

      getContentOffsetWidth: () => uiState.content.offsetWidth,

      focus: () => rootElement.focus(),
    };

    const focusOnActivate = focusOnActivate => {
      foundation.setFocusOnActivate(focusOnActivate);
    };

    onMounted(() => {
      // Quick fix to https://github.com/pgbross/vue-material-adapter/issues/178
      // uiState.root gets set to the wrong element when "to" is set
      rootElement =
        uiState.root.$el.nodeType === 3
          ? uiState.root.$el.nextSibling
          : uiState.root.$el;
      foundation = new MDCTabFoundation(adapter);
      foundation.init();

      tabList.push({
        id: tabId,
        activate,
        deactivate,
        focus,
        computeIndicatorClientRect,
        computeDimensions,
        isActive,
        focusOnActivate,
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

      tabId,
      fade,
      spanContent,
      rippleClasses,
      rippleStyles,
    };
  },
};

// ===
// Private functions
// ===

function extractIconProperty(iconProperty) {
  if (typeof iconProperty === 'string') {
    return {
      classes: { 'material-icons': true },
      content: iconProperty,
    };
  } else if (Array.isArray(iconProperty)) {
    return {
      classes: Object.fromEntries(iconProperty.map(value => [value, true])),
    };
  } else if (typeof iconProperty === 'object') {
    return {
      classes: Object.fromEntries(
        iconProperty.className.split(' ').map(value => [value, true]),
      ),
      content: iconProperty.textContent,
    };
  }
}
