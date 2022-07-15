<script src="./radio.js"></script>
<template>
  <form-field-wrapper
    class="mdc-radio-wrapper"
    :activate="activate"
    :deactivate="deactivate"
    :alignEnd="alignEnd"
    :forId="radioId"
  >
    <div ref="root" :class="rootClasses" :style="styles">
      <input
        ref="controlEl"
        :id="radioId"
        :name="name"
        type="radio"
        class="mdc-radio__native-control"
        @change="onChange"
        v-bind="$attrs"
        :value="value"
        :checked="modelValue == value"
        :disabled="disabled"
      />

      <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle" />
        <div class="mdc-radio__inner-circle" />
      </div>
      <div class="mdc-radio__ripple"></div>
    </div>
    <template #label v-if="label">
      <slot>{{ label }}</slot>
    </template>
  </form-field-wrapper>
</template>
