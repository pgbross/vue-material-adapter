<template>
  <div class="mcw-demo mcw-demo--container">
    <mcw-menu-anchor class="myAnchor">
      <mcw-button raised @click="open = true">Open Menu</mcw-button>
      <mcw-menu v-model="open" @select="onSelect">
        <mcw-list-item>A Menu Item</mcw-list-item>
        <mcw-list-item>Another Menu Item</mcw-list-item>
        <mcw-list-item>Next Menu Item</mcw-list-item>
        <mcw-list-divider></mcw-list-divider>
        <mcw-list-item>Parted Menu Item</mcw-list-item>
      </mcw-menu>
    </mcw-menu-anchor>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },

  methods: {
    onSelect(data) {
      console.dir(data);
    },
  },
};
</script>
