<template>
  <section>
    <div :style="'background-image: url(' + icon + ')'" class="demo-icon" />

    <mcw-headline4 v-if="title" ref="title">{{ title }}</mcw-headline4>
    <article v-if="demo" class="demo-article">
      <component :is="demo" />
    </article>
    <article v-if="readme" class="doc-article markdown">
      <mcw-headline4>
        Note: elements can use names prefixed with either
        <em>mcw-</em> (preferred) or for backwards compatibility
        <em>mdc-</em>.
      </mcw-headline4>
      <component :is="readme" />
    </article>
  </section>
</template>

<script>
import links from './links.js';

const titles = links.reduce((result, link) => {
  return { ...result, ...{ [link.id]: link.title } };
}, {});

const icons = links.reduce((result, link) => {
  return { ...result, ...{ [link.id]: link.icon } };
}, {});

export default {
  components: {
    'button-readme': () => import('./components/button/README.md'),
    'card-readme': () => import('./components/card/README.md'),
    'chips-readme': () => import('./components/chips/README.md'),
    'checkbox-readme': () => import('./components/checkbox/README.md'),
    'data-table-readme': () => import('./components/data-table/README.md'),
    'dialog-readme': () => import('./components/dialog/README.md'),
    'drawer-readme': () => import('./components/drawer/README.md'),
    'fab-readme': () => import('./components/fab/README.md'),
    'grid-list-readme': () => import('./components/grid-list/README.md'),
    'icon-button-readme': () => import('./components/icon-button/README.md'),
    'layout-grid-readme': () => import('./components/layout-grid/README.md'),
    'linear-progress-readme': () =>
      import('./components/linear-progress/README.md'),
    'list-readme': () => import('./components/list/README.md'),
    'material-icon-readme': () =>
      import('./components/material-icon/README.md'),
    'menu-readme': () => import('./components/menu/README.md'),
    'radio-readme': () => import('./components/radio/README.md'),
    'select-readme': () => import('./components/select/README.md'),
    'slider-readme': () => import('./components/slider/README.md'),
    'snackbar-readme': () => import('./components/snackbar/README.md'),
    'switch-readme': () => import('./components/switch/README.md'),
    'tabs-readme': () => import('./components/tabs/README.md'),
    'textfield-readme': () => import('./components/textfield/README.md'),
    'top-app-bar-readme': () => import('./components/top-app-bar/README.md'),
    'typography-readme': () => import('./components/typography/README.md'),

    'button-demo': () => import('./components/button/demo.vue'),
    'card-demo': () => import('./components/card/demo.vue'),
    'checkbox-demo': () => import('./components/checkbox/demo.vue'),
    'data-table-demo': () => import('./components/data-table/demo.vue'),
    'chips-demo': () => import('./components/chips/demo.vue'),
    'dialog-demo': () => import('./components/dialog/demo.vue'),
    'drawer-demo': () => import('./components/drawer/demo.vue'),
    'fab-demo': () => import('./components/fab/demo.vue'),
    'grid-list-demo': () => import('./components/grid-list/demo.vue'),
    'icon-button-demo': () => import('./components/icon-button/demo.vue'),
    'layout-grid-demo': () => import('./components/layout-grid/demo.vue'),
    'linear-progress-demo': () =>
      import('./components/linear-progress/demo.vue'),
    'list-demo': () => import('./components/list/demo.vue'),
    'material-icon-demo': () => import('./components/material-icon/demo.vue'),
    'menu-demo': () => import('./components/menu/demo.vue'),
    'radio-demo': () => import('./components/radio/demo.vue'),
    'select-demo': () => import('./components/select/demo.vue'),
    'slider-demo': () => import('./components/slider/demo.vue'),
    'snackbar-demo': () => import('./components/snackbar/demo.vue'),
    'switch-demo': () => import('./components/switch/demo.vue'),
    'tabs-demo': () => import('./components/tabs/demo.vue'),
    'textfield-demo': () => import('./components/textfield/demo.vue'),
    'top-app-bar-demo': () => import('./components/top-app-bar/demo.vue'),
    'typography-demo': () => import('./components/typography/demo.vue'),
  },
  computed: {
    demo() {
      let key = this.$route.params.id + '-demo';
      return key in this.$options.components ? key : undefined;
    },
    readme() {
      let key = this.$route.params.id + '-readme';
      return key in this.$options.components ? key : undefined;
    },
    title() {
      return titles[this.$route.params.id];
    },
    icon() {
      return icons[this.$route.params.id];
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.$nextTick(() => scrollTo(0, 0));
    next();
  },
};
</script>
