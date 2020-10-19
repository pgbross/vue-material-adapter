<template>
  <div class="demo-home">
    <div ref="title" class="mdc-typography--headline4">{{ title }}</div>
    <!-- <about class="markdown" /> -->
  </div>
</template>

<script>
export default {
  components: {
    // about: () => import('../docs/about.md'),
  },
  data() {
    return {
      title: 'Material Web Components for Vue.js',
    };
  },
};
</script>
