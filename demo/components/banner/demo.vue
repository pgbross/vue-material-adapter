<template>
  <div class="mcw-demo">
    <mcw-banner
      v-model="showBanner"
      text="This is a banner component"
      primary-action="Fix me"
      secondary-action="Learn more"
      icon="error_outline"
      @mdcbanner:closing="onClosing"
    ></mcw-banner>

    <br />
    <fieldset class="demo-controls">
      <label>Demo controls</label> <br />
      <mcw-button outlined @click="onShow">Show Banner</mcw-button>
      <div>Reason: {{ reason }}</div>
    </fieldset>
  </div>
</template>

<script src="./banner.js"></script>

<style lang="scss">
.demo-controls {
  margin-top: 2em;
}
</style>
