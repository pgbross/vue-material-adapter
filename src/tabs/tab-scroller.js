import { matches } from '@material/dom/ponyfill.js';
import { MDCTabScrollerFoundation } from '@material/tab-scroller/foundation.js';
import * as util from '@material/tab-scroller/util.js';
import { h, onBeforeUnmount, onMounted, reactive, ref } from 'vue';

export default {
  name: 'mcw-tab-scroller',

  setup(props, { slots, expose }) {
    const uiState = reactive({
      classes: { 'mdc-tab-scroller': 1 },
      areaClasses: { 'mdc-tab-scroller__scroll-area': 1 },
      areaStyles: {},
      contentStyles: {},
    });
    let foundation;
    const content = ref();
    const area = ref();

    const getScrollPosition = () => foundation.getScrollPosition();
    const getScrollContentWidth = () => content.value.offsetWidth;

    const incrementScroll = scrollXIncrement =>
      foundation.incrementScroll(scrollXIncrement);

    const scrollTo = scrollX => foundation.scrollTo(scrollX);

    const adapter = {
      eventTargetMatchesSelector: (eventTarget, selector) => {
        return matches(eventTarget, selector);
      },

      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),

      removeClass: className => {
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
        window.getComputedStyle(content.value).getPropertyValue(propertyName),

      setScrollAreaScrollLeft: scrollX => (area.value.scrollLeft = scrollX),

      getScrollAreaScrollLeft: () => area.value.scrollLeft,

      getScrollContentOffsetWidth: () => content.value.offsetWidth,

      getScrollAreaOffsetWidth: () => area.value.offsetWidth,

      computeScrollAreaClientRect: () => area.value.getBoundingClientRect(),

      computeScrollContentClientRect: () =>
        content.value.getBoundingClientRect(),

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

    expose({
      scrollTo,
      incrementScroll,
      getScrollContentWidth,
      getScrollPosition,
    });

    return () => {
      return h('div', { class: uiState.classes }, [
        h(
          'div',
          {
            ref: area,
            class: uiState.areaClasses,
            onMousedown: event_ => foundation.handleInteraction(event_),
            onWheel: event_ => foundation.handleInteraction(event_),
            onPointerdown: event_ => foundation.handleInteraction(event_),
            onTouchstart: event_ => foundation.handleInteraction(event_),
            onKeydown: event_ => foundation.handleInteraction(event_),
            style: uiState.areaStyles,
          },
          [
            h(
              'div',
              {
                ref: content,
                class: 'mdc-tab-scroller__scroll-content',
                style: content.valueStyles,
                onTransitionend: event_ => {
                  foundation.handleTransitionEnd(event_);
                },
              },
              slots.default(),
            ),
          ],
        ),
      ]);
    };
  },
};
