<template>
  <i :class="classes" v-on="$listeners" :style="styles"> {{ icon }} </i>
</template>

<script>
import { RippleBase } from '@mcwv/ripple';

export default {
  name: 'mdc-material-icon',
  // model: {
  //   prop: 'isOn',
  //   event: 'change'
  // },
  props: {
    hasRipple: Boolean,

    icon: String,
  },
  data() {
    return {
      classes: {
        'material-icons': true,
        'material-icons--ripple-surface': this.hasRipple,
      },
      styles: {},
    };
  },

  mounted() {
    if (this.hasRipple) {
      this.ripple = new RippleBase(this, {
        isUnbounded: () => true,
      });
      this.ripple.init();
    }
  },

  beforeDestroy() {
    if (this.ripple) {
      this.ripple.destroy();
    }
  },
  methods: {},

  computed: {},
};
</script>
