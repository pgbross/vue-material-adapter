<script src="./trailing-action.js"></script>
<template>
  <button
    ref="root"
    :class="classes"
    :style="styles"
    class="mdc-chip-trailing-action"
    aria-label="Remove chip"
    tabindex="-1"
    @click="onClick"
    @keydown="onKeydown"
  >
    <span class="mdc-chip-trailing-action__ripple"></span>
    <span class="mdc-chip-trailing-action__icon material-icons"
      ><slot></slot
    ></span>
  </button>
</template>
