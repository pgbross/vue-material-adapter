<script src="./list.js"></script>
<template>
  <ul
    ref="listRoot"
    class="mdc-list"
    :class="classes"
    v-bind="rootAttrs"
    @click="handleClickEvent"
    @keydown="handleKeydown"
    @focusin="handleFocusInEvent"
    @focusout="handleFocusOutEvent"
  >
    <slot></slot>
  </ul>
</template>
