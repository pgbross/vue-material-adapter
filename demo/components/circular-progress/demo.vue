<template>
  <div class="mcw-demo mcw-demo--container">
    <div class="circular-progress-demo">
      <mcw-circular-progress progress="0.3" />
      <p>
        <mcw-caption>Determinate</mcw-caption>
      </p>
      <br />
      <mcw-circular-progress indeterminate />
      <p>
        <mcw-caption>Indeterminate</mcw-caption>
      </p>
      <br />

      <mcw-circular-progress medium :progress="progressValue" />
      <p>
        <mcw-caption>Medium</mcw-caption>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {progressValue: 0.8}
  }
}
</script>

<style>
.circular-progress-demo {
  flex: 1;
  min-width: 150px;
  max-width: 450px;
}
</style>
