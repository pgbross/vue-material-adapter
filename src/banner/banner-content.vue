<template>
  <div class="mdc-banner__content" role="status" aria-live="assertive">
    <div class="mdc-banner__graphic-text-wrapper">
      <div class="mdc-banner__graphic" role="img" alt="">
        <i class="material-icons mdc-banner__icon">error_outline</i>
      </div>
      <div class="mdc-banner__text">{{ text }}</div>
    </div>
    <div class="mdc-banner__actions">
      <button
        v-if="secondaryAction"
        type="button"
        class="mdc-button mdc-banner__secondary-action"
        @click.stop="onSecondary"
      >
        <div class="mdc-button__ripple"></div>
        <div class="mdc-button__label">{{ secondaryAction }}</div>
      </button>

      <button
        type="button"
        class="mdc-button mdc-banner__primary-action"
        @click.stop="onPrimary"
      >
        <div class="mdc-button__ripple"></div>
        <div class="mdc-button__label">{{ primaryAction }}</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    primaryAction: String,
    secondaryAction: String,
    icon: String,
  },
  setup(props, { emit }) {
    const onPrimary = () => emit('click', { target: 0 });
    const onSecondary = () => emit('click', { target: 1 });
    return { onPrimary, onSecondary };
  },
};
</script>
