<template>
  <div class="mdc-demo">
    <div class="mdc-demo mdc-demo--container">
      <mdc-radio label="Dog" radioClasses="my-radio">
        <mdc-radio-input v-model="picked" id="dog" name="pets" value="dog"></mdc-radio-input>
      </mdc-radio>
      <mdc-radio label="Cat">
        <mdc-radio-input v-model="picked" id="cat" name="pets" value="cat"></mdc-radio-input>
      </mdc-radio>
    </div>
    <mdc-caption v-if="picked">
      picked:
      <span class>{{ picked }}</span>
    </mdc-caption>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: 'dog',
    };
  },
};
</script>
