<template>
  <div>
    <top-app-bar @nav="open = true"/>
    <mcw-drawer modal ref="drawer" class="primary-drawer" toolbar-spacer v-model="open">
      <mcw-drawer-header></mcw-drawer-header>
      <mcw-drawer-list dense>
        <mcw-drawer-item to="/">Home</mcw-drawer-item>
        <mcw-drawer-item to="/docs/getting-started">Getting Started</mcw-drawer-item>
        <mcw-drawer-divider/>
        <mcw-drawer-item v-for="link in links" :to="link.to" :key="link.id">{{ link.name }}</mcw-drawer-item>
      </mcw-drawer-list>
    </mcw-drawer>
    <main class="content">
      <router-view/>
    </main>
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
