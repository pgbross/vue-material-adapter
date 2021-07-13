<script src="./icon-button.js"></script>
<template>
  <component
    :is="tag"
    :class="classes"
    :style="styles"
    ref="root"
    @click="onClick"
    aria-pressed="false"
    :disabled="disabled"
    ><slot></slot
  ></component>
</template>
