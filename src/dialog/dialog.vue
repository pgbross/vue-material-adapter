<script src="./dialog.js"></script>
<template>
  <div
    ref="root"
    :class="classes"
    :style="styles"
    @click="onClick"
    @keydown="onKeydown"
  >
    <div ref="container" class="mdc-dialog__container">
      <div
        ref="surface"
        class="mdc-dialog__surface"
        role="alertdialog"
        aria-modal="true"
        :aria-labelledby="ariaLabelledby"
        :aria-describedby="ariaDescribedby"
      >
        <slot></slot>
      </div>
    </div>
    <div class="mdc-dialog__scrim" />
  </div>
</template>
