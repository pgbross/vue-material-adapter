<template>
  <mdc-top-app-bar class="main-toolbar" title="vue mdc adapter" icon="menu" @nav="$emit('nav')">
    <mdc-top-app-bar-action @click="showGitHub" icon="help"></mdc-top-app-bar-action>
  </mdc-top-app-bar>
</template>

<script>
import githubLogo from './assets/github-logo.svg';

export default {
  data() {
    return {
      githubLogo,
    };
  },

  methods: {
    showGitHub() {},
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
