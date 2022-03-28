<script src="./banner.js"></script>
<template>
  <div
    ref="root"
    class="mdc-banner"
    :class="classes"
    role="banner"
    :style="styles"
  >
    <banner-content :fixed="fixed">
      <div
        class="mdc-banner__content"
        role="alertdialog"
        aria-live="assertive"
        ref="contentEl"
      >
        <div class="mdc-banner__graphic-text-wrapper">
          <div class="mdc-banner__graphic" role="img" alt="" v-if="haveIcon">
            <i class="material-icons mdc-banner__icon">{{ icon }}</i>
          </div>
          <div class="mdc-banner__text">{{ text }}</div>
        </div>
        <div class="mdc-banner__actions">
          <button
            v-if="secondaryAction"
            type="button"
            class="mdc-button mdc-banner__secondary-action"
            @click.stop="onContentClick(1)"
          >
            <div class="mdc-button__ripple"></div>
            <div class="mdc-button__label">{{ secondaryAction }}</div>
          </button>

          <button
            type="button"
            class="mdc-button mdc-banner__primary-action"
            ref="primaryActionEl"
            @click.stop="onContentClick(0)"
          >
            <div class="mdc-button__ripple"></div>
            <div class="mdc-button__label">{{ primaryAction }}</div>
          </button>
        </div>
      </div>
    </banner-content>
  </div>
</template>
