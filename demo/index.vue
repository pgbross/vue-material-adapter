<template>
  <div>
    <top-app-bar @nav="open = true" />
    <mcw-drawer
      ref="drawer"
      v-model="open"
      modal
      class="primary-drawer"
      toolbar-spacer
    >
      <mcw-drawer-header></mcw-drawer-header>
      <mcw-drawer-list dense>
        <mcw-drawer-item to="/">Home</mcw-drawer-item>
        <mcw-drawer-item to="/docs/getting-started"
          >Getting Started</mcw-drawer-item
        >
        <mcw-drawer-divider />
        <mcw-drawer-item v-for="link in links" :key="link.id" :to="link.to">{{
          link.name
        }}</mcw-drawer-item>
      </mcw-drawer-list>
    </mcw-drawer>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import topAppBar from './top-app-bar.vue';
import links from './links.js';
export default {
  components: {
    topAppBar,
  },
  data() {
    return { open: false, links };
  },
};
</script>
