<script src="./segmented-button.js"></script>
<template>
  <div
    ref="root"
    class="mdc-segmented-button"
    :class="classes"
    :role="role"
    @selected="onSelected"
  >
    <slot></slot>
  </div>
</template>
