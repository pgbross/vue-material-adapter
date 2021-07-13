<script src="./notched-outline.js"></script>
<template>
  <span ref="outlined" :class="outlinedClasses">
    <span class="mdc-notched-outline__leading"></span>
    <span class="mdc-notched-outline__notch" :style="notchStyles">
      <mcw-floating-label v-if="$slots.default" ref="labelEl">
        <slot></slot>
      </mcw-floating-label>
    </span>
    <span class="mdc-notched-outline__trailing"></span>
  </span>
</template>
