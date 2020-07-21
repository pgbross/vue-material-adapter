<template>
  <div id="root">
    <div class="draw-frame">
      <mcw-drawer
        ref="drawer"
        v-model="open"
        dismissible
        class="primary-drawer"
      >
        <template #header>
          <div class="mdc-drawer__header"></div>
        </template>

        <mcw-list-item to="/" tabindex="0">Home</mcw-list-item>
        <mcw-list-item to="/docs/getting-started"
          >Getting Started</mcw-list-item
        >
        <hr class="mdc-list-divider" />
        <h6 class="mdc-list-group__subheader">Components</h6>
        <mcw-list-item v-for="link in links" :key="link.id" :to="link.to">{{
          link.name
        }}</mcw-list-item>
      </mcw-drawer>
      <div class="mdc-drawer-app-content">
        <top-app-bar @nav="onNav"></top-app-bar>
        <div class="drawer-main-content">
          <div class="mdc-top-app-bar--fixed-adjust"></div>
          <router-view />
        </div>
      </div>
    </div>
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
<style lang="css">
body {
  margin: 0;
}
.draw-frame {
  display: flex;
  height: 100vh;
}
.drawer-main-content {
  overflow: auto;
  height: 100%;
  padding: 0 18px;
}
.mdc-drawer-app-content {
  flex: auto;
  overflow: auto;
  position: relative;
}
</style>
