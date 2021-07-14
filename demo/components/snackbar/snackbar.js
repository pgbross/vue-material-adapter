export default {
  data() {
    return {
      open: false,
      n: 0,
      action: '',
      reason: '',
      snack: {},
    };
  },
  watch: {
    snack(nv) {
      console.dir(nv);
    },
  },
  methods: {
    onReason(reason) {
      this.reason = reason == 'action' ? 'Took action' : 'Declined action';
    },
    doalert() {
      alert('clicked');
    },
    showSimple() {
      this.open = !this.open;
      this.open && this.n++;
    },
    showBaseline() {
      const nextSnack = {
        message: `Can't send photo. Retry in 5 seconds.`,
        timeoutMs: 5000,
        actionText: 'Retry',
        actionHandler: ({ reason }) => {
          alert(`Action, reason: ${reason}`);
        },
        closeOnEscape: false,
      };

      this.snack = nextSnack;
      // this.$refs.bar.handleSnack(nextSnack);
    },
    showStacked() {
      this.$refs.bar.handleSnack({
        message: `This item already has the label "travel". You can add a new label.`,
        timeoutMs: 5000,
        actionText: 'Add a new label',
        stacked: true,
      });
    },
    showLeading() {
      const nextSnack = {
        message: `Your photo has been archived.`,
        timeoutMs: 5000,
        actionText: 'Undo',
        leading: true,
      };

      this.snack = nextSnack;
    },
  },
};
