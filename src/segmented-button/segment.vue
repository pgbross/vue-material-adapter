<script src="./segment.js"></script>
<template>
  <div class="mdc-touch-target-wrapper" v-if="isTouch">
    <button
      ref="root"
      class="mdc-segmented-button__segment mdc-segmented-button--touch"
      v-bind="myAttrs"
      @click="onClick"
    >
      <div class="mdc-segmented-button__ripple" v-if="ripple"></div>
      <i class="material-icons mdc-segmented-button__icon" v-if="icon">{{
        icon
      }}</i>
      <div class="mdc-segmented-button__label" v-if="label">{{ label }}</div>
      <div class="mdc-segmented-button__touch"></div>
    </button>
  </div>
  <button
    ref="root"
    class="mdc-segmented-button__segment"
    v-bind="myAttrs"
    @click="onClick"
    v-else
  >
    <div class="mdc-segmented-button__ripple" v-if="ripple"></div>
    <i class="material-icons mdc-segmented-button__icon" v-if="icon">{{
      icon
    }}</i>
    <div class="mdc-segmented-button__label" v-if="label">{{ label }}</div>
  </button>
</template>
