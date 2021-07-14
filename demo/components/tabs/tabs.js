export default {
  data() {
    const items = [
      'item one',
      'item two',
      'item three',
      'item four',
      'item five',
      'item six',
      'item seven',
    ];
    return {
      selectedItem: items[0],
      items,
      activeTabIndex: 1,
    };
  },
  computed: {
    filteredItems() {
      return this.items.slice(0, 3);
    },
  },
  mounted() {
    this.$refs.firstExample.activateTab(1);
  },
  methods: {
    onSelected(index) {
      this.selectedItem = this.items[index];
    },
  },
};
