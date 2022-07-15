<script src="./chip-action.js"></script>
<template>
  <template v-if="primary">
    <span
      ref="root"
      class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
      role="option"
      aria-selected="false"
      tabindex="0"
      v-if="isFilter"
      @click="handleClick"
      @keydown="handleKeydown"
    >
      <span
        ref="rippleEl"
        class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
      ></span>
      <span class="mdc-evolution-chip__graphic">
        <span
          class="
            mdc-evolution-chip__icon mdc-evolution-chip__icon--primary
            material-icons
          "
          v-if="icon"
        >
          {{ icon }}</span
        >
        <!-- optional -->
        <span class="mdc-evolution-chip__checkmark">
          <svg class="mdc-evolution-chip__checkmark-svg" viewBox="-2 -3 30 30">
            <path
              class="mdc-evolution-chip__checkmark-path"
              fill="none"
              stroke="black"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
        </span>
      </span>
      <span class="mdc-evolution-chip__text-label">Chip label</span>
    </span>

    <button
      ref="root"
      class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
      :class="classes"
      :style="styles"
      type="button"
      tabindex="0"
      v-else
    >
      <span
        ref="rippleEl"
        class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
      ></span>

      <span class="mdc-evolution-chip__graphic" v-if="icon">
        <span
          class="
            mdc-evolution-chip__icon mdc-evolution-chip__icon--primary
            material-icons
          "
          >{{ icon }}</span
        >
      </span>

      <span class="mdc-evolution-chip__text-label"><slot></slot></span>
    </button>
  </template>

  <template v-else>
    <button
      ref="root"
      class="mdc-evolution-chip__action mdc-evolution-chip__action--trailing"
      type="button"
      tabindex="-1"
      data-mdc-deletable="true"
      @click="handleClick"
      @keydown="handleKeydown"
    >
      <span
        ref="rippleEl"
        class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--trailing"
      ></span>
      <span
        class="
          mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing
          material-icons
        "
        ><slot></slot
      ></span>
    </button>
  </template>
</template>
