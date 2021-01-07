<template>
  <section>
    <div v-if="title" ref="title" class="mdc-typography--headline4">
      {{ title }}
    </div>
    <article class="doc-article markdown">
      <component :is="$route.params.id" />
    </article>
  </section>
</template>

<script>
import { defineAsyncComponent, nextTick } from 'vue';
import { capitalize } from './utils';

export default {
  components: {
    'getting-started': defineAsyncComponent(() =>
      import('../docs/getting-started.md'),
    ),
    theming: defineAsyncComponent(() => import('../docs/theming.md')),
  },
  beforeRouteUpdate(to, from, next) {
    nextTick(() => scrollTo(0, 0));
    next();
  },
  computed: {
    title() {
      return capitalize(this.$route.params.id);
    },
  },
};
</script>
