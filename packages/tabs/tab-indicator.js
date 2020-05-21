import { MDCTabIndicatorFoundation } from '@material/tab-indicator/foundation';

const { cssClasses } = MDCTabIndicatorFoundation;

export default {
  name: 'mcw-tab-indicator',
  data() {
    return { classes: { 'mdc-tab-indicator': 1 }, styles: {} };
  },

  mounted() {
    this.adapter_ = {
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      computeContentClientRect: () =>
        this.$refs.content.getBoundingClientRect(),
      setContentStyleProperty: (prop, value) => {
        this.$set(this.styles, prop, value);
      },
    };

    this.foundation = new MDCTabIndicatorFoundation(this.adapter_);
    this.foundation.init();
  },
  beforeDestroy() {
    this.foundation.destroy();
  },
  methods: {
    deactivate() {
      this.adapter_.removeClass(cssClasses.ACTIVE);
    },
    computeContentClientRect() {
      return this.foundation.computeContentClientRect();
    },
    activate(previousIndicatorClientRect) {
      // Early exit if no indicator is present to handle cases where an indicator
      // may be activated without a prior indicator state
      if (!previousIndicatorClientRect) {
        this.adapter_.addClass(cssClasses.ACTIVE);
        return;
      }

      const currentClientRect = this.computeContentClientRect();
      const widthDelta =
        previousIndicatorClientRect.width / currentClientRect.width;
      const xPosition =
        previousIndicatorClientRect.left - currentClientRect.left;
      this.foundation.adapter_.addClass(cssClasses.NO_TRANSITION);
      this.adapter_.setContentStyleProperty(
        'transform',
        `translateX(${xPosition}px) scaleX(${widthDelta})`,
      );
      // THE FIX
      requestAnimationFrame(() => {
        this.adapter_.removeClass(cssClasses.NO_TRANSITION);
        this.adapter_.addClass(cssClasses.ACTIVE);
        this.adapter_.setContentStyleProperty('transform', '');
      });
    },
  },
  render(createElement) {
    return createElement('span', { class: this.classes }, [
      createElement('span', {
        class: {
          'mdc-tab-indicator__content': 1,
          'mdc-tab-indicator__content--underline': 1,
        },
        style: this.styles,
        ref: 'content',
      }),
    ]);
  },
};
