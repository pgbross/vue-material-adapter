<script src="./tooltip.js"></script>
<template>
  <div
    ref="root"
    class="mdc-tooltip"
    :class="classes"
    v-bind="rootAttrs"
    :style="styles"
    role="tooltip"
    @transitionend="handleTransitionEnd"
  >
    <div
      :style="surfaceStyle"
      class="mdc-tooltip__surface mdc-tooltip__surface-animation"
    >
      <slot></slot>
    </div>
  </div>
</template>
