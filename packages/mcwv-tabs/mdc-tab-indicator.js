import MDCSlidingTabIndicatorFoundation from '@material/tab-indicator/sliding-foundation';

export default {
  name: 'mdc-tab-indicator',
  data() {
    return { classes: { 'mdc-tab-indicator': 1 }, styles: {} };
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
  mounted() {
    this.foundation = new MDCSlidingTabIndicatorFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      computeContentClientRect: () =>
        this.$refs.content.getBoundingClientRect(),
      setContentStyleProperty: (prop, value) => {
        this.$set(this.styles, prop, value);
      },
    });

    this.foundation.init();
  },
  beforeDestroy() {
    this.foundation.destroy();
  },
  methods: {
    activate(previousIndicatorClientRect) {
      this.foundation.activate(previousIndicatorClientRect);
    },
    deactivate() {
      this.foundation.deactivate();
    },
    computeContentClientRect() {
      return this.foundation.computeContentClientRect();
    },
  },
};
