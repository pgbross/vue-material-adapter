import { getCorrectPropertyName } from '@material/animation/util.js';
import { MDCMenuSurfaceFoundation } from '@material/menu-surface/foundation.js';
import { onBeforeUnmount, onMounted, reactive, toRefs, watch } from 'vue';
import { emitCustomEvent } from '../base/index.js';

const { cssClasses, strings } = MDCMenuSurfaceFoundation;

export default {
  name: 'mcw-menu-surface',
  props: {
    modelValue: [Boolean, Object],
    'quick-open': Boolean,
    'anchor-corner': [String, Number],
    'anchor-margin': Object,
  },
  setup(props, { emit }) {
    const uiState = reactive({
      classes: {
        'mdc-menu-surface': 1,
      },
      root: undefined,
    });

    let foundation;
    let anchorElement;
    let previousFocus_;

    const handleBodyClick = event_ => {
      foundation.handleBodyClick(event_);
    };

    const registerBodyClickListener = () => {
      document.body.addEventListener('click', handleBodyClick);
    };
    const deregisterBodyClickListener = () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
    const handleKeydown = event_ => {
      foundation.handleKeydown(event_);
    };
    const getFocusAdapterMethods = () => {
      return {
        isFocused: () => document.activeElement === uiState.root,
        saveFocus: () => {
          previousFocus_ = document.activeElement;
        },
        restoreFocus: () => {
          if (
            uiState.root?.contains(document.activeElement) &&
            previousFocus_ &&
            previousFocus_.focus
          ) {
            previousFocus_.focus();
          }
        },
      };
    };
    const getDimensionAdapterMethods = () => {
      return {
        getInnerDimensions: () => {
          return {
            width: uiState.root.offsetWidth,
            height: uiState.root.offsetHeight,
          };
        },
        getAnchorDimensions: () =>
          anchorElement ? anchorElement.getBoundingClientRect() : undefined,
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
          uiState.root.style.left =
            'left' in position ? `${position.left}px` : undefined;
          uiState.root.style.right =
            'right' in position ? `${position.right}px` : undefined;
          uiState.root.style.top =
            'top' in position ? `${position.top}px` : undefined;
          uiState.root.style.bottom =
            'bottom' in position ? `${position.bottom}px` : undefined;
        },
        setMaxHeight: height => {
          uiState.root.style.maxHeight = height;
        },
      };
    };

    const rootListeners = {
      keydown: event_ => handleKeydown(event_),
      // 'MDCMenuSurface:opened': evt => registerBodyClickListener(evt),
      // 'MDCMenuSurface:closed': evt => deregisterBodyClickListener(evt),
    };

    const onOpen_ = value => {
      const method = value ? 'open' : 'close';
      foundation[method]();
    };

    const setIsHoisted = isHoisted => {
      foundation.setIsHoisted(isHoisted);
    };

    const hoistMenuToBody = () => {
      document.body.append(uiState.root.remove());
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
      hasClass: className => uiState.root.classList.contains(className),
      hasAnchor: () => !!anchorElement,
      notifyClose: () => {
        uiState.root && emitCustomEvent(uiState.root, strings.CLOSED_EVENT, {});

        deregisterBodyClickListener();

        emit('mdcmenusurface:closed');
        emit('update:modelValue', false);
      },
      notifyOpen: () => {
        emitCustomEvent(uiState.root, strings.OPENED_EVENT, {});

        registerBodyClickListener();
        emit('mdcmenusurface:opened');
        emit('update:modelValue', true);
      },
      isElementInContainer: element => uiState.root?.contains(element),
      isRtl: () =>
        getComputedStyle(uiState.root).getPropertyValue('direction') === 'rtl',
      setTransformOrigin: origin => {
        uiState.root.style.setProperty(
          `${getCorrectPropertyName(window, 'transform')}-origin`,
          origin,
        );
      },
    };

    watch(
      () => props.modelValue,
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
        uiState.root.parentElement &&
        uiState.root.parentElement.classList.contains(cssClasses.ANCHOR)
      ) {
        anchorElement = uiState.root.parentElement;
      }
    });

    onBeforeUnmount(() => {
      previousFocus_ = undefined;
      foundation.destroy();
    });
    return {
      ...toRefs(uiState),
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
