<script src="./chip-action.js"></script>
<template>
  <button
    ref="root"
    class="mdc-evolution-chip__action"
    :class="classes"
    :style="styles"
    type="button"
    tabindex="0"
  >
    <span
      ref="rippleEl"
      class="mdc-evolution-chip__ripple"
      :class="rippleClass"
    ></span>

    <span class="mdc-evolution-chip__text-label" v-if="primary"
      ><slot></slot
    ></span>
    <span
      class="
        mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing
        material-icons
      "
      v-else
      ><slot></slot
    ></span>
  </button>
</template>
