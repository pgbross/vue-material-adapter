<script src="./linear-progress.js"></script>
<template>
  <div
    ref="root"
    :class="classes"
    :style="rootStyles"
    role="progressbar"
    v-bind="rootAttrs"
    @transitionend="onTransitionEnd"
  >
    <div class="mdc-linear-progress__buffer">
      <div
        class="mdc-linear-progress__buffer-bar"
        :style="bufferbarStyles"
      ></div>
      <div class="mdc-linear-progress__buffer-dots"></div>
    </div>
    <div
      class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
      :style="primaryStyles"
    >
      <span class="mdc-linear-progress__bar-inner"></span>
    </div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
      <span class="mdc-linear-progress__bar-inner"></span>
    </div>
  </div>
</template>
