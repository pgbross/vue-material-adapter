<template>
  <div class="mcw-demo">
    <div class="mcw-demo mcw-demo--container">
      <div>
        <mcw-select v-model="selectedType" label="Food" helptext="Pick a food group">
          <option v-for="type in types" :value="type" :key="type">
            {{
            type
            }}
          </option>
        </mcw-select>

        <br>
        <mcw-select v-if="selectedType" v-model="selectedValue" outlined label="Kind">
          <option v-for="option of options" :key="option" :value="option.toLowerCase()">{{ option }}</option>
        </mcw-select>
      </div>
    </div>
    <mcw-caption v-if="selectedType" tag="p">Selected Type: {{ selectedType }}</mcw-caption>
    <mcw-caption v-if="selectedValue" tag="p">Selected Value: {{ selectedValue }}</mcw-caption>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedType: undefined, //'Meat',
      selectedValue: undefined,
      food: {
        Vegetables: ['Spinach', 'Carrots', 'Onions', 'Broccoli'],
        Meat: ['Eggs', 'Chicken', 'Fish', 'Turkey', 'Pork', 'Beef'],
        Fruits: ['Apples', 'Oranges', 'Bananas', 'Berries', 'Lemons'],
      },
    };
  },
  computed: {
    types() {
      return Object.keys(this.food);
    },
    options() {
      return this.selectedType ? this.food[this.selectedType] : [];
    },
  },
};
</script>

<style>
.mcw-demo .mcw-select {
  width: 10em;
}
</style>
