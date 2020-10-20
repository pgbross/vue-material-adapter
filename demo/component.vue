<template>
  <section>
    <div :style="'background-image: url(' + icon + ')'" class="demo-icon" />

    <div v-if="title" ref="title" class="mdc-typography--headline4">
      {{ title }}
    </div>
    <article v-if="demo" class="demo-article">
      <component :is="demo" />
    </article>
    <article v-if="readme" class="doc-article markdown">
      <div class="mdc-typography--subtitle2">
        Note: elements can use names prefixed with either
        <em>mcw-</em> (preferred) or for backwards compatibility <em>mdc-</em>.
      </div>
      <component :is="readme" />
    </article>
  </section>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import links from './links.js';

const titles = links.reduce((result, link) => {
  return { ...result, ...{ [link.id]: link.title } };
}, {});

const icons = links.reduce((result, link) => {
  return { ...result, ...{ [link.id]: link.icon } };
}, {});

export default {
  components: {
    'button-readme': defineAsyncComponent(() =>
      import('./components/button/README.md'),
    ),
    'card-readme': defineAsyncComponent(() =>
      import('./components/card/README.md'),
    ),
    'circular-progress-readme': defineAsyncComponent(() =>
      import('./components/circular-progress/README.md'),
    ),
    'chips-readme': defineAsyncComponent(() =>
      import('./components/chips/README.md'),
    ),
    'checkbox-readme': defineAsyncComponent(() =>
      import('./components/checkbox/README.md'),
    ),
    'data-table-readme': defineAsyncComponent(() =>
      import('./components/data-table/README.md'),
    ),
    'dialog-readme': defineAsyncComponent(() =>
      import('./components/dialog/README.md'),
    ),
    'drawer-readme': defineAsyncComponent(() =>
      import('./components/drawer/README.md'),
    ),
    'fab-readme': defineAsyncComponent(() =>
      import('./components/fab/README.md'),
    ),
    'icon-button-readme': defineAsyncComponent(() =>
      import('./components/icon-button/README.md'),
    ),
    'layout-grid-readme': defineAsyncComponent(() =>
      import('./components/layout-grid/README.md'),
    ),
    'linear-progress-readme': defineAsyncComponent(() =>
      import('./components/linear-progress/README.md'),
    ),
    'list-readme': defineAsyncComponent(() =>
      import('./components/list/README.md'),
    ),
    'material-icon-readme': defineAsyncComponent(() =>
      import('./components/material-icon/README.md'),
    ),
    'menu-readme': defineAsyncComponent(() =>
      import('./components/menu/README.md'),
    ),
    'radio-readme': defineAsyncComponent(() =>
      import('./components/radio/README.md'),
    ),
    'select-readme': defineAsyncComponent(() =>
      import('./components/select/README.md'),
    ),
    'slider-readme': defineAsyncComponent(() =>
      import('./components/slider/README.md'),
    ),
    'snackbar-readme': defineAsyncComponent(() =>
      import('./components/snackbar/README.md'),
    ),
    'switch-readme': defineAsyncComponent(() =>
      import('./components/switch/README.md'),
    ),
    'tabs-readme': defineAsyncComponent(() =>
      import('./components/tabs/README.md'),
    ),
    'textfield-readme': defineAsyncComponent(() =>
      import('./components/textfield/README.md'),
    ),
    'top-app-bar-readme': defineAsyncComponent(() =>
      import('./components/top-app-bar/README.md'),
    ),

    'button-demo': defineAsyncComponent(() =>
      import('./components/button/demo.vue'),
    ),
    'card-demo': defineAsyncComponent(() =>
      import('./components/card/demo.vue'),
    ),
    'circular-progress-demo': defineAsyncComponent(() =>
      import('./components/circular-progress/demo.vue'),
    ),
    'checkbox-demo': defineAsyncComponent(() =>
      import('./components/checkbox/demo.vue'),
    ),
    'data-table-demo': defineAsyncComponent(() =>
      import('./components/data-table/demo.vue'),
    ),
    'chips-demo': defineAsyncComponent(() =>
      import('./components/chips/demo.vue'),
    ),
    'dialog-demo': defineAsyncComponent(() =>
      import('./components/dialog/demo.vue'),
    ),
    'drawer-demo': defineAsyncComponent(() =>
      import('./components/drawer/demo.vue'),
    ),
    'fab-demo': defineAsyncComponent(() => import('./components/fab/demo.vue')),
    'icon-button-demo': defineAsyncComponent(() =>
      import('./components/icon-button/demo.vue'),
    ),
    'layout-grid-demo': defineAsyncComponent(() =>
      import('./components/layout-grid/demo.vue'),
    ),
    'linear-progress-demo': defineAsyncComponent(() =>
      import('./components/linear-progress/demo.vue'),
    ),
    'list-demo': defineAsyncComponent(() =>
      import('./components/list/demo.vue'),
    ),
    'material-icon-demo': defineAsyncComponent(() =>
      import('./components/material-icon/demo.vue'),
    ),
    'menu-demo': defineAsyncComponent(() =>
      import('./components/menu/demo.vue'),
    ),
    'radio-demo': defineAsyncComponent(() =>
      import('./components/radio/demo.vue'),
    ),
    'select-demo': defineAsyncComponent(() =>
      import('./components/select/demo.vue'),
    ),
    'slider-demo': defineAsyncComponent(() =>
      import('./components/slider/demo.vue'),
    ),
    'snackbar-demo': defineAsyncComponent(() =>
      import('./components/snackbar/demo.vue'),
    ),
    'switch-demo': defineAsyncComponent(() =>
      import('./components/switch/demo.vue'),
    ),
    'tabs-demo': defineAsyncComponent(() =>
      import('./components/tabs/demo.vue'),
    ),
    'textfield-demo': defineAsyncComponent(() =>
      import('./components/textfield/demo.vue'),
    ),
    'top-app-bar-demo': defineAsyncComponent(() =>
      import('./components/top-app-bar/demo.vue'),
    ),
  },
  beforeRouteUpdate(to, from, next) {
    this.$nextTick(() => scrollTo(0, 0));
    next();
  },
  computed: {
    demo() {
      const key = this.$route.params.id + '-demo';
      // console.dir(key);
      // const ret = key in this.$options.components ? key : undefined;
      return key;
    },
    readme() {
      const key = this.$route.params.id + '-readme';
      return key in this.$options.components ? key : undefined;
    },
    title() {
      return titles[this.$route.params.id];
    },
    icon() {
      return icons[this.$route.params.id];
    },
  },
};
</script>
