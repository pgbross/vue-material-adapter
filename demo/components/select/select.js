import { computed, reactive, toRefs } from 'vue';

export default {
  setup() {
    const uiState = reactive({
      selectedType: 'Meat',
      selectedValue: undefined,
      food: {
        Vegetables: ['Spinach', 'Carrots', 'Onions', 'Broccoli'],
        Meat: ['Eggs', 'Chicken', 'Fish', 'Turkey', 'Pork', 'Beef'],
        Fruits: ['Apples', 'Oranges', 'Bananas', 'Berries', 'Lemons'],
      },
    });

    const types = computed(() => {
      return Object.keys(uiState.food);
    });

    const options = computed(() => {
      return uiState.selectedType ? uiState.food[uiState.selectedType] : [];
    });

    const onTypeChanged = nv => {
      console.log(nv);
      uiState.selectedType = nv;
      uiState.selectedValue = undefined;
    };

    return { ...toRefs(uiState), types, options, onTypeChanged };
  },
};
