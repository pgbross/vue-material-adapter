<script src="./icon-button.js"></script>
<template>
  <touch-wrapper :isTouch="isTouch">
    <component
      :is="tag"
      :class="classes"
      :style="styles"
      ref="root"
      @click="onClick"
      aria-pressed="false"
      :disabled="disabled"
    >
      <div class="mdc-icon-button__ripple" ref="rippleEl"></div>
      <slot></slot>
      <div class="mdc-icon-button__touch" v-if="isTouch"></div>
    </component>
  </touch-wrapper>
</template>
