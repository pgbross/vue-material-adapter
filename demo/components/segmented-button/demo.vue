<template>
  <div class="mcw-demo">
    <div>Single select</div>
    <mcw-segmented-button
      v-model="singleIndex"
      single-select
      @change="onChange"
      touch
    >
      <mcw-segment icon="favorite" label="Some text"></mcw-segment>
      <mcw-segment label="Some text"></mcw-segment>
      <mcw-segment icon="delete" :ripple="false"></mcw-segment>
    </mcw-segmented-button>

    <div>Value: {{ singleIndex }}</div>

    <div style="margin-top: 2em">Multi select</div>
    <mcw-segmented-button v-model="multiIndex">
      <mcw-segment icon="favorite" label="Some text"></mcw-segment>
      <mcw-segment label="Some text"></mcw-segment>
      <mcw-segment icon="delete" :ripple="false"></mcw-segment>
    </mcw-segmented-button>

    <div>Value: {{ multiIndex }}</div>
  </div>
</template>

<script src="./segmented-button.js"></script>

<style lang="scss">
.demo-controls {
  margin-top: 2em;
}
</style>
