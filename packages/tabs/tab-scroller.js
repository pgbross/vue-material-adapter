import { matches } from '@material/dom/ponyfill';
import { MDCTabScrollerFoundation } from '@material/tab-scroller/foundation';
import * as util from '@material/tab-scroller/util';
import {
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRefs,
} from '@vue/composition-api';

export default {
  name: 'mcw-tab-scroller',

  setup() {
    const content = ref(null);
    const area = ref(null);

    const uiState = reactive({
      classes: { 'mdc-tab-scroller': 1 },
      areaClasses: { 'mdc-tab-scroller__scroll-area': 1 },
      areaStyles: {},
      contentStyles: {},
    });
    let foundation;

    const getScrollPosition = () => foundation.getScrollPosition();

    const getScrollContentWidth = () => content.value.offsetWidth;

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
        window.getComputedStyle(content.value).getPropertyValue(propName),
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
    return {
      ...toRefs(uiState),
      area,
      content,
      scrollTo,
      incrementScroll,
      getScrollPosition,
      getScrollContentWidth,
      areaListeners,
      onTransitionEnd,
    };
  },
};
