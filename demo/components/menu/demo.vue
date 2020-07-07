<template>
  <div class="mcw-demo mcw-demo--container mcw-demo--container-menu">
    <mcw-menu-anchor class="myAnchor">
      <mcw-button raised @click="open = true">Open Menu</mcw-button>
      <mcw-menu v-model="open" @select="onSelect">
        <li class="mdc-list-item" role="menuitem">
          <span class="mdc-list-item__text">A Menu Item</span>
        </li>
        <li class="mdc-list-item" role="menuitem">
          <span class="mdc-list-item__text">Another Menu Item</span>
        </li>
        <li role="separator" class="mdc-list-divider"></li>
        <li class="mdc-list-item" role="menuitem">
          <span class="mdc-list-item__text">A Menu Item</span>
        </li>
        <li class="mdc-list-item" role="menuitem">
          <span class="mdc-list-item__text">Parted Menu Item</span>
        </li>
      </mcw-menu>
    </mcw-menu-anchor>

    <mcw-menu-anchor class="myAnchor">
      <mcw-button raised @click="openGroup = true">Group Menu</mcw-button>
      <mcw-menu v-model="openGroup" @select="onSelect">
        <li>
          <ul class="mdc-menu__selection-group">
            <li class="mdc-list-item" role="menuitem">
              <span
                class="mdc-list-item__graphic mdc-menu__selection-group-icon"
              >
                <i class="material-icons">check</i>
              </span>
              <span class="mdc-list-item__text">Single</span>
            </li>
            <li class="mdc-list-item" role="menuitem">
              <span
                class="mdc-list-item__graphic mdc-menu__selection-group-icon"
              >
                <i class="material-icons">check</i>
              </span>
              <span class="mdc-list-item__text">1.15</span>
            </li>
          </ul>
        </li>
        <li class="mdc-list-divider" role="separator"></li>
        <li class="mdc-list-item" role="menuitem">
          <span class="mdc-list-item__text">Add space before paragraph</span>
        </li>
      </mcw-menu>
    </mcw-menu-anchor>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      openGroup: false,
    };
  },

  methods: {
    onSelect(data) {
      console.dir(data);
    },
  },
};
</script>

<style>
.demo-article .mcw-layout-grid {
  width: 100%;
}
.demo-article .mcw-demo--container-menu .mdc-menu-anchor + .mdc-menu-anchor {
  margin-left: 3em;
}
</style>
