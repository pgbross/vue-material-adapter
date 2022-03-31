<script src="./list-item.js"></script>
<template>
  <custom-link ref="root" v-bind="myAttrs" tag="a" :data-myItemId="myItemId">
    <span class="mdc-list-item__ripple" v-if="isInteractive"></span>

    <span class="mdc-list-item__start" v-if="hasGraphic">
      <slot name="graphic"></slot>
    </span>

    <span class="mdc-list-item__content" :id="id">
      <span class="mdc-list-item__primary-text"><slot></slot></span>
      <span class="mdc-list-item__secondary-text" v-if="hasSecondaryText"
        ><slot name="secondary-text"></slot
      ></span>
    </span>

    <span class="mdc-list-item__end" v-if="hasMeta">
      <slot name="meta"></slot>
    </span>
  </custom-link>
</template>
