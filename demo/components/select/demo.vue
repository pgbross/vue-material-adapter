<template>
  <div class="mdc-demo">
    <div class="mdc-demo mdc-demo--container">
      <div>
        <mdc-select v-model="selectedType" label="Food" helptext="Pick a food group">
          <option v-for="type in types" :value="type" :key="type">
            {{
            type
            }}
          </option>
        </mdc-select>

        <br>
        <mdc-select v-if="selectedType" v-model="selectedValue" outlined label="Kind">
          <option v-for="option of options" :key="option" :value="option.toLowerCase()">{{ option }}</option>
        </mdc-select>
      </div>
    </div>
    <mdc-caption v-if="selectedType" tag="p">Selected Type: {{ selectedType }}</mdc-caption>
    <mdc-caption v-if="selectedValue" tag="p">Selected Value: {{ selectedValue }}</mdc-caption>
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
.mdc-demo .mdc-select {
  width: 10em;
}
</style>
