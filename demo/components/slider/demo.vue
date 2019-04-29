<template>
  <div class="mcw-demo mcw-demo--container">
    <div class="slider-demo">
      <p>
        <mcw-caption>Continuous</mcw-caption>
      </p>
      <mcw-slider v-model="sliderValue1" max="10"/>
      <p>
        <mcw-caption>Continuous Rtl</mcw-caption>
      </p>
      <mcw-slider v-model="sliderValue1" max="10" dir="rtl"/>
      <p>
        <mcw-caption>Discrete</mcw-caption>
      </p>
      <mcw-slider v-model="sliderValue1" discrete max="10"/>
      <p>
        <mcw-caption>Discreete with markers</mcw-caption>
      </p>
      <mcw-slider v-model="sliderValue2" discrete step="2" max="10" display-markers/>
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
