<template>
  <div class="mcw-demo">
    <div class="mcw-demo mcw-demo--container">
      <mcw-radio
        id="dog"
        v-model="picked"
        radio-classes="my-radio"
        label="Dog"
        name="pets"
        value="dog"
      ></mcw-radio>
      <mcw-radio
        id="cat"
        v-model="picked"
        label="Cat"
        name="pets"
        value="cat"
      ></mcw-radio>
    </div>
    <div v-if="picked" class="mdc-typography--caption">
      picked:
      <span class>{{ picked }}</span>
    </div>
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
