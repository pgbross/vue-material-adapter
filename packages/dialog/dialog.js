import { MDCDialogFoundation } from '@material/dialog/foundation';
import * as util from '@material/dialog/util';
import { closest, matches } from '@material/dom/ponyfill.js';
import { VMAUniqueIdMixin } from '~/base/index.js';
import { mcwButton } from '~/button/index.js';
import { FocusTrap } from '@material/dom/focus-trap.js';

const { cssClasses } = MDCDialogFoundation;

export default {
  name: 'mcw-dialog',
  components: {
    mcwButton: mcwButton,
  },
  mixins: [VMAUniqueIdMixin],
  model: {
    prop: 'open',
    event: 'change',
  },
  props: {
    autoStackButtons: Boolean,
    escapeKeyAction: String,
    scrollable: Boolean,
    open: Boolean,
    role: String,
    scrimClickAction: { type: String, default: 'close' },
    tag: { type: String, default: 'div' },
    labelledBy: String,
    describedBy: String,
  },
  data() {
    return {
      classes: { 'mdc-dialog': 1 },
      styles: {},
    };
  },
  watch: {
    open: 'onOpen_',
  },

  mounted() {
    const LAYOUT_EVENTS = ['resize', 'orientationchange'];
    const strings = MDCDialogFoundation.strings;

    const { open, autoStackButtons, escapeKeyAction, scrimClickAction } = this;

    this.buttons_ = [].slice.call(this.$el.querySelectorAll(cssClasses.BUTTON));
    this.defaultButton = this.$el.querySelector(
      `[${strings.BUTTON_DEFAULT_ATTRIBUTE}]`,
    );

    const container = this.$el.querySelector(strings.CONTAINER_SELECTOR);
    if (!container) {
      throw new Error(
        `Dialog component requires a ${strings.CONTAINER_SELECTOR} container element`,
      );
    }

    this.content_ = this.$el.querySelector(strings.CONTENT_SELECTOR);

    this.focusTrapFactory_ = el => new FocusTrap(el);

    const adapter = {
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      hasClass: className => this.$el.classList.contains(className),
      addBodyClass: className => document.body.classList.add(className),
      removeBodyClass: className => document.body.classList.remove(className),
      eventTargetMatches: (target, selector) => matches(target, selector),
      trapFocus: initialFocusEl => this.focusTrap && this.focusTrap.trapFocus(),
      releaseFocus: () => this.focusTrap && this.focusTrap.releaseFocus(),
      getInitialFocusEl: () => this.getInitialFocusEl_(),
      isContentScrollable: () => util.isScrollable(this.content_),
      areButtonsStacked: () => util.areTopsMisaligned(this.buttons_),

      getActionFromEvent: event => {
        const elem = closest(event.target, `[${strings.ACTION_ATTRIBUTE}]`);
        return elem?.getAttribute(strings.ACTION_ATTRIBUTE);
      },
      clickDefaultButton: () => {
        this.defaultButton?.click();
      },
      reverseButtons: () => {
        const buttons = this.buttons_;
        return (
          buttons &&
          buttons
            .reverse()
            .forEach(button => button.parentElement?.appendChild(button))
        );
      },
      notifyOpening: () => {
        this.$emit(strings.OPENING_EVENT, {});
        LAYOUT_EVENTS.forEach(evt =>
          window.addEventListener(evt, this.handleLayout),
        );
        document.addEventListener('keydown', this.handleDocumentKeyDown);
      },
      notifyOpened: () => this.$emit(strings.OPENED_EVENT, {}),
      notifyClosing: action => {
        this.$emit('change', false);
        this.$emit(strings.CLOSING_EVENT, action ? { action } : {});

        LAYOUT_EVENTS.forEach(evt =>
          window.removeEventListener(evt, this.handleLayout),
        );
        document.removeEventListener('keydown', this.handleDocumentKeyDown);
      },
      notifyClosed: action => {
        this.$emit(strings.CLOSED_EVENT, action ? { action } : {});
      },
    };

    this.foundation = new MDCDialogFoundation(adapter);
    this.foundation.init();

    if (!autoStackButtons) {
      this.foundation.setAutoStackButtons(autoStackButtons);
    }

    if (typeof escapeKeyAction === 'string') {
      // set even if empty string
      this.foundation.setEscapeKeyAction(escapeKeyAction);
    }

    if (typeof scrimClickAction === 'string') {
      // set even if empty string
      this.foundation.setScrimClickAction(scrimClickAction);
    }
    this.onOpen_(open);
  },

  beforeDestroy() {
    this.foundation.destroy();
  },

  methods: {
    handleLayout() {
      this.foundation.layout();
    },
    handleDocumentKeyDown(e) {
      this.foundation.handleDocumentKeydown(e);
    },
    getInitialFocusEl_() {
      return document.querySelector(
        `[${MDCDialogFoundation.strings.INITIAL_FOCUS_ATTRIBUTE}]`,
      );
    },
    onOpen_(value) {
      if (value) {
        if (this.$refs.container) {
          this.focusTrap = util.createFocusTrapInstance(
            this.$el,
            this.focusTrapFactory_,
            this.getInitialFocusEl_() || void 0,
          );
        }
        this.foundation.open();
      } else {
        this.foundation.close();
      }
    },

    onClick(evt) {
      this.foundation.handleClick(evt);
    },
    onKeydown(evt) {
      this.foundation.handleKeydown(evt);
    },
  },
};
