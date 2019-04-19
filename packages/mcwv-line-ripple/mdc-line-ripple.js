import MDCLineRippleFoundation from '@material/line-ripple/foundation';

export default {
  name: 'mdc-line-ripple',

  props: {
    rippleCenter: { type: [Number, String], default: 0 },
    active: Boolean,
  },
  data() {
    return {
      lineClasses: { 'mdc-line-ripple': 1 },
      lineStyles: {},
    };
  },
  render(createElement) {
    return createElement('div', {
      class: this.lineClasses,
      style: this.lineStyles,
      on: { transitionend: evt => this.foundation.handleTransitionEnd(evt) },
    });
  },
  mounted() {
    const adapter = {
      addClass: className => {
        this.$set(this.lineClasses, className, true);
      },
      removeClass: className => {
        this.$delete(this.lineClasses, className);
      },
      hasClass: className => {
        return Boolean(this.lineClasses[className]);
      },
      setStyle: (name, value) => {
        this.$set(this.lineStyles, name, value);
      },
    };

    this.foundation = new MDCLineRippleFoundation(adapter);
    this.foundation.init();
  },

  beforeDestroy() {
    this.foundation.destroy();
  },

  methods: {
    setRippleCenter(xCoordinate) {
      this.foundation.setRippleCenter(xCoordinate);
    },
    activate() {
      this.foundation.activate();
    },

    deactivate() {
      this.foundation.deactivate();
    },
  },
};
