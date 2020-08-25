import { closest } from '@material/dom/ponyfill';
import { MDCSnackbarFoundation } from '@material/snackbar/foundation';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  watch,
} from '@vue/composition-api';

const { strings, numbers } = MDCSnackbarFoundation;

export default {
  name: 'mcw-snackbar',
  model: {
    prop: 'open',
    event: 'change',
  },
  props: {
    open: Boolean,
    stacked: Boolean,
    leading: Boolean,
    message: String,
    actionText: String,
    timeoutMs: [String, Number],
    closeOnEscape: { type: Boolean, default: true },
    dismissAction: { type: [String, Boolean], default: true },
    reason: String,
  },
  setup(props, { emit }) {
    const uiState = reactive({
      classes: {},
      hidden: false,
      actionHidden: false,
      showMessage: true,
      labelEl: null,
    });

    let foundation;

    const rootClasses = computed(() => {
      return {
        'mdc-snackbar': 1,
        'mdc-snackbar--leading': props.leading,
        'mdc-snackbar--stacked': props.stacked,
        ...uiState.classes,
      };
    });

    const showDismissAction = computed(() => {
      return typeof props.dismissAction === 'string'
        ? props.dismissAction != 'false'
        : props.dismissAction;
    });

    const handleKeydownEvent = evt => foundation.handleKeyDown(evt);

    const announce = (ariaEl, labelEl = ariaEl) => {
      const priority = ariaEl.getAttribute('aria-live');

      const text = props.message;
      if (!text) {
        return;
      }

      // Temporarily disable `aria-live` to prevent JAWS+Firefox from announcing the message twice.
      ariaEl.setAttribute('aria-live', 'off');

      // Temporarily clear `textContent` to force a DOM mutation event that will be detected by screen readers.
      // `aria-live` elements are only announced when the element's `textContent` *changes*, so snackbars
      // sent to the browser in the initial HTML response won't be read unless we clear the element's
      // `textContent` first.
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
      uiState.showMessage = false;

      // Prevent visual jank by temporarily displaying the label text in the ::before pseudo-element.
      // CSS generated content is normally announced by screen readers
      // (except in IE 11; see https://tink.uk/accessibility-support-for-css-generated-content/);
      // however, `aria-live` is turned off, so this DOM update will be ignored by screen readers.
      labelEl.setAttribute(strings.ARIA_LIVE_LABEL_TEXT_ATTR, props.message);

      setTimeout(() => {
        // Allow screen readers to announce changes to the DOM again.
        ariaEl.setAttribute('aria-live', priority);

        // Remove the message from the ::before pseudo-element.
        labelEl.removeAttribute(strings.ARIA_LIVE_LABEL_TEXT_ATTR);

        // Restore the original label text, which will be announced by screen readers.
        uiState.showMessage = true;
      }, numbers.ARIA_LIVE_DELAY_MS);
    };

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      announce: () => announce(uiState.labelEl),
      notifyClosed: reason => {
        emit(strings.CLOSED_EVENT, reason ? { reason } : {});
        emit('change', false);
        emit('hide');
      },
      notifyClosing: reason => {
        emit(strings.CLOSING_EVENT, reason ? { reason } : {});
        emit('update:reason', reason);
      },
      notifyOpened: () => {
        emit(strings.OPENED_EVENT, {});
        emit('change', true);
        emit('show', {});
      },

      notifyOpening: () => emit(strings.OPENING_EVENT, {}),

      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
    };

    const surfaceClickHandler = evt => {
      if (isActionButton_(evt.target)) {
        foundation.handleActionButtonClick(evt);
      } else if (isActionIcon_(evt.target)) {
        foundation.handleActionIconClick(evt);
      }
    };

    watch(
      () => props.open,
      nv => {
        if (nv) {
          foundation.open();
        } else {
          foundation.close(props.reason ? props.reason : '');
        }
      },
    );
    watch(
      () => props.timeoutMs,
      nv => {
        if (nv !== void 0) {
          foundation.setTimeoutMs(nv);
        }
      },
    );
    watch(
      () => props.closeOnEscape,
      nv => foundation.setCloseOnEscape(nv),
    );

    onMounted(() => {
      window.addEventListener('keydown', handleKeydownEvent);
      foundation = new MDCSnackbarFoundation(adapter);
      foundation.init();

      if (props.timeoutMs !== void 0) {
        foundation.setTimeoutMs(props.timeoutMs);
      }

      foundation.setCloseOnEscape(props.closeOnEscape);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('keydown', handleKeydownEvent);
      foundation.destroy();
    });

    return {
      ...toRefs(uiState),
      rootClasses,
      showDismissAction,
      surfaceClickHandler,
    };
  },
};

// ===
// Private functions
// ===

function isActionButton_(target) {
  return Boolean(closest(target, strings.ACTION_SELECTOR));
}

function isActionIcon_(target) {
  return Boolean(closest(target, strings.DISMISS_SELECTOR));
}
