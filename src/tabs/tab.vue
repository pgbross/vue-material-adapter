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
      <slot name="icon" v-if="hasIcon">
        <i
          ref="iconEl"
          class="mdc-tab__icon"
          :class="hasIcon.classes"
          tabindex="0"
          aria-hidden="true"
          >{{ hasIcon.content }}</i
        >
      </slot>

      <span v-if="hasText" class="mdc-tab__text-label"><slot></slot></span>
      <mcw-tab-indicator
        ref="tabIndicator"
        v-if="spanContent"
        :fade="fade"
      ></mcw-tab-indicator>
    </span>
    <mcw-tab-indicator
      ref="tabIndicator"
      v-if="!spanContent"
      :fade="fade"
    ></mcw-tab-indicator>

    <span
      ref="rippleSurface"
      class="mdc-tab__ripple"
      :class="rippleClasses"
      :style="styles"
    ></span>
    <div class="mdc-tab__focus-ring"></div>
  </custom-link>
</template>
