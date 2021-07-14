export default {
  data() {
    return { showBanner: false, reason: '' };
  },
  computed: {},

  mounted() {},
  methods: {
    onShow() {
      this.showBanner = true;
    },
    onClosing({ reason }) {
      this.reason = reason;
    },
  },
};
