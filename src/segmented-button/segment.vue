<script src="./segment.js"></script>
<template>
  <touch-wrapper :isTouch="isTouch">
    <button
      ref="root"
      class="mdc-segmented-button__segment"
      v-bind="myAttrs"
      @click="onClick"
    >
      <div class="mdc-segmented-button__ripple" v-if="ripple"></div>
      <i class="material-icons mdc-segmented-button__icon" v-if="icon">{{
        icon
      }}</i>

      <div class="mdc-segmented-button__touch" v-if="isTouch"></div>
      <div class="mdc-segmented-button__label" v-if="label">{{ label }}</div>
    </button></touch-wrapper
  >
</template>
