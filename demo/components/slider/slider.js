import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const uiState = reactive({
      sliderValueStart: 2,
      sliderValueEnd: 7,
      sliderValue1: 5,
      sliderValue2: 4,
    });

    return { ...toRefs(uiState) };
  },
};
