<script src="./switch.js"></script>
<template>
  <form-field-wrapper
    class="mdc-switch-wrapper"
    :alignEnd="alignEnd"
    :forId="switchId"
  >
    <button
      ref="root"
      :id="switchId"
      class="mdc-switch"
      :class="classes"
      :style="styles"
      v-bind="attrs"
      type="button"
      role="switch"
      @click="handleClick"
    >
      <div class="mdc-switch__track"></div>
      <div class="mdc-switch__handle-track">
        <div class="mdc-switch__handle">
          <div class="mdc-switch__shadow">
            <div class="mdc-elevation-overlay"></div>
          </div>
          <div ref="rippleEl" class="mdc-switch__ripple"></div>
          <div class="mdc-switch__icons">
            <svg
              class="mdc-switch__icon mdc-switch__icon--on"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"
              />
            </svg>
            <svg
              class="mdc-switch__icon mdc-switch__icon--off"
              viewBox="0 0 24 24"
            >
              <path d="M20 13H4v-2h16v2z" />
            </svg>
          </div>
        </div>
      </div>
    </button>

    <template #label v-if="label">
      <slot>{{ label }}</slot>
    </template>
  </form-field-wrapper>
</template>
