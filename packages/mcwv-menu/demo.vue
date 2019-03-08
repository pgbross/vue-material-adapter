<template>
  <div class="mdc-demo mdc-demo--container">
    <mdc-menu-anchor class="myAnchor">
      <mdc-button raised @click="open = true">Open Menu</mdc-button>
      <mdc-menu v-model="open" @select="onSelect">
        <mdc-list-item>A Menu Item</mdc-list-item>
        <mdc-list-item>Another Menu Item</mdc-list-item>
        <mdc-list-item disabled>Disabled Menu Item</mdc-list-item>
        <mdc-menu-divider>Another Menu Item</mdc-menu-divider>
        <mdc-list-item>Parted Menu Item</mdc-list-item>
      </mdc-menu>
    </mdc-menu-anchor>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },

  methods: {
    onSelect(data) {
      console.dir(data)
    }
  }
}
</script>
