<template>
  <mdc-top-app-bar class="main-toolbar" title="vue mdc adapter" icon="menu" @nav="$emit('nav')">
    <!-- <mdc-toolbar-section align-start> -->
    <!-- <mdc-toolbar-menu-icon event="toggle-drawer"/> -->
    <!--
      <mdc-toolbar-title @click="$router.push('/')">{{ 'vue\u2022mdc\u2022adapter' }}</mdc-toolbar-title>
    -->
    <!-- </mdc-toolbar-section> -->

    <mdc-top-app-bar-action @click="showGitHub" icon="help"></mdc-top-app-bar-action>

    <!--
      <mdc-toolbar-section
        shrink-to-fit
        align-end>
        <mdc-toolbar-icon
          href="https://github.com/pgbross/vue-material-adapter"
          target="_blank">
          <img :src="githubLogo" >
        </mdc-toolbar-icon>
      </mdc-toolbar-section>
    -->
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
