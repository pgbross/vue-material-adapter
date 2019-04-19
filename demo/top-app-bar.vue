<template>
  <mdc-top-app-bar class="main-toolbar">
    <mdc-top-app-bar-row>
      <mdc-top-app-bar-section align="start">
        <mdc-top-app-bar-icon navIcon>
          <mdc-material-icon @click="$emit('nav')" icon="menu"></mdc-material-icon>
        </mdc-top-app-bar-icon>
        <mdc-top-app-bar-title>vue mdc adapter</mdc-top-app-bar-title>
      </mdc-top-app-bar-section>

      <mdc-top-app-bar-section align="end">
        <mdc-top-app-bar-icon actionItem aria-label="Help">
          <mdc-material-icon @click="showGitHub" icon="help"></mdc-material-icon>
        </mdc-top-app-bar-icon>
      </mdc-top-app-bar-section>
    </mdc-top-app-bar-row>
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
    showGitHub() {
      alert('Show help');
    },
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
