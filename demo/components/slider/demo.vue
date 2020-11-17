<template>
  <div class="mcw-demo mcw-demo--container">
    <div class="slider-demo">
      <div class="mdc-typography--caption">Continuous</div>
      <!-- <mcw-slider v-model="sliderValue1" max="10" /> -->

      <div class="mdc-typography--caption">Continuous range</div>
      <mcw-slider
        v-model="sliderValue1"
        v-model:start="sliderValueStart"
        max="10"
        range
      />

      <div class="mdc-typography--caption">Continuous Rtl</div>
      <!-- <mcw-slider v-model="sliderValue1" max="10" dir="rtl" /> -->
      <div class="mdc-typography--caption">Discrete</div>
      <!-- <mcw-slider v-model="sliderValue1" discrete max="10" data-step="1" /> -->
      <div class="mdc-typography--caption">Discreete with markers</div>
      <!-- <mcw-slider
        v-model="sliderValue2"
        discrete
        data-step="2"
        max="10"
        tick-marks
      /> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderValueStart: 2,
      sliderValue1: 5,
      sliderValue2: 4,
    };
  },
};
</script>

<style>
.slider-demo {
  width: 75%;
}
</style>
