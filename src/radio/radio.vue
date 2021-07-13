<script src="./radio.js"></script>
<template>
  <div :class="formFieldClasses" class="mdc-radio-wrapper" v-if="label">
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
    <label ref="labelEl" :for="radioId">
      <slot>{{ label }}</slot>
    </label>
  </div>
  <div ref="root" :class="rootClasses" :style="styles" v-else>
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
</template>
