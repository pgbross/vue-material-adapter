<template>
  <div class="mcw-demo">
    <div class="mcw-demo mcw-demo--container">
      <mcw-radio
        label="Dog"
        radioClasses="my-radio"
        v-model="picked"
        id="dog"
        name="pets"
        value="dog"
      ></mcw-radio>
      <mcw-radio label="Cat" v-model="picked" id="cat" name="pets" value="cat"></mcw-radio>
    </div>
    <mcw-caption v-if="picked">
      picked:
      <span class>{{ picked }}</span>
    </mcw-caption>
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
