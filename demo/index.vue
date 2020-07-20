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
      <template #header>
        <div class="mdc-drawer__header"></div>
      </template>

      <!-- <mcw-list-item to="/" tabindex="0">Home</mcw-list-item>
      <mcw-list-item :to="{ name: 'component', params: { id: 'button' } }"
        >Button</mcw-list-item
      > -->
      <mcw-list-item to="/" tabindex="0">Home</mcw-list-item>
      <mcw-list-item to="/docs/getting-started">Getting Started</mcw-list-item>
      <mcw-drawer-divider />
      <mcw-list-item v-for="link in links" :key="link.id" :to="link.to">{{
        link.name
      }}</mcw-list-item>
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
  methods: {
    onNav() {
      this.open = !this.open;
    },
  },
};
</script>
