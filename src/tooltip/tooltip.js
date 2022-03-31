import { CssClasses, events, MDCTooltipFoundation } from '@material/tooltip';
import { onBeforeUnmount, onMounted, reactive, toRefs, watchEffect } from 'vue';

export default {
  name: 'mcw-tooltip',
  props: {
    position: { type: [Object, String] },
    boundaryType: { type: [String, Number] },
    showDelay: { type: Number },
    hideDelay: { type: Number },
    addEventListenerHandlerFn: { type: Function },
    removeEventListenerHandlerFn: { type: Function },
    rich: Boolean,
  },
  setup(props, { emit }) {
    const uiState = reactive({
      classes: { 'mdc-tooltip--rich': props.rich },
      styles: {},
      surfaceStyle: {},
      rootAttrs: { 'aria-hidden': true },
      root: undefined,
      isTooltipPersistent: false,
      isTooltipRich: false,
    });
    let foundation;
    let anchorElement;

    const adapter = {
      getAttribute: name => {
        return uiState.root.getAttribute(name);
      },

      setAttribute: (attributeName, value) => {
        uiState.rootAttrs = { ...uiState.rootAttrs, [attributeName]: value };
      },
      removeAttribute: attribute => {
        const { [attribute]: removed, ...rest } = uiState.rootAttrs;
        uiState.rootAttrs = rest;
      },

      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),

      hasClass: className => uiState.root.classList.contains(className),

      removeClass: className => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      getComputedStyleProperty: propertyName => {
        return window
          .getComputedStyle(uiState.root)
          .getPropertyValue(propertyName);
      },

      setStyleProperty: (property, value) =>
        (uiState.styles = { ...uiState.styles, [property]: value }),

      setSurfaceAnimationStyleProperty: (propertyName, value) => {
        uiState.surfaceStyle = {
          ...uiState.surfaceStyle,
          [propertyName]: value,
        };
      },

      getViewportWidth: () => window.innerWidth,

      getViewportHeight: () => window.innerHeight,

      getTooltipSize: () => {
        return {
          width: uiState.root.offsetWidth,
          height: uiState.root.offsetHeight,
        };
      },

      getAnchorBoundingRect: () => {
        return anchorElement
          ? anchorElement.getBoundingClientRect()
          : undefined;
      },

      getParentBoundingRect: () => {
        return uiState.root.parentElement?.getBoundingClientRect() ?? undefined;
      },

      getAnchorAttribute: attribute => {
        return anchorElement
          ? anchorElement.getAttribute(attribute)
          : undefined;
      },

      setAnchorAttribute: (attribute, value) => {
        anchorElement?.setAttribute(attribute, value);
      },

      isRTL: () => getComputedStyle(uiState.root).direction === 'rtl',

      anchorContainsElement: element => {
        return !!anchorElement?.contains(element);
      },

      tooltipContainsElement: element => {
        return uiState.root.contains(element);
      },

      focusAnchorElement: () => {
        anchorElement?.focus();
      },

      registerEventHandler: (event_, handler) => {
        uiState.root.addEventListener(event_, handler);
      },

      deregisterEventHandler: (event_, handler) => {
        uiState.root.removeEventListener(event_, handler);
      },

      registerAnchorEventHandler: (event_, handler) => {
        anchorElement?.addEventListener(event_, handler);
      },

      deregisterAnchorEventHandler: (event_, handler) => {
        anchorElement?.removeEventListener(event_, handler);
      },

      registerDocumentEventHandler: (event_, handler) => {
        document.body.addEventListener(event_, handler);
      },

      deregisterDocumentEventHandler: (event_, handler) => {
        document.body.removeEventListener(event_, handler);
      },

      registerWindowEventHandler: (event_, handler) => {
        window.addEventListener(event_, handler);
      },

      deregisterWindowEventHandler: (event_, handler) => {
        window.removeEventListener(event_, handler);
      },

      notifyHidden: () => {
        emit(events.HIDDEN.toLowerCase(), {});
      },

      getTooltipCaretBoundingRect: () => {
        const caret =
          uiState.root.querySelector <
          HTMLElement >
          `.${CssClasses.TOOLTIP_CARET_TOP}`;
        if (!caret) {
          return;
        }
        return caret.getBoundingClientRect();
      },

      setTooltipCaretStyle: (propertyName, value) => {
        const topCaret =
          uiState.root.querySelector <
          HTMLElement >
          `.${CssClasses.TOOLTIP_CARET_TOP}`;
        const bottomCaret =
          uiState.root.querySelector <
          HTMLElement >
          `.${CssClasses.TOOLTIP_CARET_BOTTOM}`;

        if (!topCaret || !bottomCaret) {
          return;
        }

        topCaret.style.setProperty(propertyName, value);
        bottomCaret.style.setProperty(propertyName, value);
      },

      clearTooltipCaretStyles: () => {
        const topCaret =
          uiState.root.querySelector <
          HTMLElement >
          `.${CssClasses.TOOLTIP_CARET_TOP}`;
        const bottomCaret =
          uiState.root.querySelector <
          HTMLElement >
          `.${CssClasses.TOOLTIP_CARET_BOTTOM}`;

        if (!topCaret || !bottomCaret) {
          return;
        }
        topCaret.removeAttribute('style');
        bottomCaret.removeAttribute('style');
      },

      getActiveElement: () => {
        return document.activeElement;
      },
    };

    const handleMouseEnter = () => {
      foundation.handleAnchorMouseEnter();
    };

    const handleFocus = event_ => {
      foundation.handleAnchorFocus(event_);
    };

    const handleMouseLeave = () => {
      foundation.handleAnchorMouseLeave();
    };

    const handleTouchstart = () => {
      foundation.handleAnchorTouchstart();
    };

    const handleTouchend = () => {
      foundation.handleAnchorTouchend();
    };

    const handleBlur = event_ => {
      foundation.handleAnchorBlur(event_);
    };

    const handleTransitionEnd = () => {
      foundation.handleTransitionEnd();
    };

    const handleClick = () => {
      foundation.handleAnchorClick();
    };

    const onPosition = position => {
      if (position) {
        let xPos;
        let yPos;

        if (typeof position == 'string') {
          [xPos, yPos = xPos] = position.split(',');
        } else {
          ({ xPos, yPos } = position);
        }

        foundation.setTooltipPosition({
          xPos: toXposition(xPos),
          yPos: toYposition(yPos),
        });
      }
    };

    const onBoundaryType = type => {
      if (type != undefined) {
        foundation.setAnchorBoundaryType(toAnchorBoundaryType(type));
      }
    };

    onMounted(() => {
      const tooltipId = uiState.root.getAttribute('id');
      if (!tooltipId) {
        throw new Error('MDCTooltip: Tooltip component must have an id.');
      }

      anchorElement =
        document.querySelector(`[aria-describedby="${tooltipId}"]`) ||
        document.querySelector(`[data-tooltip-id="${tooltipId}"]`);
      if (!anchorElement) {
        throw new Error(
          // eslint-disable-next-line max-len
          'MDCTooltip: Tooltip component requires an anchor element annotated with [aria-describedby] or [data-tooltip-id] anchor element.',
        );
      }

      foundation = new MDCTooltipFoundation(adapter);
      foundation.init();

      uiState.isTooltipRich = foundation.isRich();
      uiState.isTooltipPersistent = foundation.isPersistent();

      if (uiState.isTooltipRich && uiState.isTooltipPersistent) {
        anchorElement.addEventListener('click', handleClick);
      } else {
        anchorElement.addEventListener('mouseenter', handleMouseEnter);
        // TODO(b/157075286): Listening for a 'focus' event is too broad.
        anchorElement.addEventListener('focus', handleFocus);
        anchorElement.addEventListener('mouseleave', handleMouseLeave);

        anchorElement.addEventListener('touchstart', handleTouchstart);
        anchorElement.addEventListener('touchend', handleTouchend);
      }

      anchorElement.addEventListener('blur', handleBlur);

      if (props.showDelay !== undefined) {
        foundation.setShowDelay(props.showDelay);
      }

      if (props.hideDelay !== undefined) {
        foundation.setHideDelay(props.hideDelay);
      }

      if (props.addEventListenerHandlerFn) {
        foundation.attachScrollHandler(props.addEventListenerHandlerFn);
      }

      if (props.removeEventListenerHandlerFn) {
        foundation.removeScrollHandler(props.removeEventListenerHandlerFn);
      }

      watchEffect(() => onPosition(props.position));
      watchEffect(() => onBoundaryType(props.boundaryType));
    });

    onBeforeUnmount(() => {
      if (anchorElement) {
        if (uiState.isTooltipRich && uiState.isTooltipPersistent) {
          anchorElement.removeEventListener('click', handleClick);
        } else {
          anchorElement.removeEventListener('mouseenter', handleMouseEnter);
          // TODO(b/157075286): Listening for a 'focus' event is too broad.
          anchorElement.removeEventListener('focus', handleFocus);
          anchorElement.removeEventListener('mouseleave', handleMouseLeave);
          anchorElement.removeEventListener('touchstart', handleTouchstart);
          anchorElement.removeEventListener('touchend', handleTouchend);

          anchorElement.removeEventListener('blur', handleBlur);
        }
      }

      foundation?.destroy();
    });

    return { ...toRefs(uiState), handleTransitionEnd };
  },
};

// ===
// Private functions
// ===

const XPosition_ = { detected: 0, start: 1, center: 2, end: 3 };

function toXposition(x) {
  return typeof x == 'string' ? XPosition_[x] ?? 0 : x;
}

const YPosition_ = { detected: 0, above: 1, below: 2 };

function toYposition(y) {
  return typeof y == 'string' ? YPosition_[y] ?? 0 : y;
}
const AnchorBoundaryType_ = { bounded: 0, unbounded: 1 };

function toAnchorBoundaryType(type) {
  return typeof type == 'string' ? AnchorBoundaryType_[type] ?? '0' : type;
}
