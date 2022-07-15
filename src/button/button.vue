<script src="./button.js"></script>
<template>
  <custom-link ref="root" :class="classes" :style="styles" tag="button">
    <div class="mdc-button__ripple"></div>

    <span class="mdc-button__touch" v-if="isTouch"></span>
    <span class="mdc-button__focus-ring"></span>
    <slot name="icon" v-if="haveIcon">
      <i class="material-icons mdc-button__icon" aria-hidden="true">{{
        icon
      }}</i>
    </slot>
    <span class="mdc-button__label">
      <slot></slot>
    </span>
    <slot name="trailingIcon" v-if="haveTrailingIcon"
      ><i class="material-icons mdc-button__icon" aria-hidden="true">{{
        trailingIcon
      }}</i></slot
    >
  </custom-link>
</template>
