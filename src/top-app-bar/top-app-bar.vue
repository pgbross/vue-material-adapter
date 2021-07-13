<script src="./top-app-bar.js"></script>
<template>
  <component ref="root" :is="tag" :class="rootClasses" :style="rootStyles"
    ><slot></slot
  ></component>
</template>
