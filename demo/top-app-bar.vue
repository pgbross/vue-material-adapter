<template>
  <mcw-top-app-bar class="main-toolbar">
    <mcw-top-app-bar-row>
      <mcw-top-app-bar-section align="start">
        <mcw-top-app-bar-icon navIcon>
          <mcw-material-icon @click="$emit('nav')" icon="menu"></mcw-material-icon>
        </mcw-top-app-bar-icon>
        <mcw-top-app-bar-title>vue mdc adapter</mcw-top-app-bar-title>
      </mcw-top-app-bar-section>

      <mcw-top-app-bar-section align="end">
        <mcw-top-app-bar-icon actionItem aria-label="Help">
          <a
            href="https://github.com/pgbross/vue-material-adapter"
            target="_blank"
            title="Vue-material-adapter"
          >
            <img :src="githubLogo">
          </a>
        </mcw-top-app-bar-icon>
      </mcw-top-app-bar-section>
    </mcw-top-app-bar-row>
  </mcw-top-app-bar>
</template>

<script>
import githubLogo from './assets/github-logo.svg';

export default {
  data() {
    return {
      githubLogo,
    };
  },
};
</script>

<style>
.vue-avatar {
  width: 32px;
  height: 32px;
}
.vue-avatar img {
  border-radius: 32px;
  background-color: #f0f0f0;
}
</style>
