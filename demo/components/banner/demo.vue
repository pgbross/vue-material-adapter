<template>
  <div class="mcw-demo">
    <mcw-banner
      v-model="showBanner"
      text="This is a banner component"
      primary-action="Fix me"
      secondary-action="Learn more"
      icon="help"
      @mdcbanner:closing="onClosing"
      @mdcbanner:actionclicked="onAction"
    ></mcw-banner>

    <br />
    <fieldset class="demo-controls">
      <label>Demo controls</label> <br />
      <mcw-button outlined @click="showBanner = !showBanner"
        >Show Banner</mcw-button
      >
      <div>Close reason: {{ reason }}</div>
      <div>Action: {{ action }}</div>
    </fieldset>
  </div>
</template>

<script src="./banner.js"></script>

<style lang="scss">
.demo-controls {
  margin-top: 2em;
}
</style>
