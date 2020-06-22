<template>
  <mcw-top-app-bar class="main-toolbar">
    <mcw-top-app-bar-row>
      <mcw-top-app-bar-section align="start">
        <mcw-top-app-bar-icon @click="$emit('nav')">menu</mcw-top-app-bar-icon>
        <mcw-top-app-bar-title>vue material adapter</mcw-top-app-bar-title>
      </mcw-top-app-bar-section>

      <mcw-top-app-bar-section align="end">
        <mcw-top-app-bar-icon
          aria-label="Help"
          target="_blank"
          title="Vue-material-adapter"
          action-item
          @click="goto('https://github.com/pgbross/vue-material-adapter')"
        >
          <img :src="githubLogo" />
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
  methods: {
    goto(href) {
      window.open(href, '_blank');
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
