/* eslint-disable quote-props */
import { MDCMenuSurfaceFoundation } from '@material/menu-surface/foundation';
import * as util from '@material/menu-surface/util';
import {
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRefs,
  watch,
} from '@vue/composition-api';
import { emitCustomEvent } from '~/base/index.js';

const { strings, cssClasses } = MDCMenuSurfaceFoundation;

export default {
  name: 'mcw-menu-surface',
  model: {
    prop: 'open',
    event: 'change',
  },
  props: {
    open: [Boolean, Object],
    'quick-open': Boolean,
    'anchor-corner': [String, Number],
    'anchor-margin': Object,
  },
  setup(props, { emit, slots }) {
    const root = ref(null);
    const uiState = reactive({
      classes: {
        'mdc-menu': 1,
        'mdc-menu-surface': 1,
      },
    });

    let foundation;
    let anchorElement;
    let previousFocus_;

    const handleBodyClick = evt => {
      foundation.handleBodyClick(evt);
    };

    const registerBodyClickListener = () => {
      document.body.addEventListener('click', handleBodyClick);
    };
    const deregisterBodyClickListener = () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
    const handleKeydown = evt => {
      foundation.handleKeydown(evt);
    };
    const getFocusAdapterMethods = () => {
      return {
        isFocused: () => document.activeElement === root.value,
        saveFocus: () => {
          previousFocus_ = document.activeElement;
        },
        restoreFocus: () => {
          if (root.value.contains(document.activeElement)) {
            if (previousFocus_ && previousFocus_.focus) {
              previousFocus_.focus();
            }
          }
        },
      };
    };
    const getDimensionAdapterMethods = () => {
      return {
        getInnerDimensions: () => {
          return {
            width: root.value.offsetWidth,
            height: root.value.offsetHeight,
          };
        },
        getAnchorDimensions: () =>
          anchorElement ? anchorElement.getBoundingClientRect() : null,
        getWindowDimensions: () => {
          return { width: window.innerWidth, height: window.innerHeight };
        },
        getBodyDimensions: () => {
          return {
            width: document.body.clientWidth,
            height: document.body.clientHeight,
          };
        },
        getWindowScroll: () => {
          return { x: window.pageXOffset, y: window.pageYOffset };
        },
        setPosition: position => {
          root.value.style.left =
            'left' in position ? `${position.left}px` : null;
          root.value.style.right =
            'right' in position ? `${position.right}px` : null;
          root.value.style.top = 'top' in position ? `${position.top}px` : null;
          root.value.style.bottom =
            'bottom' in position ? `${position.bottom}px` : null;
        },
        setMaxHeight: height => {
          root.value.style.maxHeight = height;
        },
      };
    };

    const rootListeners = {
      keydown: evt => handleKeydown(evt),
      'MDCMenuSurface:opened': evt => registerBodyClickListener(evt),
      'MDCMenuSurface:closed': evt => deregisterBodyClickListener(evt),
    };

    const onOpen_ = value => {
      const method = value ? 'open' : 'close';
      foundation[method]();
    };

    const setIsHoisted = isHoisted => {
      foundation.setIsHoisted(isHoisted);
    };

    const hoistMenuToBody = () => {
      document.body.appendChild(
        root.value.parentElement.removeChild(root.value),
      );
      setIsHoisted(true);
    };

    const setFixedPosition = isFixed => {
      if (isFixed) {
        uiState.classes = { ...uiState.classes, [cssClasses.FIXED]: true };
      } else {
        // eslint-disable-next-line no-unused-vars
        const { [cssClasses.FIXED]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      }

      foundation.setFixedPosition(isFixed);
    };
    const setAbsolutePosition = (x, y) => {
      foundation.setAbsolutePosition(x, y);
      setIsHoisted(true);
    };
    const setAnchorCorner = corner => {
      foundation.setAnchorCorner(corner);
    };
    const setAnchorMargin = margin => {
      foundation.setAnchorMargin(margin);
    };
    const setMenuSurfaceAnchorElement = element => {
      anchorElement = element;
    };
    const show = options => {
      foundation.open(options);
    };

    const close = (skipRestoreFocus = false) => {
      foundation.close(skipRestoreFocus);
    };

    const hide = () => {
      close();
    };

    const isOpen = () => {
      return foundation ? foundation.isOpen() : false;
    };

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      hasClass: className => root.value.classList.contains(className),
      hasAnchor: () => !!anchorElement,
      notifyClose: () => {
        emitCustomEvent(root.value, strings.CLOSED_EVENT, {});

        emit('change', false);
      },
      notifyOpen: () => {
        emitCustomEvent(root.value, strings.OPENED_EVENT, {});

        emit('change', true);
      },
      isElementInContainer: el => root.value.contains(el),
      isRtl: () =>
        getComputedStyle(root.value).getPropertyValue('direction') === 'rtl',
      setTransformOrigin: origin => {
        root.value.style.setProperty(
          `${util.getTransformPropertyName(window)}-origin`,
          origin,
        );
      },
    };

    watch(
      () => props.open,
      nv => onOpen_(nv),
    );

    watch(
      () => props.quickOpen,
      nv => foundation.setQuickOpen(nv),
    );

    onMounted(() => {
      foundation = new MDCMenuSurfaceFoundation({
        ...adapter,
        ...getFocusAdapterMethods(),
        ...getDimensionAdapterMethods(),
      });

      foundation.init();

      if (
        root.value.parentElement &&
        root.value.parentElement.classList.contains(cssClasses.ANCHOR)
      ) {
        anchorElement = root.value.parentElement;
      }
    });

    onBeforeUnmount(() => {
      previousFocus_ = null;
      foundation.destroy();
    });
    return {
      ...toRefs(uiState),
      root,
      rootListeners,
      hoistMenuToBody,
      setFixedPosition,
      setAbsolutePosition,
      setAnchorCorner,
      setAnchorMargin,
      setMenuSurfaceAnchorElement,
      show,
      hide,
      isOpen,
      close,
    };
  },
};
