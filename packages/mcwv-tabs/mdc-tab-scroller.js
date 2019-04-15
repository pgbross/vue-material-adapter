import MDCTabScrollerFoundation from '@material/tab-scroller/foundation';
import * as util from '@material/tab-scroller/util';
import { matches } from '@material/dom/ponyfill';

const template = `  <div class="mdc-tab-scroller" :class="classes">
    <div
      ref="area"
      class="mdc-tab-scroller__scroll-area"
      @mousedown="handleInteraction"
      @wheel="handleInteraction"
      @pointerdown="handleInteraction"
      @touchstart="handleInteraction"
      @keydown="handleInteraction"
      :class="areaClasses"
      :style="areaStyles"
    >
      <div
        ref="content"
        class="mdc-tab-scroller__scroll-content"
        :style="contentStyles"
        @transitionend="handleTransitionEnd"
      >
        <slot/>
      </div>
    </div>
  </div>`;

export default {
  name: 'mdc-tab-scroller',
  template,
  data() {
    return { classes: {}, areaClasses: {}, areaStyles: {}, contentStyles: {} };
  },

  mounted() {
    this.foundation = new MDCTabScrollerFoundation({
      eventTargetMatchesSelector: (evtTarget, selector) => {
        const MATCHES = matches(HTMLElement.prototype);
        return evtTarget[MATCHES](selector);
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
    handleTransitionEnd(evt) {
      this.foundation.handleTransitionEnd(evt);
    },
    handleInteraction(evt) {
      this.foundation.handleInteraction(evt);
    },
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
};
