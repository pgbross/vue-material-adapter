<template>
  <span class="mdc-tab__ripple" :class="classes" :style="styles"></span>
</template>

<script>
import { RippleBase } from '@mcwv/ripple';

export default {
  name: 'mdc-tab-ripple',

  data() {
    return { classes: {}, styles: {} };
  },
  mounted() {
    this.ripple = new RippleBase(this);
    this.ripple.init();
  },

  beforeDestroy() {
    this.ripple.destroy();
  },
};
</script>
