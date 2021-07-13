<script src="./checkbox.js"></script>
<template>
  <div :class="formFieldClasses" class="mdc-checkbox-wrapper" v-if="hasLabel">
    <div ref="root" :class="rootClasses" :style="styles">
      <input
        :id="checkboxId"
        ref="control"
        :name="name"
        :value="value"
        type="checkbox"
        class="mdc-checkbox__native-control"
        @change="onChange"
      />
      <div class="mdc-checkbox__background">
        <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
          <path
            class="mdc-checkbox__checkmark-path"
            fill="none"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"
          ></path>
        </svg>
        <div class="mdc-checkbox__mixedmark" />
      </div>
      <div class="mdc-checkbox__ripple"></div>
    </div>
    <label ref="labelEl" :for="checkboxId">
      <slot>{{ label }}</slot>
    </label>
  </div>

  <div ref="root" :class="rootClasses" :style="styles" v-else>
    <input
      :id="checkboxId"
      ref="control"
      :name="name"
      :value="value"
      type="checkbox"
      class="mdc-checkbox__native-control"
      @change="onChange"
    />
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
        <path
          class="mdc-checkbox__checkmark-path"
          fill="none"
          d="M1.73,12.91 8.1,19.28 22.79,4.59"
        ></path>
      </svg>
      <div class="mdc-checkbox__mixedmark" />
    </div>
    <div class="mdc-checkbox__ripple"></div>
  </div>
</template>
