<template>
  <div class="demo-home">
    <mcw-headline4 ref="title">{{ title }}</mcw-headline4>
    <about class="markdown"/>
  </div>
</template>

<script>
export default {
  components: {
    about: () => import('../docs/about.md'),
  },
  data() {
    return {
      title: 'Material Web Components for Vue.js',
    };
  },
};
</script>
