<script src="./drawer.js"></script>
<template>
  <aside
    ref="drawer"
    :class="classes"
    @keydown="handleKeydown"
    @transitionend="handleTransitionEnd"
    v-if="!modal"
  >
    <slot name="header"></slot>
    <div class="mdc-drawer__content">
      <mcw-list
        :wrap-focus="true"
        tag="nav"
        @mdclist:action="onListAction"
        :multi-selectable="false"
        :selected-index="0"
        role="menu"
      >
        <slot></slot>
      </mcw-list>
    </div>
  </aside>
  <div class="drawer-wrapper" v-else>
    <aside
      ref="drawer"
      :class="classes"
      @keydown="handleKeydown"
      @transitionend="handleTransitionEnd"
    >
      <slot name="header"></slot>
      <div class="mdc-drawer__content">
        <mcw-list
          :wrap-focus="true"
          tag="nav"
          :multi-selectable="false"
          :selected-index="0"
          role="menu"
          @mdclist:action="onListAction"
        >
          <slot></slot>
        </mcw-list>
      </div>
    </aside>
    <div class="mdc-drawer-scrim" @click="handleScrimClick" v-if="modal"></div>
  </div>
</template>
