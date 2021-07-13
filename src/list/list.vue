<script src="./list.js"></script>
<template>
  <component
    :is="tag"
    ref="listRoot"
    :class="classes"
    v-on="rootListeners"
    v-bind="rootAttrs"
    ><slot></slot
  ></component>
</template>
