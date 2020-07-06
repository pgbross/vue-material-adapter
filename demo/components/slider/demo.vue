<template>
  <div class="mcw-demo mcw-demo--container">
    <div class="slider-demo">
      <div class="mdc-typography--caption">Continuous</div>
      <mcw-slider v-model="sliderValue1" max="10" />
      <div class="mdc-typography--caption">Continuous Rtl</div>
      <mcw-slider v-model="sliderValue1" max="10" dir="rtl" />
      <div class="mdc-typography--caption">Discrete</div>
      <mcw-slider v-model="sliderValue1" discrete max="10" />
      <div class="mdc-typography--caption">Discreete with markers</div>
      <mcw-slider
        v-model="sliderValue2"
        discrete
        step="2"
        max="10"
        display-markers
      />
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
