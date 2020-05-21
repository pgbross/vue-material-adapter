import { MDCTabScrollerFoundation } from '@material/tab-scroller/foundation';
import * as util from '@material/tab-scroller/util';
import { matches } from '@material/dom/ponyfill';

export default {
  name: 'mcw-tab-scroller',
  data() {
    return {
      classes: { 'mdc-tab-scroller': 1 },
      areaClasses: { 'mdc-tab-scroller__scroll-area': 1 },
      areaStyles: {},
      contentStyles: {},
    };
  },

  mounted() {
    this.foundation = new MDCTabScrollerFoundation({
      eventTargetMatchesSelector: (evtTarget, selector) => {
        return matches(evtTarget, selector);
      },
      addClass: className => this.$set(this.classes, className, true),

      removeClass: className => this.$delete(this.classes, className),
      addScrollAreaClass: className =>
        this.$set(this.areaClasses, className, true),
      setScrollAreaStyleProperty: (prop, value) =>
        this.$set(this.areaStyles, prop, value),
      setScrollContentStyleProperty: (prop, value) =>
        this.$set(this.contentStyles, prop, value),
      getScrollContentStyleValue: propName =>
        window.getComputedStyle(this.$refs.content).getPropertyValue(propName),
      setScrollAreaScrollLeft: scrollX =>
        (this.$refs.area.scrollLeft = scrollX),
      getScrollAreaScrollLeft: () => this.$refs.area.scrollLeft,
      getScrollContentOffsetWidth: () => this.$refs.content.offsetWidth,
      getScrollAreaOffsetWidth: () => this.$refs.area.offsetWidth,
      computeScrollAreaClientRect: () =>
        this.$refs.area.getBoundingClientRect(),
      computeScrollContentClientRect: () =>
        this.$refs.content.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () =>
        util.computeHorizontalScrollbarHeight(document),
    });
    this.foundation.init();
  },
  beforeDestroy() {
    this.foundation.destroy();
  },
  methods: {
    getScrollPosition() {
      return this.foundation.getScrollPosition();
    },
    getScrollContentWidth() {
      return this.$refs.content.offsetWidth;
    },
    incrementScroll(scrollXIncrement) {
      this.foundation.incrementScroll(scrollXIncrement);
    },
    scrollTo(scrollX) {
      this.foundation.scrollTo(scrollX);
    },
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this;
    const areaEl = createElement(
      'div',
      {
        class: this.areaClasses,
        style: this.areaStyles,
        ref: 'area',
        on: {
          mousedown: evt => this.foundation.handleInteraction(evt),
          wheel: evt => this.foundation.handleInteraction(evt),
          pointerdown: evt => this.foundation.handleInteraction(evt),
          touchstart: evt => this.foundation.handleInteraction(evt),
          keydown: evt => this.foundation.handleInteraction(evt),
        },
      },
      [
        createElement(
          'div',
          {
            class: { 'mdc-tab-scroller__scroll-content': 1 },
            style: this.contentStyles,
            ref: 'content',
            on: {
              transitionend: evt => this.foundation.handleTransitionEnd(evt),
            },
          },
          scopedSlots.default && scopedSlots.default(),
        ),
      ],
    );

    return createElement('div', { class: this.classes }, [areaEl]);
  },
};
