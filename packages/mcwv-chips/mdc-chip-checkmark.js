export default {
  name: 'mcw-chip-checkmark',
  data() {
    return { width: 0 };
  },

  render(createElement) {
    return createElement('div', { class: { 'mdc-chip__checkmark': 1 } }, [
      createElement(
        'svg',
        {
          class: { 'mdc-chip__checkmark-svg': 1 },
          attrs: { viewBox: '-2 -3 30 30' },
        },
        [
          createElement('path', {
            class: { 'mdc-chip__checkmark-path': 1 },
            attrs: {
              fill: 'none',
              stroke: 'black',
              d: 'M1.73,12.91 8.1,19.28 22.79,4.59',
            },
          }),
        ],
      ),
    ]);
  },
  mounted() {
    this.width = this.$el.getBoundingClientRect().height;
  },
};
