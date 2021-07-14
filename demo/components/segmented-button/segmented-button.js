export default {
  data() {
    return { singleIndex: undefined, multiIndex: [] };
  },
  computed: {},

  mounted() {
    // let sc = 0;
    // const singleTimer = setInterval(() => {
    //   if (this.singleIndex < 2) {
    //     this.singleIndex += 1;
    //   } else {
    //     this.singleIndex = 0;
    //   }
    //   if (sc++ > 3) {
    //     clearInterval(singleTimer);
    //   }
    // }, 1000);
    // let mc = 0;
    // let mi = 0;
    // const multiTimer = setInterval(() => {
    //   const idx = this.multiIndex.indexOf(mi);
    //   if (idx < 0) {
    //     this.multiIndex = this.multiIndex.concat(mi);
    //   } else {
    //     this.multiIndex = this.multiIndex
    //       .slice(0, idx)
    //       .concat(this.multiIndex.slice(idx + 1));
    //   }
    //   if (++mi > 2) {
    //     mi = 0;
    //   }
    //   if (mc++ > 20) {
    //     clearInterval(multiTimer);
    //   }
    // }, 1000);
  },
  methods: {
    onChange(/* detail */) {
      // console.dir(detail);
    },
    onFavourite() {
      console.log('onFavourite');
    },
  },
};
