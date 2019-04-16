/* eslint-disable quote-props */
import MDCDialogFoundation from '@material/dialog/foundation';
import * as util from '@material/dialog/util';
import { mdcButton } from '@mcwv/button';
import { VMAUniqueIdMixin } from '@mcwv/base';
import { closest, matches } from '@material/dom/ponyfill';
import createFocusTrap from 'focus-trap';
const strings = MDCDialogFoundation.strings;

export default {
  name: 'mdc-dialog',
  components: {
    mdcButton: mdcButton,
  },
  mixins: [VMAUniqueIdMixin],
  model: {
    prop: 'open',
    event: 'change',
  },
  props: {
    title: {
      type: String,
    },
    accept: {
      type: String,
      default: 'Ok',
    },
    acceptDisabled: Boolean,
    acceptRaised: {
      type: Boolean,
      default: false,
    },
    cancel: {
      type: String,
    },
    cancelRaised: {
      type: Boolean,
      default: false,
    },
    accent: Boolean,
    scrollable: Boolean,
    open: Boolean,
  },
  data() {
    return {
      classes: { 'mdc-dialog': 1 },
      styles: {},
      surfaceClasses: { 'mdc-dialog__surface': 1 },
      bodyClasses: {
        'mdc-dialog__body--scrollable': this.scrollable,
      },
    };
  },
  watch: {
    open: 'onOpen_',
  },
  render(createElement) {
    const surfaceNodes = [
      createElement(
        'div',
        {
          class: { 'mdc-dialog__content': 1 },
          attrs: { id: `desc${this.vma_uid_}` },
          ref: 'content',
        },
        this.$slots.default,
      ),
    ];

    if (this.title) {
      surfaceNodes.unshift(
        createElement(
          'h2',
          {
            class: { 'mdc-dialog__title': 1 },
            attrs: { id: `label${this.vma_uid_}` },
          },
          this.title,
        ),
      );
    }

    if (this.accept || this.cancel) {
      const buttons = [
        createElement(
          'button',
          {
            class: {
              'mdc-button': 1,
              'mdc-dialog__button': 1,
            },
            attrs: {
              'data-mdc-dialog-action': 'yes',
              disabled: this.acceptDisabled,
              type: 'button',
            },
            ref: 'defaultButton',
          },
          this.accept,
        ),
      ];

      if (this.cancel) {
        buttons.unshift(
          createElement(
            'button',
            {
              class: {
                'mdc-button': 1,
                'mdc-dialog__button': 1,
              },
              attrs: {
                'data-mdc-dialog-action': 'no',
                type: 'button',
              },
            },
            this.cancel,
          ),
        );
      }
      surfaceNodes.push(
        createElement(
          'footer',
          { class: { 'mdc-dialog__actions': 1 } },
          buttons,
        ),
      );
    }

    const surfaceElement = createElement(
      'div',
      { class: this.surfaceClasses, ref: 'surface' },
      surfaceNodes,
    );

    return createElement(
      'div',
      {
        class: this.classes,
        style: this.styles,
        attrs: {
          'aria-modal': 'true',
          'aria-labelledby': `label${this.vma_uid_}`,
          'aria-describedby': `desc${this.vma_uid_}`,
          role: 'alertdialog',
        },
        ref: 'root',
        on: {
          click: evt => this.foundation.handleInteraction(evt),
          keydown: evt => this.foundation.handleInteraction(evt),
        },
      },
      [
        createElement(
          'div',
          { class: { 'mdc-dialog__container': 1 }, ref: 'container' },
          [surfaceElement],
        ),
        createElement('div', { class: { 'mdc-dialog__scrim': 1 } }),
      ],
    );
  },
  mounted() {
    if (this.accept) {
      this.focusTrap = util.createFocusTrapInstance(
        this.$refs.container,
        createFocusTrap,
      );
    }

    this.buttons_ = [].slice.call(
      this.$el.querySelectorAll(strings.BUTTON_SELECTOR),
    );

    this.foundation = new MDCDialogFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      hasClass: className => this.$el.classList.contains(className),
      addBodyClass: className => document.body.classList.add(className),
      removeBodyClass: className => document.body.classList.remove(className),
      eventTargetMatches: (target, selector) => matches(target, selector),
      trapFocus: () => this.focusTrap && this.focusTrap.activate(),
      releaseFocus: () => this.focusTrap && this.focusTrap.deactivate(),
      isContentScrollable: () =>
        !!this.$refs.content && util.isScrollable(this.$refs.content),
      areButtonsStacked: () => util.areTopsMisaligned(this.buttons_),

      getActionFromEvent: event => {
        const element = closest(event.target, `[${strings.ACTION_ATTRIBUTE}]`);
        return element && element.getAttribute(strings.ACTION_ATTRIBUTE);
      },
      clickDefaultButton: () => {
        if (this.$refs.defaultButton) {
          this.$refs.defaultButton.click();
        }
      },
      reverseButtons: () => {
        this.buttons_.reverse();
        this.buttons_.forEach(button =>
          button.parentElement.appendChild(button),
        );
      },
      notifyOpening: () => this.$emit(strings.OPENING_EVENT, {}),
      notifyOpened: () => this.$emit(strings.OPENED_EVENT, {}),
      notifyClosing: action => {
        this.$emit('change', false);
        // console.log(action)
        this.$emit(strings.CLOSING_EVENT, action ? { action } : {});
      },
      notifyClosed: action =>
        this.$emit(strings.CLOSED_EVENT, action ? { action } : {}),
    });

    this.foundation.init();
    this.open && this.foundation.open();
  },
  beforeDestroy() {
    this.foundation.destroy();
  },
  methods: {
    onOpen_(value) {
      if (value) {
        this.foundation.open();
      } else {
        this.foundation.close();
      }
    },

    onCancel() {
      if (this.$listeners['validateCancel']) {
        this.$emit('validateCancel', {
          cancel: (notify = true) => {
            // if notify = false, the dialog will close
            // but the notifyAccept method will not be called
            // so we need to notify listeners the open state
            // is changing.
            if (!notify) {
              this.$emit('change', false);
            }
            this.foundation.cancel(notify);
          },
        });
      } else {
        this.foundation.cancel(true);
      }
    },
    onAccept() {
      if (this.$listeners['validate']) {
        this.$emit('validate', {
          accept: (notify = true) => {
            // if notify = false, the dialog will close
            // but the notifyAccept method will not be called
            // so we need to notify listeners the open state
            // is changing.
            if (!notify) {
              this.$emit('change', false);
            }
            this.foundation.accept(notify);
          },
        });
      } else {
        this.foundation.accept(true);
      }
    },
    show() {
      this.foundation.open();
    },
    close() {
      this.foundation.close();
    },
  },
};
