<script src="./tab-bar.js"></script>
<template>
  <div ref="root" role="tablist" v-on="listeners" class="mdc-tab-bar">
    <mcw-tab-scroller ref="scroller"><slot></slot></mcw-tab-scroller>
  </div>
</template>
