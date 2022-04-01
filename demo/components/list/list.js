export default {
  data() {
    return {
      selected: 1,
      listSelected: [],
      radioSelected: 'cat',
      checkboxSelected: [false, false],
      picked: '1',
      test_: true,
      show2a: false,
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

  mounted() {
    setTimeout(() => {
      this.show2a = true;
    }, 5000);
  },
};
