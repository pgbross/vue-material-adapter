<template>
  <div class="mcw-demo mcw-demo--container">
    <div class="mcw-demo mcw-demo--container">
      <mcw-button @click="showSimple">{{open ? 'Close' : 'Simple'}}</mcw-button>
      <mcw-button @click="showBaseline">Baseline</mcw-button>
      <mcw-button @click="showLeading">Leading</mcw-button>
      <mcw-button @click="showStacked">Stacked</mcw-button>
    </div>

    <mcw-snackbar-queue ref="bar"/>
    <mcw-snackbar v-model="open" message="Simple message" :dismissAction="false"></mcw-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      n: 0,
      action: '',
    };
  },
  methods: {
    doalert() {
      alert('clicked');
    },
    showSimple() {
      this.open = !this.open;
      this.open && this.n++;
    },
    showBaseline() {
      this.$refs.bar.handleSnack({
        message: `Can't send photo. Retry in 5 seconds.`,
        timeoutMs: 5000,
        actionText: 'Retry',
        actionHandler: ({ reason }) => {
          alert(`Action, reason: ${reason}`);
        },
        closeOnEscape: false,
      });
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
      this.$refs.bar.handleSnack({
        message: `Your photo has been archived.`,
        timeoutMs: 5000,
        actionText: 'Undo',
        leading: true,
      });
    },
  },
};
</script>
