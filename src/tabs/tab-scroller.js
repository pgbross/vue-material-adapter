import { matches } from '@material/dom/ponyfill.js';
import { MDCTabScrollerFoundation } from '@material/tab-scroller/foundation.js';
import * as util from '@material/tab-scroller/util.js';
import { onBeforeUnmount, onMounted, reactive, toRefs } from 'vue';

export default {
  name: 'mcw-tab-scroller',

  setup() {
    const uiState = reactive({
      classes: { 'mdc-tab-scroller': 1 },
      areaClasses: { 'mdc-tab-scroller__scroll-area': 1 },
      areaStyles: {},
      contentStyles: {},
      content: undefined,
      area: undefined,
    });
    let foundation;

    const getScrollPosition = () => foundation.getScrollPosition();
    const getScrollContentWidth = () => uiState.content.offsetWidth;

    const incrementScroll = scrollXIncrement =>
      foundation.incrementScroll(scrollXIncrement);

    const scrollTo = scrollX => foundation.scrollTo(scrollX);
    const onTransitionEnd = event_ => foundation.handleTransitionEnd(event_);

    const areaListeners = {
      mousedown: event_ => foundation.handleInteraction(event_),
      wheel: event_ => foundation.handleInteraction(event_),
      pointerdown: event_ => foundation.handleInteraction(event_),
      touchstart: event_ => foundation.handleInteraction(event_),
      keydown: event_ => foundation.handleInteraction(event_),
    };

    const adapter = {
      eventTargetMatchesSelector: (eventTarget, selector) => {
        return matches(eventTarget, selector);
      },
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),

      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      addScrollAreaClass: className =>
        (uiState.areaClasses = { ...uiState.areaClasses, [className]: true }),
      setScrollAreaStyleProperty: (property, value) =>
        (uiState.areaStyles = { ...uiState.areaStyles, [property]: value }),
      setScrollContentStyleProperty: (property, value) =>
        (uiState.contentStyles = {
          ...uiState.contentStyles,
          [property]: value,
        }),
      getScrollContentStyleValue: propertyName =>
        window.getComputedStyle(uiState.content).getPropertyValue(propertyName),
      setScrollAreaScrollLeft: scrollX => (uiState.area.scrollLeft = scrollX),
      getScrollAreaScrollLeft: () => uiState.area.scrollLeft,
      getScrollContentOffsetWidth: () => uiState.content.offsetWidth,
      getScrollAreaOffsetWidth: () => uiState.area.offsetWidth,
      computeScrollAreaClientRect: () => uiState.area.getBoundingClientRect(),
      computeScrollContentClientRect: () =>
        uiState.content.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () =>
        util.computeHorizontalScrollbarHeight(document),
    };

    onMounted(() => {
      foundation = new MDCTabScrollerFoundation(adapter);

      foundation.init();
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });
    return {
      ...toRefs(uiState),
      scrollTo,
      incrementScroll,
      getScrollPosition,
      getScrollContentWidth,
      areaListeners,
      onTransitionEnd,
    };
  },
};
