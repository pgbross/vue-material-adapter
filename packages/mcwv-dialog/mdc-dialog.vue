<template>
  <div
    ref="root"
    :class="classes"
    :style="styles"
    aria-modal="true"
    :aria-labelledby="'label' + vma_uid_"
    :aria-describedby="'desc' + vma_uid_"
    class="mdc-dialog"
    role="alertdialog"
    @click="onClick"
    @keydown="onClick"
  >
    <div ref="container" class="mdc-dialog__container">
      <div ref="surface" :class="surfaceClasses" class="mdc-dialog__surface">
        <h2 v-if="title" class="mdc-dialog__title" :id="'label' + vma_uid_">
          <!--
          -->{{ title
          }}<!---->
        </h2>
        <div ref="content" class="mdc-dialog__content" :id="'desc' + vma_uid_">
          <slot />
        </div>
        <footer v-if="accept || cancel" class="mdc-dialog__actions">
          <button
            type="button"
            v-if="cancel"
            class="mdc-button mdc-dialog__button"
            data-mdc-dialog-action="no"
          >
            {{ cancel }}
          </button>
          <button
            type="button"
            ref="defaultButton"
            :disabled="acceptDisabled"
            class="mdc-button mdc-dialog__button "
            data-mdc-dialog-action="yes"
          >
            {{ accept }}
          </button>
        </footer>
      </div>
    </div>
    <div class="mdc-dialog__scrim" />
  </div>
</template>

<script>
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
      classes: {
        'mdc-theme--dark': this.dark,
      },
      styles: {},
      surfaceClasses: {},
      bodyClasses: {
        'mdc-dialog__body--scrollable': this.scrollable,
      },
    };
  },
  watch: {
    open: 'onOpen_',
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

    onClick(event) {
      this.foundation.handleInteraction(event);
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
</script>
