<template>
  <div class="mcw-demo mcw-demo--container mcw-demo--container-menu">
    <mcw-menu-anchor class="myAnchor">
      <mcw-button raised @click="open = true">Open Menu</mcw-button>
      <mcw-menu v-model="open" @select="onSelect">
        <mcw-list-item>A Menu Item</mcw-list-item>
        <mcw-list-item>Another Menu Item</mcw-list-item>
        <li role="separator" class="mdc-list-divider"></li>
        <mcw-list-item>A Menu Item</mcw-list-item>
        <mcw-list-item>Parted Menu Item</mcw-list-item>
      </mcw-menu>
    </mcw-menu-anchor>

    <mcw-menu-anchor class="myAnchor">
      <mcw-button raised @click="openGroup = true">Group Menu</mcw-button>
      <mcw-menu v-model="openGroup" @select="onSelect">
        <li>
          <ul class="mdc-menu__selection-group">
            <mcw-list-item>Single</mcw-list-item>
            <mcw-list-item>1.15</mcw-list-item>
          </ul>
        </li>
        <li class="mdc-list-divider" role="separator"></li>
        <mcw-list-item>Add space before paragraph</mcw-list-item>
      </mcw-menu>
    </mcw-menu-anchor>
  </div>
</template>

<script src="./menu.js"></script>

<style>
.demo-article .mcw-layout-grid {
  width: 100%;
}
.demo-article .mcw-demo--container-menu .myAnchor + .myAnchor {
  margin-left: 3em;
}
</style>
