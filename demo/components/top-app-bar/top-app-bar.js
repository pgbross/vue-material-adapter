export default {
  data() {
    return {
      buttonText: '',
      navigation: false,
      navigationCount: 0,
      scrollTarget: undefined,
    };
  },
  mounted() {
    const demoElement = this.$el.querySelector('.mcw-demo');
    this.scrollTarget = demoElement;
  },
  methods: {
    onNav() {
      this.navigation = true;
      this.navigationCount += 1;
    },
  },
};
