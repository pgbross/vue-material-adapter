<script src="./data-table.js"></script>
<template>
  <div ref="root" :class="classes" class="mdc-data-table">
    <div class="mdc-data-table__table-container">
      <slot></slot>
    </div>
  </div>
</template>
