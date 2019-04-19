<template>
  <div class="mdc-demo mdc-demo--container">
    <div class="slider-demo">
      <p>
        <mdc-caption>Continuous</mdc-caption>
      </p>
      <mdc-slider v-model="sliderValue1" max="10"/>
      <p>
        <mdc-caption>Continuous Rtl</mdc-caption>
      </p>
      <mdc-slider v-model="sliderValue1" max="10" dir="rtl"/>
      <p>
        <mdc-caption>Discrete</mdc-caption>
      </p>
      <mdc-slider v-model="sliderValue1" discrete max="10"/>
      <p>
        <mdc-caption>Discreete with markers</mdc-caption>
      </p>
      <mdc-slider v-model="sliderValue2" discrete step="2" max="10" display-markers/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderValue1: 5,
      sliderValue2: 5,
    };
  },
};
</script>

<style>
.slider-demo {
  width: 75%;
}
</style>
