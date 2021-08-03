<script src="./chip.js"></script>
<template>
  <span
    ref="root"
    class="mdc-evolution-chip"
    :class="classes"
    role="row"
    @mdcchipaction:interaction="handleActionInteraction"
    @mdcchipaction:navigation="handleActionNavigation"
    @animationend="handleAnimationEnd"
  >
    <span
      class="mdc-evolotion-chip__cell mdc-evolution-chip__cell--primary"
      role="gridcell"
    >
      <mcw-chip-action
        primary
        :icon="leadingIcon"
        :presentational="presentational"
        ><slot></slot
      ></mcw-chip-action>
    </span>

    <span
      class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing"
      role="gridcell"
      v-if="hasTrailingAction"
    >
      <mcw-chip-action trailing-action>{{ trailingIcon }}</mcw-chip-action>
    </span>
  </span>
</template>
