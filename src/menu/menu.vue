<script src="./menu.js"></script>
<template>
  <mcw-menu-surface
    ref="menuSurface"
    class="mdc-menu"
    :quick-open="quickOpen"
    :modelValue="menuOpen"
    @keydown="handleKeydown"
    @update:modelValue="onChange"
    @mdcmenusurface:opened="handleMenuSurfaceOpened"
    @mdcmenusurface:closed="handleMenuSurfaceClosed"
  >
    <mcw-list
      ref="list"
      role="menu"
      aria-hidden="true"
      :wrap-focus="myWrapFocus"
      @update:modelValue="handleAction"
      tabindex="-1"
      :type-ahead="typeAhead"
      :multi-selectable="!singleSelection"
      ><slot></slot
    ></mcw-list>
  </mcw-menu-surface>
</template>
