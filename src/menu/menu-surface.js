import { getCorrectPropertyName } from '@material/animation/util.js';
import { MDCMenuSurfaceFoundation } from '@material/menu-surface/foundation.js';
import { h, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
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
  setup(props, { emit, slots, expose }) {
    const uiState = reactive({
      classes: {
        'mdc-menu-surface': 1,
      },
    });

    const root = ref();
    let foundation;
    let anchorElement;
    let previousFocus_;

    const handleBodyClick = event_ => foundation.handleBodyClick(event_);

    const registerBodyClickListener = () =>
      document.body.addEventListener('click', handleBodyClick);

    const deregisterBodyClickListener = () =>
      document.body.removeEventListener('click', handleBodyClick);

    const handleKeydown = event_ => foundation.handleKeydown(event_);

    const getFocusAdapterMethods = () => ({
      isFocused: () => document.activeElement === root.value,
      saveFocus: () => {
        previousFocus_ = document.activeElement;
      },
      restoreFocus: () => {
        if (
          root.value?.contains(document.activeElement) &&
          previousFocus_ &&
          previousFocus_.focus
        ) {
          previousFocus_.focus();
        }
      },
    });

    const getDimensionAdapterMethods = () => ({
      getInnerDimensions: () => ({
        width: root.value.offsetWidth,
        height: root.value.offsetHeight,
      }),

      getAnchorDimensions: () => anchorElement?.getBoundingClientRect(),

      getWindowDimensions: () => ({
        width: window.innerWidth,
        height: window.innerHeight,
      }),

      getBodyDimensions: () => ({
        width: document.body.clientWidth,
        height: document.body.clientHeight,
      }),

      getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),

      setPosition: position => {
        root.value.style.left =
          'left' in position ? `${position.left}px` : undefined;
        root.value.style.right =
          'right' in position ? `${position.right}px` : undefined;
        root.value.style.top =
          'top' in position ? `${position.top}px` : undefined;
        root.value.style.bottom =
          'bottom' in position ? `${position.bottom}px` : undefined;
      },

      setMaxHeight: height => (root.value.style.maxHeight = height),
    });

    const onOpen_ = value => foundation[value ? 'open' : 'close']();

    const setIsHoisted = isHoisted => foundation.setIsHoisted(isHoisted);

    const hoistMenuToBody = () => {
      root.value.remove();
      document.body.append(root.value);
      setIsHoisted(true);
    };

    const setFixedPosition = isFixed => {
      if (isFixed) {
        uiState.classes = { ...uiState.classes, [cssClasses.FIXED]: true };
      } else {
        const { [cssClasses.FIXED]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      }

      foundation.setFixedPosition(isFixed);
    };

    const setAbsolutePosition = (x, y) => {
      foundation.setAbsolutePosition(x, y);
      setIsHoisted(true);
    };

    const setAnchorCorner = corner => foundation.setAnchorCorner(corner);

    const setAnchorMargin = margin => foundation.setAnchorMargin(margin);

    const setMenuSurfaceAnchorElement = element => (anchorElement = element);

    const show = options => foundation.open(options);

    const close = (skipRestoreFocus = false) =>
      foundation.close(skipRestoreFocus);

    const hide = () => close();

    const isOpen = () => foundation?.isOpen() ?? false;

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),

      removeClass: className => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      hasClass: className => root.value.classList.contains(className),

      hasAnchor: () => !!anchorElement,

      notifyClose: () => {
        root.value && emitCustomEvent(root.value, strings.CLOSED_EVENT, {});

        deregisterBodyClickListener();

        emit('mdcmenusurface:closed');
        emit('update:modelValue', false);
      },

      notifyOpen: () => {
        emitCustomEvent(root.value, strings.OPENED_EVENT, {});

        registerBodyClickListener();
        emit('mdcmenusurface:opened');
        emit('update:modelValue', true);
      },

      isElementInContainer: element => root.value?.contains(element),

      isRtl: () =>
        getComputedStyle(root.value).getPropertyValue('direction') === 'rtl',

      setTransformOrigin: origin => {
        root.value.style.setProperty(
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

      if (root.value.parentElement?.classList.contains(cssClasses.ANCHOR)) {
        anchorElement = root.value.parentElement;
      }
    });

    onBeforeUnmount(() => {
      previousFocus_ = undefined;
      foundation.destroy();
    });

    expose({
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
    });

    return () => {
      return h(
        'div',
        {
          ref: root,
          class: uiState.classes,
          onKeydown: event_ => handleKeydown(event_),
        },
        slots.default?.(),
      );
    };
  },
};
