<template>
  <div class="mcw-demo">
    <div class="mcw-demo mcw-demo--container">
      <div>
        <mcw-select
          id="food-group"
          :model-value="selectedType"
          label="Food"
          helptext="Pick a food group"
          leading-icon="restaurant_menu"
          @update:modelValue="onTypeChanged"
        >
          <mcw-list-item
            v-for="type in types"
            :key="type"
            :data-value="type"
            role="option"
            icon
            >{{ type }}</mcw-list-item
          >
        </mcw-select>

        <br />
        <mcw-select
          v-if="selectedType"
          :key="selectedType"
          v-model="selectedValue"
          outlined
          label="Kind"
        >
          <mcw-list-item
            v-for="option of options"
            :key="option"
            :data-value="option.toLowerCase()"
            role="option"
            >{{ option }}</mcw-list-item
          >
        </mcw-select>
      </div>
    </div>
    <div v-if="selectedType" class="mdc-typography--caption">
      Selected Type: {{ selectedType }}
    </div>
    <div v-if="selectedValue" class="mdc-typography--caption">
      Selected Value: {{ selectedValue }}
    </div>
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

  methods: {
    onTypeChanged(nv) {
      console.log(nv);
      this.selectedType = nv;
      this.selectedValue = null;
    },
  },
};
</script>

<style>
.mcw-demo .mcw-select {
  width: 10em;
}
</style>
