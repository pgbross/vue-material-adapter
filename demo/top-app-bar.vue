<template>
  <mcw-top-app-bar
    class="main-toolbar"
    :scroll-target="scrollTarget"
    @nav="onNav"
  >
    <div class="mdc-top-app-bar__row">
      <section
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
      >
        <button
          class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button"
          aria-label="Open navigation menu"
        >
          menu
        </button>
        <span class="mdc-top-app-bar__title">vue material adapter</span>
      </section>

      <section
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
      >
        <button
          target="_blank"
          title="vue-material-adapter"
          class="mdc-top-app-bar__action-item mdc-icon-button"
          aria-label="Open github project"
          @click="goto('https://github.com/pgbross/vue-material-adapter')"
        >
          <img :src="githubLogo" />
        </button>
      </section>
    </div>
  </mcw-top-app-bar>
</template>

<script>
import githubLogo from './assets/github-logo.svg';

export default {
  props: { scrollTarget: HTMLElement },
  emits: ['toggle'],
  data() {
    return {
      githubLogo,
    };
  },
  methods: {
    goto(href) {
      window.open(href, '_blank');
    },

    onNav() {
      this.$emit('toggle');
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
