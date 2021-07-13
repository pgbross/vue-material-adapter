<script src="./tab-scroller.js"></script>
<template>
  <div :class="classes">
    <div
      ref="area"
      :class="areaClasses"
      :style="areaStyles"
      v-on="areaListeners"
    >
      <div
        ref="content"
        class="mdc-tab-scroller__scroll-content"
        :style="contentStyles"
        @transitionend="onTransitionEnd"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
