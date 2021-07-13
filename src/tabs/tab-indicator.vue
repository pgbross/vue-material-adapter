<script src="./tab-indicator.js"></script>
<template>
  <span class="mdc-tab-indicator" :class="classes">
    <span
      ref="contentEl"
      class="mdc-tab-indicator__content"
      :class="contentClasses"
      :style="styles"
      v-bind="contentAttrs"
      >{{ icon }}</span
    >
  </span>
</template>
