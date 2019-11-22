<template>
  <div class="mcw-demo">
    <div class="mcw-demo mcw-demo--container">
      <div>
        <mcw-select
          v-model="selectedType"
          label="Food"
          helptext="Pick a food group"
        >
          <mcw-menu class="mdc-select__menu">
            <mcw-list-item
              v-for="type in types"
              :data-value="type"
              :key="type"
              >{{ type }}</mcw-list-item
            >
          </mcw-menu>
        </mcw-select>

        <br />
        <mcw-select
          v-if="selectedType"
          v-model="selectedValue"
          outlined
          label="Kind"
        >
          <mcw-menu class="mdc-select__menu">
            <mcw-list-item
              v-for="option of options"
              :key="option"
              :data-value="option.toLowerCase()"
            >
              {{ option }}</mcw-list-item
            >
          </mcw-menu>
        </mcw-select>
      </div>
    </div>
    <mcw-caption v-if="selectedType" tag="p"
      >Selected Type: {{ selectedType }}</mcw-caption
    >
    <mcw-caption v-if="selectedValue" tag="p"
      >Selected Value: {{ selectedValue }}</mcw-caption
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedType: 'Meat',
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
