<script src="./fab.js"></script>
<template>
  <touch-wrapper :isTouch="isTouch">
    <custom-link
      ref="root"
      :class="classes"
      :style="styles"
      tag="button"
      v-bind="$attrs"
    >
      <div class="mdc-fab__ripple"></div>
      <div class="mdc-fab__focus-ring"></div>
      <slot name="icon"
        ><span class="mdc-fab__icon material-icons">{{ icon }}</span></slot
      >
      <span class="mdc-fab__label"
        ><slot>{{ label }}</slot></span
      >
    </custom-link>
  </touch-wrapper>
</template>
