<template>
  <iframe
    :src="iframe"
    class="mcw-demo mcw-elevation--z1"
    scrolling="no"
    title="vue-material-adapter App Layout"
    width="400"
    height="250"
    frameborder="no"
    allowtransparency="false"
    allowfullscreen="false"
  />
</template>

<script>
import iframe from 'file-loader!./demo.html';
export default {
  data() {
    return {
      iframe,
    };
  },
};
</script>
