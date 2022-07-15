<script src="./snackbar.js"></script>
<template>
  <aside class="mdc-snackbar" :class="rootClasses">
    <div
      class="mdc-snackbar__surface"
      role="status"
      aria-relevant="additions"
      @click="surfaceClickHandler"
    >
      <div ref="labelEl" class="mdc-snackbar__label" aria-atomic="false">
        <template v-if="showMessage">{{ message }}</template>
        <span style="display: inline-block; width: 0; height: '1px'" v-else
          >&nbsp;</span
        >
      </div>
      <div class="mdc-snackbar__actions" aria-atomic="true">
        <button
          type="button"
          class="mdc-button mdc-snackbar__action"
          v-if="actionText"
        >
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">{{ actionText }}</span>
        </button>

        <button
          type="button"
          class="mdc-icon-button mdc-snackbar__dismiss material-icons"
          title="Dismiss"
          v-if="showDismissAction"
        >
          close
        </button>
      </div>
    </div>
  </aside>
</template>
