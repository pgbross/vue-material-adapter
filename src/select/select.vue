<script src="./select.js"></script>
<template>
  <div class="select-wrapper">
    <div ref="root" v-bind="$attrs" :class="rootClasses">
      <div
        ref="anchorEl"
        class="mdc-select__anchor"
        :class="rippleClasses"
        :style="rippleStyles"
        @click="handleClick"
        @keydown="handleKeydown"
        @focus="handleFocus"
        @blur="handleBlur"
        v-bind="selectAnchorAttrs"
        role="button"
        aria-haspopup="listbox"
        :aria-required="required"
      >
        <select-icon
          ref="leadingIconEl"
          v-if="leadingIcon"
          :icon="leadingIcon"
          tabindex="0"
          role="button"
        ></select-icon>
        <span class="mdc-select__ripple" v-if="!outlined"></span>
        <span class="mdc-select__selected-text-container">
          <span class="mdc-select__selected-text">{{
            selectedTextContent
          }}</span>
        </span>
        <span class="mdc-select__dropdown-icon">
          <svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5">
            <polygon
              class="mdc-select__dropdown-icon-inactive"
              stroke="none"
              fill-rule="evenodd"
              points="7 10 12 15 17 10"
            ></polygon>
            <polygon
              class="mdc-select__dropdown-icon-active"
              stroke="none"
              fill-rule="evenodd"
              points="7 15 12 10 17 15"
            ></polygon>
          </svg>
        </span>

        <template v-if="outlined">
          <mcw-notched-outline ref="outlineEl">{{ label }}</mcw-notched-outline>
        </template>
        <template v-else>
          <mcw-floating-label ref="labelEl">{{ label }}</mcw-floating-label>
          <mcw-line-ripple ref="lineRippleEl"></mcw-line-ripple>
        </template>
      </div>
      <mcw-menu
        ref="menu"
        class="mdc-select__menu"
        :class="menuClasses"
        @update:modelValue="handleChange"
        @select="handleMenuItemAction"
        @mdc-menu-surface:opened="handleMenuOpened"
        @mdc-menu-surface:closed="handleMenuClosed"
        role="listbox"
        type-ahead
      >
        <slot></slot>
      </mcw-menu>
    </div>
    <select-helper-text
      ref="helperTextEl"
      v-if="helptext"
      :id="helpId"
      :helptextPersistent="helptextPersistent"
      :helptextValidation="helptextValidation"
      :helptext="helptext"
    ></select-helper-text>
  </div>
</template>
