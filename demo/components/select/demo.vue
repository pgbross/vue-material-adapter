<template>
  <div class="mcw-demo">
    <div class="mcw-demo mcw-demo--container">
      <div>
        <mcw-select
          :value="selectedType"
          label="Food"
          helptext="Pick a food group"
          @change="onTypeChanged"
        >
          <mcw-menu class="mdc-select__menu">
            <li
              v-for="type in types"
              :key="type"
              class="mdc-list-item"
              role="menuitem"
              :data-value="type"
            >
              <span class="mdc-list-item__text">{{ type }}</span>
            </li>
          </mcw-menu>
        </mcw-select>

        <br />
        <mcw-select v-if="selectedType" v-model="selectedValue" outlined label="Kind">
          <mcw-menu class="mdc-select__menu">
            <li
              v-for="option of options"
              :key="option"
              :data-value="option.toLowerCase()"
              class="mdc-list-item"
              role="menuitem"
            >
              <span class="mdc-list-item__text">{{ option }}</span>
            </li>
          </mcw-menu>
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
    onKindChanged(nv) {
      this.selectedValue = nv;
    },
  },
};
</script>

<style>
.mcw-demo .mcw-select {
  width: 10em;
}
</style>
