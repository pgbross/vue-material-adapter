<template>
  <div class="mcw-demo">
    <section>
      <div class="mcw-demo mcw-demo--container">
        <mcw-button @click="showSimple">{{
          open ? 'Close' : 'Simple'
        }}</mcw-button>
        <mcw-button @click="showBaseline">Baseline</mcw-button>
        <mcw-button @click="showLeading">Leading</mcw-button>
        <mcw-button @click="showStacked">Stacked</mcw-button>
      </div>
    </section>
    <div v-if="reason" class="mdc-typography--caption">
      Result:
      <span class>{{ reason }}</span>
    </div>
    <mcw-snackbar-queue ref="bar" @update:reason="onReason" />
    <mcw-snackbar
      v-model="open"
      message="Simple message"
      :dismiss-action="false"
      @update:reason="onReason"
    ></mcw-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      n: 0,
      action: '',
      reason: '',
    };
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
