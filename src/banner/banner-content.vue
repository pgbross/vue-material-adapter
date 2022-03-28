<template>
  <div class="mdc-banner__fixed" v-if="fixed">
    <slot v-bind="$attrs"></slot>
  </div>
  <slot v-bind="$attrs" v-else></slot>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    fixed: Boolean,
  },
  setup() {
    return {};
  },
};
</script>
