export default {
  data() {
    return {
      type: '',
      disabled: false,
      icon: 'favorite',
      svg: false,
    };
  },
  computed: {
    raised() {
      return this.type == 'raised';
    },
    unelevated() {
      return this.type == 'unelevated';
    },
    outlined() {
      return this.type == 'outlined';
    },
    buttonProps() {
      return {
        disabled: this.disabled,
        raised: this.raised,
        outlined: this.outlined,
        unelevated: this.unelevated,
      };
    },
  },

  mounted() {
    setTimeout(() => {
      this.icon = 'flight_takeoff';
    }, 2000);

    setTimeout(() => {
      this.svg = true;
    }, 1000);
  },
  methods: {
    onClick() {
      console.log('on-click');
    },
  },
};
