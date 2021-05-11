import { events, MDCTooltipFoundation } from '@material/tooltip';
import { onBeforeUnmount, onMounted, reactive, toRefs, watchEffect } from 'vue';

export default {
  name: 'mcw-tooltip',
  props: {
    position: { type: [Object, String] },
    boundaryType: { type: [String, Number] },
  },
  setup(props, { emit }) {
    const uiState = reactive({
      classes: {},
      styles: {},
      surfaceStyle: {},
      rootAttrs: { 'aria-hidden': true },
      root: null,
      isTooltipPersistent: false,
      isTooltipRich: false,
    });
    let foundation;
    let anchorElem;

    const adapter = {
      getAttribute: name => {
        return uiState.root.getAttribute(name);
      },
      setAttribute: (attributeName, value) => {
        uiState.rootAttrs = { ...uiState.rootAttrs, [attributeName]: value };
      },
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      hasClass: className => uiState.root.classList.contains(className),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
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
      setSurfaceStyleProperty: (propertyName, value) => {
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
        return anchorElem ? anchorElem.getBoundingClientRect() : null;
      },
      getParentBoundingRect: () => {
        return uiState.root.parentElement?.getBoundingClientRect() ?? null;
      },
      getAnchorAttribute: attr => {
        return anchorElem ? anchorElem.getAttribute(attr) : null;
      },

      setAnchorAttribute: (attr, value) => {
        anchorElem?.setAttribute(attr, value);
      },

      isRTL: () => getComputedStyle(uiState.root).direction === 'rtl',

      anchorContainsElement: element => {
        return !!anchorElem?.contains(element);
      },
      tooltipContainsElement: element => {
        return uiState.root.contains(element);
      },

      registerEventHandler: (evt, handler) => {
        uiState.root.addEventListener(evt, handler);
      },
      deregisterEventHandler: (evt, handler) => {
        uiState.root.removeEventListener(evt, handler);
      },

      registerAnchorEventHandler: (evt, handler) => {
        anchorElem?.addEventListener(evt, handler);
      },
      deregisterAnchorEventHandler: (evt, handler) => {
        anchorElem?.removeEventListener(evt, handler);
      },

      registerDocumentEventHandler: (evt, handler) => {
        document.body.addEventListener(evt, handler);
      },
      deregisterDocumentEventHandler: (evt, handler) => {
        document.body.removeEventListener(evt, handler);
      },
      registerWindowEventHandler: (evt, handler) => {
        window.addEventListener(evt, handler);
      },
      deregisterWindowEventHandler: (evt, handler) => {
        window.removeEventListener(evt, handler);
      },

      notifyHidden: () => {
        emit(events.HIDDEN.toLowerCase(), {});
      },
    };

    const handleMouseEnter = () => {
      foundation.handleAnchorMouseEnter();
    };

    const handleFocus = evt => {
      foundation.handleAnchorFocus(evt);
    };

    const handleMouseLeave = () => {
      foundation.handleAnchorMouseLeave();
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
      if (type != void 0) {
        foundation.setAnchorBoundaryType(toAnchorBoundaryType(type));
      }
    };

    onMounted(() => {
      const tooltipId = uiState.root.getAttribute('id');
      if (!tooltipId) {
        throw new Error('MDCTooltip: Tooltip component must have an id.');
      }

      anchorElem =
        document.querySelector(`[data-tooltip-id="${tooltipId}"]`) ||
        document.querySelector(`[aria-describedby="${tooltipId}"]`);

      if (!anchorElem) {
        throw new Error(
          // eslint-disable-next-line max-len
          'MDCTooltip: Tooltip component requires an anchor element annotated with [aria-describedby] or [data-tooltip-id].',
        );
      }

      foundation = new MDCTooltipFoundation(adapter);
      foundation.init();

      uiState.isTooltipRich = foundation.isRich();
      uiState.isTooltipPersistent = foundation.isPersistent();

      if (uiState.isTooltipRich && uiState.isTooltipPersistent) {
        anchorElem.addEventListener('click', handleClick);
      } else {
        anchorElem.addEventListener('mouseenter', handleMouseEnter);
        // TODO(b/157075286): Listening for a 'focus' event is too broad.
        anchorElem.addEventListener('focus', handleFocus);
        anchorElem.addEventListener('mouseleave', handleMouseLeave);
      }

      watchEffect(() => onPosition(props.position));
      watchEffect(() => onBoundaryType(props.boundaryType));
    });

    onBeforeUnmount(() => {
      if (anchorElem) {
        if (uiState.isTooltipRich && uiState.isTooltipPersistent) {
          anchorElem.removeEventListener('click', handleClick);
        } else {
          anchorElem.removeEventListener('mouseenter', handleMouseEnter);
          // TODO(b/157075286): Listening for a 'focus' event is too broad.
          anchorElem.removeEventListener('focus', handleFocus);
          anchorElem.removeEventListener('mouseleave', handleMouseLeave);
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
