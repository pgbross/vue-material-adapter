/* eslint-disable quote-props */
import { closest } from '@material/dom/ponyfill';
import { MDCSnackbarFoundation } from '@material/snackbar/foundation';

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
  data() {
    return {
      classes: {},
      hidden: false,
      actionHidden: false,
      showMessage: true,
    };
  },
  watch: {
    open: 'onOpen_',
    timeoutMs: 'onTimeoutMs_',
    closeOnEscape: 'onCloseOnEscape_',
  },

  mounted() {
    window.addEventListener('keydown', this.handleKeydownEvent);
    const adapter = {
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      announce: () => this.announce(this.$refs.labelEl),
      notifyOpening: () => this.$emit(strings.OPENING_EVENT, {}),
      notifyOpened: () => {
        this.$emit(strings.OPENED_EVENT, {});
        this.$emit('change', true);
        this.$emit('show', {});
      },
      notifyClosing: reason => {
        this.$emit(strings.CLOSING_EVENT, reason ? { reason } : {});
        this.$emit('update:reason', reason);
      },
      notifyClosed: reason => {
        this.$emit(strings.CLOSED_EVENT, reason ? { reason } : {});
        this.$emit('change', false);
        this.$emit('hide');
      },
    };

    const { closeOnEscape, timeoutMs } = this;
    this.foundation = new MDCSnackbarFoundation(adapter);
    this.foundation.init();

    if (timeoutMs !== void 0) {
      this.foundation.setTimeoutMs(timeoutMs);
    }

    this.foundation.setCloseOnEscape(closeOnEscape);
  },
  computed: {
    rootClasses() {
      return {
        'mdc-snackbar': 1,
        'mdc-snackbar--leading': this.leading,
        'mdc-snackbar--stacked': this.stacked,
      };
    },
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
    onCloseOnEscape_(nv) {
      this.foundation.setCloseOnEscape(nv);
    },
    onOpen_(value) {
      if (value) {
        this.foundation.open();
      } else {
        const { reason } = this;
        this.foundation.close(reason ? reason : '');
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
      return Boolean(closest(target, strings.ACTION_SELECTOR));
    },

    isActionIcon_(target) {
      return Boolean(closest(target, strings.DISMISS_SELECTOR));
    },

    announce(ariaEl, labelEl = ariaEl) {
      const priority = ariaEl.getAttribute('aria-live');

      const text = this.message;
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
      this.showMessage = false;

      // Prevent visual jank by temporarily displaying the label text in the ::before pseudo-element.
      // CSS generated content is normally announced by screen readers
      // (except in IE 11; see https://tink.uk/accessibility-support-for-css-generated-content/);
      // however, `aria-live` is turned off, so this DOM update will be ignored by screen readers.
      labelEl.setAttribute(strings.ARIA_LIVE_LABEL_TEXT_ATTR, this.message);

      setTimeout(() => {
        // Allow screen readers to announce changes to the DOM again.
        ariaEl.setAttribute('aria-live', priority);

        // Remove the message from the ::before pseudo-element.
        labelEl.removeAttribute(strings.ARIA_LIVE_LABEL_TEXT_ATTR);

        // Restore the original label text, which will be announced by screen readers.
        this.showMessage = true;
      }, numbers.ARIA_LIVE_DELAY_MS);
    },
  },
  render(createElement) {
    const surfaceNodes = [
      createElement(
        'div',
        {
          class: { 'mdc-snackbar__label': 1 },
          attrs: { role: 'status', 'aria-live': 'polite' },
          ref: 'labelEl',
        },
        [
          this.showMessage
            ? this.message
            : createElement('span', {
                style: { display: 'inline-block', width: 0, height: '1px' },
                domProps: {
                  innerHTML: '&nbsp;',
                },
              }),
        ],
      ),
    ];

    if (this.showDismissAction || this.actionText) {
      const buttonNodes = [];

      if (this.actionText) {
        buttonNodes.push(
          createElement(
            'button',
            {
              class: {
                'mdc-button': 1,
                'mdc-snackbar__action': 1,
              },
              attrs: { type: 'button' },
              ref: 'actionEl',
              on: this.$listeners,
            },
            this.actionText,
          ),
        );
      }

      if (this.showDismissAction) {
        buttonNodes.push(
          createElement(
            'button',
            {
              class: {
                'mdc-icon-button': 1,
                'mdc-snackbar__dismiss': 1,
                'material-icons': 1,
              },
              attrs: { title: 'Dismiss' },
            },
            ['close'],
          ),
        );
      }
      surfaceNodes.push(
        createElement(
          'div',
          { class: { 'mdc-snackbar__actions': 1 } },
          buttonNodes,
        ),
      );
    }

    return createElement(
      'div',
      { class: { ...this.rootClasses, ...this.classes }, ref: 'root' },
      [
        createElement(
          'div',
          {
            class: { 'mdc-snackbar__surface': 1 },
            on: { click: evt => this.surfaceClickHandler(evt) },
          },
          surfaceNodes,
        ),
      ],
    );
  },
};
