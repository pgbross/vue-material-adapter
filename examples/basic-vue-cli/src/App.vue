<template>
  <div id="app">
    <mcw-button raised @click="open=!open">Show dialog</mcw-button>
    <mcw-dialog
      v-model="open"
      id="demo-dialog"
      @MDCDialog:closing="onClosed"
    >
      <mcw-dialog-title>Lorem ipsum dolor</mcw-dialog-title>
      <mcw-dialog-content>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </div>
      </mcw-dialog-content>

      <mcw-dialog-footer>
        <mcw-dialog-button action="dismiss">Dismiss</mcw-dialog-button>
        <mcw-dialog-button action="accept" isDefault>Accept</mcw-dialog-button>
      </mcw-dialog-footer>
    </mcw-dialog>
    <mcw-snackbar-queue ref="snackbar" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      open: false
    }
  },
  methods: {
    onClosed() {
      this.$refs.snackbar.handleSnack({ message: "Dialog closed", dismissAction: false, actionText: "close" });
    }
  },
}
</script>

<style lang="scss">
@use "styles";
</style>
