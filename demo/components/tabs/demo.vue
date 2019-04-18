<template>
  <div class>
    <mdc-headline6>Simple</mdc-headline6>
    <section class="mdc-demo mdc-demo--container">
      <mdc-tab-bar @change="onSelected" activeTabIndex="1">
        <mdc-tab v-for="item in filteredItems" :key="item.label">{{ item }}</mdc-tab>
      </mdc-tab-bar>
    </section>
    <br>
    <div v-if="selectedItem" style="text-align: right">
      <mdc-caption>
        Selected:
        <span class="demo-tabs-selected">{{ selectedItem }}</span>
      </mdc-caption>
    </div>
    <mdc-headline6>With icons and text</mdc-headline6>
    <section class="mdc-demo mdc-demo--container">
      <mdc-tab-bar>
        <mdc-tab icon="phone">Recents</mdc-tab>
        <mdc-tab icon="favorite" stacked>Favorites</mdc-tab>
        <mdc-tab icon="personal_pin">Nearby</mdc-tab>
      </mdc-tab-bar>
    </section>
    <mdc-headline6>Scrollable</mdc-headline6>
    <section class="mdc-demo mdc-demo--container mdc-demo--container-narrow">
      <mdc-tab-bar @change="onSelected" activeTabIndex="1">
        <mdc-tab v-for="item in items" :key="item.label">{{ item }}</mdc-tab>
      </mdc-tab-bar>
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
