import { matches } from '@material/dom/ponyfill';
import { MDCTabScrollerFoundation } from '@material/tab-scroller/foundation';
import * as util from '@material/tab-scroller/util';
import { onBeforeUnmount, onMounted, reactive, toRefs } from 'vue';

export default {
  name: 'mcw-tab-scroller',

  setup() {
    const uiState = reactive({
      classes: { 'mdc-tab-scroller': 1 },
      areaClasses: { 'mdc-tab-scroller__scroll-area': 1 },
      areaStyles: {},
      contentStyles: {},
      content: null,
      area: null,
    });
    let foundation;

    const getScrollPosition = () => foundation.getScrollPosition();
    const getScrollContentWidth = () => uiState.content.offsetWidth;

    const incrementScroll = scrollXIncrement =>
      foundation.incrementScroll(scrollXIncrement);

    const scrollTo = scrollX => foundation.scrollTo(scrollX);
    const onTransitionEnd = evt => foundation.handleTransitionEnd(evt);

    const areaListeners = {
      mousedown: evt => foundation.handleInteraction(evt),
      wheel: evt => foundation.handleInteraction(evt),
      pointerdown: evt => foundation.handleInteraction(evt),
      touchstart: evt => foundation.handleInteraction(evt),
      keydown: evt => foundation.handleInteraction(evt),
      ['MDCTab:interacted']: evt => {
        console.dir('wiffle');
      },
    };

    const adapter = {
      eventTargetMatchesSelector: (evtTarget, selector) => {
        return matches(evtTarget, selector);
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
      setScrollAreaStyleProperty: (prop, value) =>
        (uiState.areaStyles = { ...uiState.areaStyles, [prop]: value }),
      setScrollContentStyleProperty: (prop, value) =>
        (uiState.contentStyles = { ...uiState.contentStyles, [prop]: value }),
      getScrollContentStyleValue: propName =>
        window.getComputedStyle(uiState.content).getPropertyValue(propName),
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
