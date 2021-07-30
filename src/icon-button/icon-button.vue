<script src="./icon-button.js"></script>
<template>
  <div class="mdc-touch-target-wrapper" v-if="isTouch">
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
      <div class="mdc-icon-button__touch"></div>
    </component>
  </div>
  <component
    :is="tag"
    :class="classes"
    :style="styles"
    ref="root"
    @click="onClick"
    aria-pressed="false"
    :disabled="disabled"
    v-else
  >
    <div class="mdc-icon-button__ripple" ref="rippleEl"></div>
    <slot></slot>
  </component>
</template>
