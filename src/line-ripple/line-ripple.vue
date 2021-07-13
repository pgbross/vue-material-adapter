<script src="./line-ripple.js"></script>
<template>
  <span
    :class="lineClasses"
    :style="lineStyles"
    @transitionend="onTransitionEnd"
  >
  </span>
</template>
