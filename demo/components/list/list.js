export default {
  data() {
    return {
      selected: 1,
      listSelected: [],
      radioSelected: undefined,
      picked: '1',
      test_: true,
    };
  },
  computed: {
    test: {
      set(nv) {
        this.test_ = nv;
      },
      get() {
        return this.test_;
      },
    },
  },
  methods: {
    onAction({ detail }) {
      console.log(detail.index);
    },
  },
};
