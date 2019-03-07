<template>
  <div class="mdc-demo mdc-demo--container">
    <mdc-button raised @click="showSnackbar">Show Snackbar</mdc-button>
    <mdc-snackbar
      ref="bar"
      v-model="open"
      :labelText="'This is a snackbar: ' + this.n"
      actionText="action"
      leading
      timeoutMs="10000"
      @click="doalert"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      n: 0
    }
  },
  methods: {
    doalert() {
      alert('clicked')
    },
    showSnackbar() {
      this.open = !this.open
      this.n += 1
      // this.snack = {
      //   message: `This is a snackbar: ${n++}`,
      //   actionText: 'action',
      //   actionHandler() {}
      // }
    }
  }
}
</script>
