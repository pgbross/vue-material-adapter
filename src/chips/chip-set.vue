<script src="./chip-set.js"></script>
<template>
  <span
    ref="root"
    class="mdc-evolution-chip-set"
    :class="classes"
    :role="role"
    @mdcchip:animation="handleChipAnimation"
    @mdcchip:interaction="handleChipInteraction"
    @mdcchip:navigation="handleChipNavigation"
    v-bind="attrs"
  >
    <span class="mdc-evolution-chip-set__chips" role="presentation">
      <slot></slot>
    </span>
  </span>
</template>
