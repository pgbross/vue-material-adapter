<template>
  <div class="mcw-demo mcw-demo--container">
    <div class="circular-progress-demo">
      <mcw-circular-progress progress="0.3" />
      <div class="mdc-typography--caption">Determinate</div>
      <br />
      <mcw-circular-progress indeterminate />
      <div class="mdc-typography--caption">Indeterminate</div>
      <br />
      <mcw-circular-progress medium :progress="progressValue" />
      <div class="mdc-typography--caption">Medium</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { progressValue: 0.8 };
  },
};
</script>

<style>
.circular-progress-demo {
  flex: 1;
  min-width: 150px;
  max-width: 450px;
}
</style>
