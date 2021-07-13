<script src="./chip-set.js"></script>
<template>
  <div ref="root" :class="classes" role="grid" v-on="myListeners">
    <slot></slot>
  </div>
</template>
