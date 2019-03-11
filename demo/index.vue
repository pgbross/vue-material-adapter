<template>
  <div class="mdc-layout-app">
    <top-app-bar @nav="open = true" />
    <mdc-drawer
      modal
      ref="drawer"
      class="primary-drawer"
      toolbar-spacer
      v-model="open"
    >
      <div class="mdc-drawer__header" slot="header">
        <!-- <h3 class="mdc-drawer__title">Mail</h3> -->
      </div>
      <mdc-drawer-list dense>
        <mdc-drawer-item to="/">Home</mdc-drawer-item>
        <mdc-drawer-item to="/docs/getting-started"
          >Getting Started</mdc-drawer-item
        >
        <mdc-drawer-divider />
        <mdc-drawer-item v-for="link in links" :to="link.to" :key="link.id">
          {{ link.name }}
        </mdc-drawer-item>
      </mdc-drawer-list>
    </mdc-drawer>
    <div class="mdc-layout-app--main-container">
      <div class="mdc-layout-app--content-wrapper">
        <main class="content"><router-view /></main>
      </div>
    </div>
  </div>
</template>

<script>
import topAppBar from './top-app-bar.vue';
import links from './links.js';
export default {
  data() {
    return { open: false, links };
  },
  components: {
    topAppBar,
  },
};
</script>
