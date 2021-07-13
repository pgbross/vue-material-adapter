<script src="./slider.js"></script>
<template>
  <div ref="root" :class="classes">
    <input
      :ref="setInputRef"
      v-if="range"
      class="mdc-slider__input"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :value="start"
      name="volume"
      aria-label="slider"
    />
    <input
      :ref="setInputRef"
      class="mdc-slider__input"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :value="modelValue"
      name="volume"
      aria-label="slider"
    />
    <div class="mdc-slider__track">
      <div class="mdc-slider__track--inactive"></div>
      <div class="mdc-slider__track--active">
        <div
          ref="trackActive"
          :dir="dir"
          class="mdc-slider__track--active_fill"
        ></div>
      </div>

      <div class="mdc-slider__tick-marks" v-if="tickMarks">
        <div v-for="mark in marks" :class="mark"></div>
      </div>
    </div>
    <div
      :ref="setThumbRef"
      :class="startThumbClasses"
      class="mdc-slider__thumb"
      tabindex="0"
      role="slider"
      aria-label="slider"
      v-bind="startThumbAttrs"
      v-if="range"
    >
      <div
        class="mdc-slider__value-indicator-container"
        aria-hidden="true"
        v-if="discrete"
      >
        <div class="mdc-slider__value-indicator">
          <span class="mdc-slider__value-indicator-text">
            {{ startValueText }}
          </span>
        </div>
      </div>

      <div class="mdc-slider__thumb-knob"></div>
    </div>

    <div
      :ref="setThumbRef"
      :class="endThumbClasses"
      class="mdc-slider__thumb"
      tabindex="0"
      role="slider"
      aria-label="slider"
      v-bind="endThumbAttrs"
    >
      <div
        class="mdc-slider__value-indicator-container"
        aria-hidden="true"
        v-if="discrete"
      >
        <div class="mdc-slider__value-indicator">
          <span class="mdc-slider__value-indicator-text">
            {{ endValueText }}
          </span>
        </div>
      </div>

      <div class="mdc-slider__thumb-knob"></div>
    </div>
  </div>
</template>
