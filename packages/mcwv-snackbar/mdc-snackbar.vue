<template>
  <div ref="root" :class="classes" class="mdc-snackbar">
    <div class="mdc-snackbar__surface" @click="surfaceClickHandler">
      <div
        ref="labelEl"
        class="mdc-snackbar__label"
        role="status"
        aria-live="polite"
      >
        <template v-if="showLabelText">
          {{ labelText }}
        </template>
        <span style="display: inline-block; width: 0; height: 1px;" v-else
          >&nbsp;</span
        >
      </div>
      <div class="mdc-snackbar__actions" v-if="showDismissAction || actionText">
        <button
          v-if="actionText"
          ref="actionEl"
          type="button"
          class="mdc-button mdc-snackbar__action"
          v-on="$listeners"
        >
          {{ actionText }}
        </button>

        <button
          class="mdc-icon-button mdc-snackbar__dismiss material-icons"
          title="Dismiss"
          v-if="showDismissAction"
        >
          close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MDCSnackbarFoundation from '@material/snackbar/foundation';
import { getCorrectEventName } from '@material/animation/index';
import * as ponyfill from '@material/dom/ponyfill';

export default {
  name: 'mdc-snackbar',
  model: {
    prop: 'open',
    event: 'change',
  },
  props: {
    open: Boolean,
    stacked: Boolean,
    leading: Boolean,
    labelText: String,
    actionText: String,
    timeoutMs: [String, Number],

    dismissAction: { type: [String, Boolean], default: true },
  },
  data() {
    return {
      classes: {
        'mdc-snackbar--leading': this.leading,

        'mdc-snackbar--stacked': this.stacked,
      },
      hidden: false,
      actionHidden: false,
      showLabelText: true,
    };
  },
  watch: {
    open: 'onOpen_',

    timeoutMs: 'onTimeoutMs_',
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydownEvent);

    this.foundation = new MDCSnackbarFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      announce: () => this.announce(this.$refs.labelEl),
      notifyOpening: () =>
        this.$emit(MDCSnackbarFoundation.strings.OPENING_EVENT, {}),
      notifyOpened: () => {
        this.$emit(MDCSnackbarFoundation.strings.OPENED_EVENT, {});
        this.$emit('change', true);
        this.$emit('show', {});
      },
      notifyClosing: reason =>
        this.$emit(
          MDCSnackbarFoundation.strings.CLOSING_EVENT,
          reason ? { reason } : {},
        ),
      notifyClosed: reason => {
        this.$emit(
          MDCSnackbarFoundation.strings.CLOSED_EVENT,
          reason ? { reason } : {},
        );
        this.$emit('change', false);
        this.$emit('hide');
      },
    });
    this.foundation.init();

    if (this.timeoutMs !== void 0) {
      this.foundation.setTimeoutMs(this.timeoutMs);
    }
  },
  computed: {
    showDismissAction() {
      return typeof this.dismissAction === 'string'
        ? this.dismissAction != 'false'
        : this.dismissAction;
    },
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeydownEvent);
    this.foundation.destroy();
  },
  methods: {
    onTimeoutMs_(value) {
      if (value !== void 0) {
        this.foundation.setTimeoutMs(value);
      }
    },
    onOpen_(value) {
      if (value) {
        this.foundation.open();
      } else {
        this.foundation.close();
      }
    },
    surfaceClickHandler(evt) {
      if (this.isActionButton_(evt.target)) {
        this.foundation.handleActionButtonClick(evt);
      } else if (this.isActionIcon_(evt.target)) {
        this.foundation.handleActionIconClick(evt);
      }
    },

    handleKeydownEvent(evt) {
      this.foundation.handleKeyDown(evt);
    },

    isActionButton_(target) {
      return Boolean(
        ponyfill.closest(target, MDCSnackbarFoundation.strings.ACTION_SELECTOR),
      );
    },

    isActionIcon_(target) {
      return Boolean(
        ponyfill.closest(
          target,
          MDCSnackbarFoundation.strings.DISMISS_SELECTOR,
        ),
      );
    },

    announce(ariaEl, labelEl = ariaEl) {
      const priority = ariaEl.getAttribute('aria-live');

      const text = this.labelText;
      if (!text) {
        return;
      }

      // Temporarily disable `aria-live` to prevent JAWS+Firefox from announcing the message twice.
      ariaEl.setAttribute('aria-live', 'off');

      // Temporarily clear `textContent` to force a DOM mutation event that will be detected by screen readers.
      // `aria-live` elements are only announced when the element's `textContent` *changes*, so snackbars
      // sent to the browser in the initial HTML response won't be read unless we clear the element's `textContent` first.
      // Similarly, displaying the same snackbar message twice in a row doesn't trigger a DOM mutation event,
      // so screen readers won't announce the second message unless we first clear `textContent`.
      //
      // We have to clear the label text two different ways to make it work in all browsers and screen readers:
      //
      //   1. `textContent = ''` is required for IE11 + JAWS
      //   2. `innerHTML = '&nbsp;'` is required for Chrome + JAWS and NVDA
      //
      // All other browser/screen reader combinations support both methods.
      //
      // The wrapper `<span>` visually hides the space character so that it doesn't cause jank when added/removed.
      // N.B.: Setting `position: absolute`, `opacity: 0`, or `height: 0` prevents Chrome from detecting the DOM change.
      //
      // This technique has been tested in:
      //
      //   * JAWS 2019:
      //       - Chrome 70
      //       - Firefox 60 (ESR)
      //       - IE 11
      //   * NVDA 2018:
      //       - Chrome 70
      //       - Firefox 60 (ESR)
      //       - IE 11
      //   * ChromeVox 53
      this.showLabelText = false;

      // Prevent visual jank by temporarily displaying the label text in the ::before pseudo-element.
      // CSS generated content is normally announced by screen readers
      // (except in IE 11; see https://tink.uk/accessibility-support-for-css-generated-content/);
      // however, `aria-live` is turned off, so this DOM update will be ignored by screen readers.
      labelEl.setAttribute(
        MDCSnackbarFoundation.strings.ARIA_LIVE_LABEL_TEXT_ATTR,
        this.labelText,
      );

      setTimeout(() => {
        // Allow screen readers to announce changes to the DOM again.
        ariaEl.setAttribute('aria-live', priority);

        // Remove the message from the ::before pseudo-element.
        labelEl.removeAttribute(
          MDCSnackbarFoundation.strings.ARIA_LIVE_LABEL_TEXT_ATTR,
        );

        // Restore the original label text, which will be announced by screen readers.
        this.showLabelText = true;
      }, MDCSnackbarFoundation.numbers.ARIA_LIVE_DELAY_MS);
    },
  },
};
</script>
