import MDCLineRippleFoundation from '@material/line-ripple/foundation';

export default {
  name: 'mcw-line-ripple',

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

    // note: do not call the property 'foundation' as the tests will then
    // expext all methods to be implemented, and we handle transitionend locally
    this.foundation_ = new MDCLineRippleFoundation(adapter);
    this.foundation_.init();
  },

  beforeDestroy() {
    this.foundation_.destroy();
  },

  methods: {
    setRippleCenter(xCoordinate) {
      this.foundation_.setRippleCenter(xCoordinate);
    },
    activate() {
      this.foundation_.activate();
    },

    deactivate() {
      this.foundation_.deactivate();
    },
  },
  render(createElement) {
    return createElement('span', {
      class: this.lineClasses,
      style: this.lineStyles,
      on: { transitionend: evt => this.foundation_.handleTransitionEnd(evt) },
    });
  },
};
