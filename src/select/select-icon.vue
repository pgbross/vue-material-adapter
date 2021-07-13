<script src="./select-icon.js"></script>
<template>
  <i
    ref="root"
    :class="classes"
    :style="styles"
    v-on="rootListeners"
    v-bind="rootAttrs"
    >{{ icon }}</i
  >
</template>
