export default {
  data() {
    return {
      checked: false,
      indeterminate_: false,
      disabled: false,
      checkedSolo: false,
      ids: [],
    };
  },
  computed: {
    indeterminate: {
      get() {
        return this.indeterminate_;
      },
      set(nv) {
        this.indeterminate_ = nv;
      },
    },
  },
  methods: {
    onIndeterminate() {
      this.indeterminate = true;
    },
    onIds(nv) {
      console.log(nv);
      this.ids = nv;
    },
  },
};
