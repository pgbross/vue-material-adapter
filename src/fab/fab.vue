<script src="./fab.js"></script>
<template>
  <custom-link ref="root" :class="classes" :style="styles" tag="button">
    <div class="mdc-fab__ripple"></div>
    <slot name="icon"
      ><span class="mdc-fab__icon material-icons">{{ icon }}</span></slot
    >
    <span class="mdc-fab__label"
      ><slot>{{ label }}</slot></span
    >
  </custom-link>
</template>
