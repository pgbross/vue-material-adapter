import { computed, onMounted, reactive, toRefs } from 'vue';

export default {
  setup() {
    const items = [
      'item one',
      'item two',
      'item three',
      'item four',
      'item five',
      'item six',
      'item seven',
    ];
    const uiState = reactive({
      selectedItem: items[0],
      items,
      activeTabIndex: 1,
      firstExample: undefined,
    });

    const filteredItems = computed(() => {
      return uiState.items.slice(0, 3);
    });

    const onSelected = index => {
      uiState.selectedItem = uiState.items[index];
    };

    onMounted(() => {
      uiState.firstExample.activateTab(1);
    });
    return { ...toRefs(uiState), filteredItems, onSelected };
  },
};
