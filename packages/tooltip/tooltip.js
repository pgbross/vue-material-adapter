import { events, MDCTooltipFoundation } from '@material/tooltip';
import { onMounted, onUnmounted, reactive, toRefs, watchEffect } from 'vue';

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
      rootAttrs: { 'aria-hidden': true },
      root: null,
    });
    let foundation;
    let anchorElem;

    const adapter = {
      getAttribute: name => uiState.root.getAttribute(name),
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
      setStyleProperty: (property, value) =>
        (uiState.styles = { ...uiState.styles, [property]: value }),
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
      getAnchorAttribute: attr => {
        return anchorElem ? anchorElem.getAttribute(attr) : null;
      },
      isRTL: () => getComputedStyle(uiState.root).direction === 'rtl',
      registerDocumentEventHandler: (evt, handler) => {
        document.body.addEventListener(evt, handler);
      },
      deregisterDocumentEventHandler: (evt, handler) => {
        document.body.removeEventListener(evt, handler);
      },
      notifyHidden: () => {
        emit(events.HIDDEN.toLowerCase(), {});
      },
    };

    const handleMouseEnter = () => {
      foundation.handleAnchorMouseEnter();
    };

    const handleFocus = () => {
      foundation.handleAnchorFocus();
    };

    const handleMouseLeave = () => {
      foundation.handleAnchorMouseLeave();
    };

    const handleBlur = () => {
      foundation.handleAnchorBlur();
    };

    const handleTransitionEnd = () => {
      foundation.handleTransitionEnd();
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
        document.querySelector(`[aria-describedby="${tooltipId}"]`) ||
        document.querySelector(`[data-tooltip-id="${tooltipId}"]`);
      if (!anchorElem) {
        throw new Error(
          // eslint-disable-next-line max-len
          'MDCTooltip: Tooltip component requires an anchor element annotated with [aria-describedby] or [data-tooltip-id] anchor element.',
        );
      }

      anchorElem.addEventListener('mouseenter', handleMouseEnter);
      // TODO(b/157075286): Listening for a 'focus' event is too broad.
      anchorElem.addEventListener('focus', handleFocus);
      anchorElem.addEventListener('mouseleave', handleMouseLeave);
      anchorElem.addEventListener('blur', handleBlur);

      foundation = new MDCTooltipFoundation(adapter);
      foundation.init();

      watchEffect(() => onPosition(props.position));
      watchEffect(() => onBoundaryType(props.boundaryType));
    });

    onUnmounted(() => {
      if (anchorElem) {
        anchorElem.removeEventListener('mouseenter', handleMouseEnter);
        // TODO(b/157075286): Listening for a 'focus' event is too broad.
        anchorElem.removeEventListener('focus', handleFocus);
        anchorElem.removeEventListener('mouseleave', handleMouseLeave);
        anchorElem.removeEventListener('blur', handleBlur);
      }
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
