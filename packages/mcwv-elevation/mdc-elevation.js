export default {
  name: 'mdc-elevation',
  props: {
    z: {
      type: [Number, String],
      default() {
        return 1;
      },
    },
  },
  data() {
    const elevationClasses = {
      'mdc-elevation': 1,
      [`mdc-elevation--z${this.z}`]: 1,
    };

    return {
      classes: elevationClasses,
    };
  },
  render(createElement) {
    return createElement('div', { class: this.classes }, this.$slots.default);
  },
};
