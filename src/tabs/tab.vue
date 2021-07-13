<script src="./tab.js"></script>
<template>
  <custom-link
    :id="tabId"
    ref="root"
    v-bind="rootAttrs"
    :class="classes"
    :style="styles"
    @click="onClick"
  >
    <span ref="content" class="mdc-tab__content">
      <i
        ref="iconEl"
        v-if="hasIcon"
        class="mdc-tab__icon"
        :class="hasIcon.classes"
        tabindex="0"
        aria-hidden="true"
        slot="icon"
        >{{ hasIcon.content }}</i
      >
      <span v-if="hasText" class="mdc-tab__text-label"><slot></slot></span>
      <mcw-tab-indicator
        ref="tabIndicator"
        v-if="spanContent"
        :fade="fade"
      ></mcw-tab-indicator>
      <span
        ref="rippleSurface"
        class="mdc-tab__ripple"
        :class="rippleClasses"
        :style="styles"
      ></span>
    </span>
    <mcw-tab-indicator
      ref="tabIndicator"
      v-if="!spanContent"
      :fade="fade"
    ></mcw-tab-indicator>
  </custom-link>
</template>
