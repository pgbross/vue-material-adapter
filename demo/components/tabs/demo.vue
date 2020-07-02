<template>
  <div class>
    <div class="mdc-typography--headline6">Simple</div>
    <section class="mcw-demo mcw-demo--container">
      <mcw-tab-bar @change="onSelected" activeTabIndex="1">
        <mcw-tab v-for="item in filteredItems" :key="item.label">{{
          item
        }}</mcw-tab>
      </mcw-tab-bar>
    </section>
    <br />
    <div v-if="selectedItem" style="text-align: right;">
      <mcw-caption>
        Selected:
        <span class="demo-tabs-selected">{{ selectedItem }}</span>
      </mcw-caption>
    </div>
    <div class="mdc-typography--headline6">With icons and text</div>
    <section class="mcw-demo mcw-demo--container">
      <mcw-tab-bar>
        <mcw-tab icon="phone">Recents</mcw-tab>
        <mcw-tab icon="favorite" stacked>Favorites</mcw-tab>
        <mcw-tab icon="personal_pin">Nearby</mcw-tab>
      </mcw-tab-bar>
    </section>
    <div class="mdc-typography--headline6">Scrollable</div>
    <section class="mcw-demo mcw-demo--container mcw-demo--container-narrow">
      <mcw-tab-bar @change="onSelected" activeTabIndex="1">
        <mcw-tab v-for="item in items" :key="item.label">{{ item }}</mcw-tab>
      </mcw-tab-bar>
    </section>
  </div>
</template>

<script>
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
    };
  },
  computed: {
    filteredItems() {
      return this.items.slice(0, 3);
    },
  },
  methods: {
    onSelected(idx) {
      this.selectedItem = this.items[idx];
    },
  },
};
</script>

<style>
.demo-tabs-selected {
  font-style: italic;
}
</style>
