<script src="./snackbar-queue.js"></script>
<template>
  <mcw-snackbar
    :modelValue="open"
    v-bind="snack"
    v-on="listeners"
  ></mcw-snackbar>
</template>
