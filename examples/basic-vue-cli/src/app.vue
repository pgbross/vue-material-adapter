<template>
  <div id="app">
    <mcw-button raised @click="toggleOpen">Show dialog</mcw-button>
    <mcw-dialog v-model="open" id="demo-dialog" @mdcdialog:closing="onClosed">
      <mcw-dialog-title>Lorem ipsum dolor</mcw-dialog-title>
      <mcw-dialog-content>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
import { reactive, toRefs } from 'vue';

export default {
  name: 'App',
  setup() {
    const uiState = reactive({ open: false, snackbar: undefined });

    const toggleOpen = () => (uiState.open = !uiState.open);

    const onClosed = () => {
      uiState.snackbar.handleSnack({
        message: 'Dialog closed',
        dismissAction: true,
        actionText: 'close',
      });
    };
    return { ...toRefs(uiState), onClosed, toggleOpen };
  },
};
</script>

<style lang="scss">
@use "styles";
</style>
